const suitcase = document.getElementById("suitcase");
const items = document.querySelectorAll(".draggable");

items.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
  });
});

suitcase.addEventListener("dragover", (e) => {
  e.preventDefault();
});

suitcase.addEventListener("drop", (e) => {
  const id = e.dataTransfer.getData("text");
  const item = document.getElementById(id);
  suitcase.appendChild(item);
});
