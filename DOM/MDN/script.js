const list = document.querySelector("ul");
const inputElem = document.querySelector("input");
const buttonElem = document.querySelector("button");

buttonElem.addEventListener("click", (event) => {
  event.preventDefault();
  const currentValue = inputElem.value;
  inputElem.value = "";

  const listItem = document.createElement("li");
  const spanElem = document.createElement("span");
  const deleteButton = document.createElement("button");

  listItem.appendChild(spanElem);
  listItem.appendChild(deleteButton);

  spanElem.textContent = currentValue;
  deleteButton.textContent = "Delete";

  list.appendChild(listItem);

  deleteButton.addEventListener("click", () => listItem.remove());
  inputElem.focus();
});
