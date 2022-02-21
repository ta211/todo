function addNewList() {
    alert('hello world alert!');
    console.log('hello world console');
}

function addListItem() {
    let list = document.getElementById("grocery-list");
    // Create parent list item
    let newItem = document.createElement("li");
    // Item text
    let itemInput = document.getElementById("text-input");
    newItem.appendChild(document.createTextNode(itemInput.value));
    // Delete button
    let newButton = document.createElement("button");
    newButton.appendChild(document.createTextNode("X"));
    newButton.setAttribute("class","delete-item");
    newButton.setAttribute("onclick", "deleteListItem(this.parentNode)");
    // Add to list item
    newItem.appendChild(newButton);
    // Add to list
    list.appendChild(newItem);
}

function deleteListItem(item) {
    item.parentNode.removeChild(item);
}