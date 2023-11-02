const todo2 = document.querySelectorAll(".todo2");
const form = document.querySelector("form");
const container = document.querySelector(".container");
const todoCard = document.querySelectorAll(".todoCard");
const flex = document.querySelector(".flex");
flex.addEventListener("click", () => {
  addtask2;
});

// todo2.addEventListener("click", () => {
//   document.querySelector(".addtask2").style.display = "flex";
// });

todo2.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".addtask2").style.display = "flex";
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target;
  console.log(formElement);

  const { elements } = event.target;

  // todoCard

  const card1 = document.createElement("div");
  card1.className = "card1";

  const cardTitle = document.createElement("h2");
  cardTitle.className = "cardTitle";
  cardTitle.textContent = elements.title.value;
  card1.appendChild(cardTitle);

  const cardDelete = document.createElement("img");
  cardDelete.src = "trash.png";
  cardDelete.className = "carDelete";
  cardTitle.appendChild(cardDelete);

  cardDelete.addEventListener("click", () => {
    card1.remove();
  });

  const cardDescription = document.createElement("p");
  cardDescription.className = "cardDescription";
  cardDescription.textContent = elements.Description.value;
  card1.appendChild(cardDescription);

  // const cardStatus = document.createElement("p");
  // cardStatus.className = "cardStatus";
  // cardStatus.textContent = elements.Status.value;
  // card1.appendChild(cardStatus);

  const cardPriority = document.createElement("p");
  cardPriority.className = "cardPriority";
  cardPriority.textContent = elements.Priority.value;
  card1.appendChild(cardPriority);

  if (elements.Status.value == "Todo") {
    todoCard[0].appendChild(card1);
  } else if (elements.Status.value == "In progress") {
    todoCard[1].appendChild(card1);
  } else if (elements.Status.value == "Stuck") {
    todoCard[2].appendChild(card1);
  } else if (elements.Status.value == "Done") {
    todoCard[3].appendChild(card1);
  }

  document.querySelector(".addtask2").style.display = "none";
});
