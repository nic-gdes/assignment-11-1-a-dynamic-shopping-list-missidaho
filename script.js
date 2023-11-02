// Define id

const list = document.querySelector('#list');
list.innerHTML
const form = document.querySelector('#addToList');
const input = document.querySelector('#itemToAdd')


// Watch the form for submission submit the user entry to the list, prevent the form from diong its default action

addToList.addEventListener('submit', function (event){

//    prevent the form from the default submit action
event.preventDefault();

 // get the value the user entered from the input
const todoValue = input.value;
const newListItem = document.createElement('li');

const newSpan = document.createElement('span');
newSpan.textContent = todoValue;
newListItem.appendChild(newSpan);

const removeButton = document.createElement('button');
removeButton.textContent = "Remove";
removeButton.addEventListener('click', function(event){
    const btn = event.target;
    const parent = btn.parentNode;

    parent.remove();
})
newListItem.appendChild(removeButton);
list.appendChild(newListItem);

    // clear input and refocus on it
    input.value = '';
    input.focus();

})




   