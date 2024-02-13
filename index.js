console.log("Kasia");

// array of objects 
const todos = [];

// 1. Add event listener for Add/Submit button

function addTodo() {
    // select input element and select its value
    const inputTodoElement = document.querySelector("#inputTodo")
    const title = inputTodoElement.value;

    todos.push({title: title, completed: false});
    renderTodos();
    console.log(todos);
}

function renderTodos() {
    const todoListElement = document.querySelector("#todoList")

    todoListElement.innerHTML = "";

    todos.forEach((todo, index) => {
        const listElement = document.createElement("li");
        listElement.innerHTML= `
            <p>${todo.title}</p>
            <p>${todo.completed ? "Completed" : "Pending"}</p>
            <button onclick="deleteTodo(${index})">Delete</button>
            <button onclick="toggleTodo(${index})">Toggle</button>
        `;

        todoListElement.appendChild(listElement);
    })
    console.log(todoListElement)
}

// delete todo

function deleteTodo(index) {
    console.log("Delete")
    todos.splice(index, 1);
    renderTodos();
}

// toggleTodo
function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}


renderTodos();

// 3. check if there is a value
// 4. If there is a value, create a new task

