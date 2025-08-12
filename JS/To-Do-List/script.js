let form = document.getElementById("todoForm")
let todoInput = document.getElementById("todoInput")
let todoList = document.getElementById("todoList")


// Handle Form Submit
form.addEventListener("submit", (event) => {
    event.preventDefault() //Stops the page reload which is done by form submission
    let taskText = todoInput.value.trim();
    if(taskText === ""){
        alert("Please enter a task")
        return;
    }
    let li = document.createElement("li")
    li.innerHTML = `
    <span>${taskText}</span>
    <div>
        <button class="doneBtn">Done</button>
        <button class="deleteBtn">Delete</button>
    </div>
    `
    todoList.appendChild(li)
    form.reset();
    todoList.addEventListener("click", (e) => {
        if(e.target.classList.contains("doneBtn")){
            let li = e.target.closest("li");
            let task = li.querySelector("span")
            task.classList.toggle("done")
        }
        if(e.target.classList.contains("deleteBtn")){
            e.target.closest("li").remove()
        }
    })
})

/* <li>
    
</li> */