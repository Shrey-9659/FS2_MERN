// Main global state
let tasks = [];
let currentEditId = null;
const apiUrl = 'http://localhost:8080/api/tasks'

// DOM Elements
const form = document.getElementById('task-form');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const priorityInput = document.getElementById('priority');
const cancelEditBtn = document.getElementById('cancel-edit');
const tasksContainer = document.getElementById('tasks-container');
const tasksCount = document.getElementById('tasks-count');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const toast = document.getElementById('toast');

// Event Listeners
form.addEventListener('submit', handleFormSubmit);
cancelEditBtn.addEventListener('click', cancelEdit);

// Initialize
loadTasks();

// --- Form Submit ---
async function handleFormSubmit(e) {
    e.preventDefault();

    const taskData = {
        title: titleInput.value.trim(),
        description: descriptionInput.value.trim(),
        priority: priorityInput.value,
    };

    if (!taskData.title) {
        showToast('Please enter a task title', 'error');
        return;
    }

    try {
        if (currentEditId) {
            await updateTask(currentEditId, taskData);
            showToast('Task updated successfully', 'success');
            cancelEdit();
        } else {
            await createTask(taskData);
            showToast('Task created successfully', 'success');
            form.reset();
        }

        loadTasks();
    } catch (err) {
        showToast(err.message || 'An error occurred', 'error');
    }
}

// --- Load Tasks ---
async function loadTasks() {
    try {
        showLoading(true);
        hideError();

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        tasks = await response.json();
        renderTasks();
        updateTasksCount();
    } catch (err) {
        showError('Failed to load tasks. Please check your connection.');
        console.error(err);
    } finally {
        showLoading(false);
    }
}

// --- Create Task ---
async function createTask(taskData) {
    const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Failed to create task');
    }

    return res.json();
}

// --- Update Task ---
async function updateTask(id, taskData) {
    const res = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Failed to update task');
    }

    return res.json();
}

// --- Delete Task ---
async function deleteTask(id) {
    const res = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Failed to delete task');
    }

    return res.json();
}

// --- Toggle Completion ---
async function toggleTaskCompletion(id, completed) {
    return updateTask(id, { completed });
}

// --- Render Tasks ---
function renderTasks() {
    if (tasks.length === 0) {
        tasksContainer.innerHTML = `<div class="empty-state"><h3>No tasks yet</h3><p>Add your first task to get started!</p></div>`;
        return;
    }
    tasksContainer.innerHTML = tasks.map(task => createTaskCard(task)).join('');
}

// --- Create Task Card ---
function createTaskCard(task) {
    const createdDate = new Date(task.createdAt).toLocaleDateString();
    const completedClass = task.completed ? 'completed' : '';

    return `
        <div class="task-card ${completedClass}" data-id="${task._id}">
            <div class="task-header">
                <h3 class="task-title">${escapeHtml(task.title)}</h3>
                <span class="task-priority priority-${task.priority}">${task.priority}</span>
            </div>
            ${task.description ? `<p class="task-description">${escapeHtml(task.description)}</p>` : ''}
            <div class="task-meta">
                Created: ${createdDate} ${task.completed ? `• Completed: ${new Date(task.updatedAt || task.createdAt).toLocaleDateString()}` : ''}
            </div>
            <div class="task-actions">
                <button class="btn ${task.completed ? 'btn-secondary' : 'btn-success'}" onclick="toggleTask('${task._id}', ${!task.completed})">
                    ${task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button class="btn btn-primary" onclick="editTask('${task._id}')">Edit</button>
                <button class="btn btn-danger" onclick="confirmDeleteTask('${task._id}')">Delete</button>
            </div>
        </div>
    `;
}

// --- Escape HTML ---
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// --- Update Task Count ---
function updateTasksCount() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    tasksCount.textContent = `${total} task${total !== 1 ? 's' : ''} (${completed} completed)`;
}

// --- Edit Task ---
function editTask(id) {
    const task = tasks.find(t => t._id === id);
    if (!task) return;

    currentEditId = id;
    titleInput.value = task.title;
    descriptionInput.value = task.description || '';
    priorityInput.value = task.priority;

    cancelEditBtn.style.display = 'inline-block';
    form.querySelector('button[type="submit"]').textContent = 'Update Task';
    form.scrollIntoView({ behavior: 'smooth' });
}

// --- Cancel Edit ---
function cancelEdit() {
    currentEditId = null;
    form.reset();
    cancelEditBtn.style.display = 'none';
    form.querySelector('button[type="submit"]').textContent = 'Add Task';
}

// --- Toggle Complete ---
function toggleTask(id, completed) {
    toggleTaskCompletion(id, completed)
        .then(() => {
            showToast(completed ? 'Marked complete' : 'Marked incomplete', 'success');
            loadTasks();
        })
        .catch(err => {
            showToast('Failed to update task', 'error');
            console.error(err);
        });
}

// --- Confirm Delete ---
function confirmDeleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        deleteTaskById(id);
    }
}

// --- Delete by ID ---
function deleteTaskById(id) {
    deleteTask(id)
        .then(() => {
            showToast('Task deleted', 'success');
            if (currentEditId === id) cancelEdit();
            loadTasks();
        })
        .catch(err => {
            showToast('Failed to delete task', 'error');
            console.error(err);
        });
}

// --- Show Loading ---
function showLoading(show) {
    loading.style.display = show ? 'block' : 'none';
}

// --- Error Handling ---
function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.style.display = 'block';
}

function hideError() {
    errorMessage.style.display = 'none';
}

// --- Toast Notification ---
function showToast(msg, type) {
    toast.textContent = msg;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}