var initialListItems = ["Buy Milk", "Complete Assignment"];

// creates and returns a to do list item
var createListItem = (newItem) => {
  var newListItem = document.createElement("li");
  newListItem.innerText = newItem;

  var newListIemButton = document.createElement("button");
  newListIemButton.innerText = "Done";
  newListIemButton.onclick = markAsDone;
  newListItem.appendChild(newListIemButton);
  return newListItem;
}

// adds a new item on click of the add button
var addButtonClick = () => {
  var itemName = document.getElementsByTagName("input")[0].value;
  var listUl = document.getElementsByTagName("ul")[0];
  listUl.appendChild(createListItem(itemName));
}

// marks an item as done on click of the done button
var markAsDone = (e) => {
  e.target.parentElement.classList.add("strikedItem");
}

// creates the initial list of to do list items
var createInitialList = (allItems) => {
  var listUl = document.getElementsByTagName("ul")[0];
  allItems.forEach((items) => {
    listUl.appendChild(createListItem(items));
  })
}

document.addEventListener("DOMContentLoaded", createInitialList(initialListItems), false);
