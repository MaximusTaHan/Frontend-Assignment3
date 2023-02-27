let form = document.querySelector('#input');

form.onsubmit = event => {
    event.preventDefault();
    
    let todoListTemplate = document.querySelector('#todo-template');
    let todoContent = document.querySelector('#todo-content');
    todoContent.appendChild(todoListTemplate.cloneNode(true).content);
    let newItemContent = form.elements.inputField.value;
    let newListItem = todoListTemplate.ul.li.cloneNode(true).content;


};

