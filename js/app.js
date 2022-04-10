// find elemts 
const container = document.querySelector('.container');
const todoForm = document.querySelector('.todo-form')
const todoInput = document.getElementById('input-field');
const addTodoBtn = document.getElementById('addTodoBtn');
const messageElement = document.getElementById('message');
const totoLists = document.getElementById('lists');

const deleteTodo = (event) => {
    const selectedTodo = event.target.parentElement.parentElement.parentElement;
    totoLists.removeChild(selectedTodo);
    showMessage("todo is deleted", "danger");

    let todos = getTodosFromLocalStorage();
    todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
    localStorage.setItem("mytodos", JSON.stringify(todos));
}

// get todo form local storage 
const getTodosFromLocalStorage = () => {
    return localStorage.getItem("mytodos")
        ? JSON.parse(localStorage.getItem("mytodos"))
        : [];
};

// show message 
const showMessage = (text, status) => {
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`)
    setTimeout(() => {
        messageElement.textContent = '';
        messageElement.classList.remove(`bg-${status}`)
    }, 2000);
}

// create todo 
const createTodo = (todoId, todoValue) => {
    const todoElement = document.createElement('li');
    todoElement.id = todoId;
    todoElement.classList.add('list-items')
    todoElement.innerHTML = `
    <span>${todoValue}</span>
    <span> <button class="listBtn" id="deleteButton"> <i class="fa fa-trash"> </i> </button> </span>
    `
    totoLists.appendChild(todoElement)
    const deleteButton = todoElement.querySelector("#deleteButton");
    deleteButton.addEventListener("click", deleteTodo);
}


// add todo 
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = todoInput.value;

    // unique id 
    const todoId = Date.now().toString();
    createTodo(todoId, todoValue)
    // show message 
    showMessage("Todo Is Added", "success")

    // add to local sotorage 
    const todos = getTodosFromLocalStorage();
    todos.push({ todoId, todoValue });
    localStorage.setItem('mytodos', JSON.stringify(todos))
    // clear input value 
    todoInput.value = '';
}
// loadTodos
const loadTodos = () => {
    const todos = getTodosFromLocalStorage();
    todos.map((todo) => createTodo(todo.todoId, todo.todoValue));
};

// add event listener 
todoForm.addEventListener('submit', addTodo);
window.addEventListener("DOMContentLoaded", loadTodos);



