const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];

function addItem(event) {
  event.preventDefault();
  const textInput = this.querySelector("[name=item]").value;
  const item = {
    text: textInput,
    done: false,
  };
  items.push(item);
  this.reset();
}

addItems.addEventListener("submit", addItem);
