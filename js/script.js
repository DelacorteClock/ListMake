
function newItem() {

//javascript
//1. Adding a new item to the list of items: 
    var li = document.createElement('li');
    var inputValue = document.getElementById('input').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);

    if (inputValue === '') {
        alert('No Inputted Destination');
    } else {
        var list = document.querySelector('#list');
        list.appendChild(li);
    }

    //2. Crossing out an item from the list of items:
    function crossOut() {
        li.classList.toggle('strike');
    }

    li.addEventListener('dblclick', crossOut);

    //3(i). Adding the delete button 'X': 
    var removeButton = document.createElement('removeButton');
    removeButton.appendChild(document.createTextNode('X'));
    li.appendChild(removeButton);
    removeButton.addEventListener('click', deleteListItem);

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
        li.classList.add('delete')
    }
    // 4. Reordering the items: 
    $('#list').sortable();

}

function temp() {
    //Translated initial variables
    var currentLine = $('<li></li>');
    var inputValue = $('#input').val();
    //Give input value to current line
    currentLine.append(inputValue);
    //Check if inputted string is empty
    if (!inputValue) {
        alert('NO DESTINATION INPUTTED');
    } else {
        $('#list').append(currentLine);
    }

}