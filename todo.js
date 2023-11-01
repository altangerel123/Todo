const todo2 = document.querySelector(".todo2");
const form = document.querySelector("form");
const container = document.querySelector(".container");
const todoCard = document.querySelector(".todoCard");

todo2.addEventListener("click", () => {
  document.querySelector(".addtask2").style.display = "flex";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target;
  console.log(formElement);

  const elements = event.target.elements;

  console.log(elements);

  // todoCard

  const card1 = document.createElement("div");
  card1.className = "card1";

  const cardTitle = document.createElement("h2");
  cardTitle.className = "cardTitle";
  cardTitle.textContent = elements.title.value;
  card1.appendChild(cardTitle);

  const carDelete = document.createElement("img");
  carDelete.src = "trash.png";
  carDelete.className = "carDelete";
  cardTitle.appendChild(carDelete);

  carDelete.addEventListener("click", () => {
    card1.remove();
  });

  const cardDescription = document.createElement("p");
  cardDescription.className = "cardDescription";
  cardDescription.textContent = elements.Description.value;
  card1.appendChild(cardDescription);

  const cardPriority = document.createElement("p");
  cardPriority.className = "cardPriority";
  cardPriority.textContent = elements.Priority.value;
  card1.appendChild(cardPriority);

  todoCard.appendChild(card1);

  document.querySelector(".addtask2").style.display = "none";
});
