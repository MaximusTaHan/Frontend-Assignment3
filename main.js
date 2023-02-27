let todoListTemplate = document.querySelector('#todo-template');
let todoContent = document.querySelector('#todo-content');
todoContent.appendChild(todoListTemplate.cloneNode(true).content);
let form = document.querySelector('#input');



