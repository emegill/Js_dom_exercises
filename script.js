var input = document.getElementById("userinput");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var ul = document.querySelector("ul");
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");

	deleteButton.innerHTML = "delete";
	deleteButton.className = "delete";
	deleteButton.addEventListener("click", deleteListItem);

	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteButton);
	li.addEventListener("click", addToggleDone);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addToggleDone(e) {
	var clickedElement = e.currentTarget;

	clickedElement.classList.toggle("done");
}

function deleteListItem(event) {
  	var elementClicked = event.currentTarget;
  	var listItemToDelete = elementClicked.parentNode

  	listItemToDelete.parentNode.removeChild(listItemToDelete);
}

function bindEventHandlers() {
	var button = document.getElementById("enter");
	var intialListItems = document.querySelectorAll("li");
	var deleteButtons = document.getElementsByClassName("delete");

	button.addEventListener("click", addListAfterClick);
	input.addEventListener("keypress", addListAfterKeypress);

	for (var i = 0; i < intialListItems.length; i++) {
		intialListItems[i].addEventListener("click", addToggleDone);
		deleteButtons[i].addEventListener("click", deleteListItem);
	}
}

bindEventHandlers();


