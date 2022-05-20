const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
xd
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', finishedDeleted);

function checkIfEmpty(){
    if (todoInput.value.length === 0) {
        alert('please input a to do task')
        }
}


function addTodo(event){
    event.preventDefault();

    if (todoInput.value.length === 0) {
        alert('please input a to do task');
    }

    else {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText=todoInput.value;
        newTodo.classList.add('new-todo');
        todoDiv.appendChild(newTodo);

        const finished = document.createElement('button');
        finished.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
        finished.classList.add('finished-button');
        todoDiv.appendChild(finished);

        const deleted = document.createElement('button');
        deleted.innerHTML = '<i class="fa fa-minus" aria-hidden="true"></i>';
        deleted.classList.add('deleted-button');
        todoDiv.appendChild(deleted);

        todoList.appendChild(todoDiv);
        todoInput.value = '';
    }
}

function finishedDeleted(e) {
    const item = e.target
    if(item.classList[0] === 'deleted-button'){
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === 'finished-button'){
        const todo = item.parentElement;
        todo.classList.toggle('finish')
    }    
}
