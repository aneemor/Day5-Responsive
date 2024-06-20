//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

//Adding a task to the to-do list
function addTodo(e) {
    //Prevent natural behavior
    e.preventDefault();

    //Create a todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create a list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    //Save to local
    saveLocalTodos(todoInput.value);

    //Add task to the list
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    //Create completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class = 'fas fa-check'></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create a trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class = 'fas fa-trash'></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Attach a final todo
    todoList.appendChild(todoDiv);
}

// Function to Delete tasks in the todo List
function deleteTodo(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        //at the end
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", (e) => {
            todo.remove();
        });
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        console.log(todo);
    }
}

// Function that filters tasks according to their status
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

// Function to save and remove tasks from the local storage
function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos.JSON.parse(localStorage.getItem('todos'));
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}
function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos.JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

//Function to get tasks from the local storage
function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos.JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        //Create todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //Create a list
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        todoInput.value = "";

        //Create completed button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = `<i class = 'fas fa-check'></i>`;
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
        //Create a trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = `<i class = 'fas fa-trash'></i>`;
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        //Attach a final todo
        todoList.appendChild(todoDiv);
    });
}










