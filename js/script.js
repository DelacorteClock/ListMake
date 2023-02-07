//SUPPLEMENTARY CONTENT: ADAPT IN FUTURE
function modeSelect(mode, style, item, tCol1) {
    //Name the list
    listName = mode + style;
    //Name the page
    $('.page-title').text(listName);
    //Type instructions
    var instruction = $(`<p>Double click a ${item} to make a line through it, click 'x' to delete the ${item} or drag the ${item}s to reorder them.</p>`);
    $('#instruction-container').append(instruction);
    //Set page background colour and main text colour
    $('body').attr('style',`background-color: ${tCol1}`);
}

//Allow users to select values in the future
modeSelect('Clothing','Inventory','clothing item','#6E3219');
//modeSelect('Vehicle','Index','vehicle','#B933AD');
//modeSelect('Skyscraper','Inventory','skyscraper','#5E9732');

//ACTUAL PROJECT
function newItem() {
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
    //Make text decoration line
    function makeStrike() {
        currentLine.toggleClass('strike');
    }
    currentLine.on('dblclick', makeStrike);
    //Make a remove button
    var removeButton = $('<button-remove></button-remove>');
    removeButton.append(document.createTextNode('X'));
    currentLine.append(removeButton);
    //Make remove button work
    function deleteLine() {
        currentLine.addClass('delete');
    }
    removeButton.on('click', deleteLine);
    //Make list draggable
    $('#list').sortable();
}