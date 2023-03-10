let form = document.querySelector('#input');
let todoListTemplate = document.querySelector('#todo-template');
let todoContent = document.querySelector('#todo-content');
let toggleAllCheckbox = document.querySelector('#toggle-all');
let filterButtons = document.querySelector('.filters');
let clearCompletedButton = document.querySelector('#clear-button');

todoContent.appendChild(todoListTemplate.cloneNode(true).content);
let list = todoContent.querySelector('ul');

let todoItemTemplate = document.querySelector('#item-template');

form.onsubmit = event => {
    event.preventDefault();

    let textInput = form.elements.inputField.value;

    let newItem = todoItemTemplate.cloneNode(true).content;

    let newLabel = newItem.querySelector('label');
    newLabel.textContent = textInput;
    list.appendChild(newItem);

    form.elements.inputField.value = '';

    countCheckedItems();
};

// Adds an event listener to the entire todo-content container that listens for clicks
// If the click occurs on a button it will delete the closest list item element
todoContent.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        const todo = event.target.parentNode;
        todo.remove();
    }

    countCheckedItems();
})

filterButtons.addEventListener('change', (event) => {
    currentFilterSort(event.target.id);
})

function currentFilterSort(filterType) {
    let currentList = document.querySelectorAll('.todo')
    if (filterType === 'all') {
        for (item of currentList) {
            item.removeAttribute('hidden');
        }
    }
    if (filterType === 'active') {
        for (item of currentList) {
            let itemInput = item.querySelector('input');
            if (itemInput.checked) {
                item.setAttribute('hidden', true);
            }
            else {
                item.removeAttribute('hidden');
            }
        }
    }
    if (filterType === 'completed') {
        for (item of currentList) {
            let itemInput = item.querySelector('input');
            if (!itemInput.checked) {
                item.setAttribute('hidden', true);
            }
            else {
                item.removeAttribute('hidden');
            }
        }
    }
}

// Gets current list of items and removes the "completed" ones
clearCompletedButton.addEventListener('click', (event) => {
    let currentList = document.querySelectorAll('.todo');
    for (listItem of currentList) {
        let currentItem = listItem.querySelector('input');
        if (currentItem.checked) {
            listItem.remove();
        }
    }
    countCheckedItems();
})


toggleAllCheckbox.addEventListener('change', (event) => {
    let currentList = document.querySelectorAll('.todo');
    for (listItem of currentList) {
        let currentItem = listItem.querySelector('input');
        if (toggleAllCheckbox.checked) {
            currentItem.checked = true;
        }
        else {
            currentItem.checked = false;
        }
    }

    let filterType = document.querySelector('.filters input:checked');
    currentFilterSort(filterType.id);
    countCheckedItems();
})

function countCheckedItems() {
    let currentList = document.querySelectorAll('.todo');
    let checkedCounter = 0;
    let uncheckedCounter = 0;

    for (listItem of currentList) {
        let itemCheckbox = listItem.querySelector('input');
        if (itemCheckbox.checked) {
            checkedCounter++;
        }
        else {
            uncheckedCounter++;
        }
    }

    // visibility of toggle-all-checkbox
    let toggleAllLabel = document.querySelector('#toggle-all-label');
    // if there are items in the list
    if (currentList.length > 0) {
        toggleAllLabel.removeAttribute('hidden');
        // if all items are selected
        if (currentList.length === checkedCounter) {
            // check toggle-checkbox
            toggleAllCheckbox.checked = true;
        }
        // all items aren't selected
        else {
            // uncheck toggle-checkbox
            toggleAllCheckbox.checked = false;
        }
    }
    else {
        // if list is empty, hide toggle-checkbox
        toggleAllLabel.setAttribute('hidden', true);
    }

    toggleFeatureBar();
    itemsLeftDisplay(uncheckedCounter);
    // visibility of Clear completed-button
    let clearButton = document.querySelector('#clear-button');
    if (checkedCounter > 0) {
        clearButton.textContent = "Clear completed";
    }
    else {
        clearButton.textContent = "";
    }

}

function toggleFeatureBar() {
    let currentList = document.querySelectorAll('.todo');
    let featureBar = document.querySelector('.feature-bar')
    if (currentList.length > 0) {
        featureBar.removeAttribute('hidden');
    }
    else {
        featureBar.setAttribute('hidden', true);
    }
}

function itemsLeftDisplay(count) {
    let itemsLeft = document.querySelector('#incomplete-count');
    if (count === 1) {
        itemsLeft.textContent = count + ' item left';
    }
    else {
        itemsLeft.textContent = count + ' items left';
    }
}

