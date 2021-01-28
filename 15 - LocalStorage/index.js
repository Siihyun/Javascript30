const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const plates = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

const addPlate = (plateList) => {
  plates.innerHTML = plateList
    .map((item, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id=item${i} ${
        item.done ? "checked" : ""
      }/>
        <label for="item${i}">${item.name}</label>
      </li>
      `;
    })
    .join("");
};

const handleSubmit = (e) => {
  e.preventDefault();
  const input = document.querySelector("input[name=item]");

  const plate = {
    name: input.value,
    done: false,
  };

  items.push(plate);
  addPlate(items);
  localStorage.setItem("items", JSON.stringify(items));
  addItems.reset();
};

const toggleUpdate = (e) => {
  if (!e.target.matches("input")) return;

  const id = e.target.dataset.index;
  items[id].done = !items[id].done;
  localStorage.setItem("items", JSON.stringify(items));
};

addItems.addEventListener("submit", handleSubmit);
plates.addEventListener("click", toggleUpdate);

addPlate(items);
