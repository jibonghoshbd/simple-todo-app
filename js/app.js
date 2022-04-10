// find elemts 
const container = document.querySelector('.container');
const todoForm = document.querySelector('.todo-form')
const todoInput = document.getElementById('input-field');
const addTodoBtn = document.getElementById('addTodoBtn');
const messageElement = document.getElementById('message');
const totoLists = document.getElementById('lists');
// show message 
const showMessage = () => {
    messageElement.textContent = `Todo is added`
    messageElement.classList.add('bg-success')
    setTimeout(() => {
        messageElement.textContent = '';
        messageElement.classList.remove('bg-success')
    }, 2000);
}

// create todo 
const createTodo = (todoUniqueId, todoValue) => {
    const todoElement = document.createElement('li');
    todoElement.id = todoUniqueId;
    todoElement.classList.add('list-items')
    todoElement.innerHTML = `
    <span>${todoValue}</span>
    <span> <button class="listBtn" id="deleteBtn"> <i class="fa fa-trash"> </i> </button> </span>
    `
    totoLists.appendChild(todoElement)
}


// add todo 
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = todoInput.value;

    // unique id 
    const todoUniqueId = Date.now().toString();
    createTodo(todoUniqueId, todoValue)
    // show message 
    showMessage()

    // clear input value 
    todoInput.value = '';
}

// add event listener 
todoForm.addEventListener('submit', addTodo);

