var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


// Add event listener and Delete button to all items in existing list
function initializeList() {
    var itemList = ul.getElementsByTagName("li")
    for (var i = 0; i < itemList.length; i++) {
        addEventToItem(itemList[i]);
        itemList[i].appendChild(createDeleteButton());
    }
}

// Create new list item element using the input value. Add event listener and Delete button to it. Add it to existing list. Clear the input.
function creatListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    addEventToItem(li);
    li.appendChild(createDeleteButton());
    ul.appendChild(li);
    input.value = "";
}

// Get Input Length
function inputLength() {
    return input.value.length;
}

// Add event listener to a list item. Call listener function to toggle the style of an itme to/from ".done". 
function addEventToItem(item) {
    item.addEventListener("click", itemDoneAfterClick);
}


// Create A delete button. Addd event listener to delete list item after clicking the button. Append it to list item. 
function createDeleteButton() {
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"))
    deleteButton.addEventListener("click", deleteListAfterClick);
    return deleteButton;
}


// Listener function. Add List item after clicking "Enter" button. Listens to Enter button click event.
function addListAfterClick() {
    if (inputLength() > 0) {
        creatListElement();
    }
}

// Listener function. Add List item after pressing "Enter" on keyboard. Listens to input keypress event.
function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        creatListElement();
    }
}

// Listener function. Toggle the style of an itme to/from ".done". Listens to list item click event.
function itemDoneAfterClick(event) {
    event.target.classList.toggle("done");
}

// Listener function. Delete list item after clicking the delete button. Listens to Delete button click event
function deleteListAfterClick(event) {
    ul.removeChild(event.target.parentElement);
}


// Add event listener to button. Call listener function to add List item after clicking "Enter" button. 
button.addEventListener("click", addListAfterClick);

// Add event listener to input. Call listener function to add List item after pressing "Enter" on keyboard. 
input.addEventListener("keypress", addListAfterKeyPress);

// Initialize existing list
initializeList();
