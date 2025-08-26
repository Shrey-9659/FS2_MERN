let tasks = [];
let currentEditId = null;
const apiUrl = "http://localhost:8080/api/tasks"

const form = document.getElementById("task-form")
const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById("description")
const priorityInput = document.getElementById("priority")
const cancelEditBtn = document.getElementById("cancel-edit")
const taskContainer = document.getElementById("tasks-container")
const tasksCount = document.getElementById("tasks-count")
const loading = document.getElementById("loading")
const errorMessage = document.getElementById("error-message")
const toast = document.getElementById("toast")

// Event Listeners
form.addEventListener("submit", handleFormSubmit)

const handleFormSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
        title : titleInput.value.trim(),
        description : descriptionInput.value.trim(),
        priority : priorityInput.value
    };
    if(!taskData.title){
        showToast("Please enter a task title", 'error')
        return;
    }
    try {
        if(currentEditId){
            await updateTask(currentEditId, taskData)
            showToast("Task updated Successfully", 'success')
            cancelEdit()
        }else{
            await createTask(taskData);
            showToast("Taks created Successfully", 'success')
            form.reset()
        }
    } catch (error) {
        showToast(error.message || 'An error occurred', 'error')
    }
}
// Create task function 
const createTask = async(taskData) => {
    const res = await fetch(apiUrl, {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(taskData)
    })
    if(!res.ok){
        const error = await res.json()
        throw new Error(error.error || "Failed to create task")
    }

    res.json()
}

// Toast function
const showToast = (msg, type) => {
    toast.textContent = msg;
    toast.className = `toast ${type}`
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show')
    }, 3000)
}