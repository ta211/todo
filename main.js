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
    // Create checkbox 
    // <label for="check-value">Value</label>
    let checkId = "check-"+String(itemInput.value).toLowerCase();
    let checkLabel = document.createElement("label");
    checkLabel.appendChild(document.createTextNode(itemInput.value));
    checkLabel.setAttribute("for", checkId);
    // <input id="check-value" type="checkbox" class="complete-item" onclick="completeListItem(this)">
    let checkInput = document.createElement("input");
    checkInput.setAttribute("id", checkId);
    checkInput.setAttribute("type", "checkbox");
    checkInput.setAttribute("class", "complete-item");
    checkInput.setAttribute("onclick", "completeListItem(this)");
    // Create delete button
    let newButton = document.createElement("button");
    newButton.appendChild(document.createTextNode("X"));
    newButton.setAttribute("class","delete-item");
    newButton.setAttribute("onclick", "deleteListItem(this.parentNode)");
    // Add to list item
    // newItem.appendChild(document.createTextNode(itemInput.value));
    newItem.appendChild(checkLabel);
    newItem.appendChild(checkInput);
    newItem.appendChild(newButton);
    // Add to list
    list.appendChild(newItem);
}

function deleteListItem(item) {
    item.parentNode.removeChild(item);
}

function completeListItem(item) {
    if (item.checked) { // true if the input checkbox is checked
        item.parentNode.style.textDecoration = "line-through";
        // in css, this would be: "text-decoration: line-through"
    } else {
        item.parentNode.style.textDecoration = "none";
        // in css, this would be: "text-decoration: none"
    }
}