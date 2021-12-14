const goalForm = document.querySelector("#goal-form");
const foodForm = document.querySelector("#food-form");

const total = {
  carbs: 0,
  calories: 0,
  proteins: 0,
  fats: 0,
};
goalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  appendEl(".append", ".goal-total", 4);
});
foodForm.addEventListener("submit", (e) => {
  e.preventDefault();
  updateTotal(".goal-total");
});
const listItem = () => {
  const userInput = foodForm.elements.food.value;
  const listItem = document.createElement("li");
  const list = document.querySelector("ul");
  listItem.classList.add("list");
  listItem.append(userInput);
  list.append(listItem);
};
const toggleHide = (id) => {
  const display = document.querySelector(id);
  display.classList.toggle("hide");
};

// parent is the element you want the object appended to, while num is the amount of parent objects you want to have the element appended to.

const appendEl = (parent1, parent2, num) => {
  const gCalories = goalForm.elements.goalCal.value;
  const gCarbs = goalForm.elements.goalCarbs.value;
  const gProteins = goalForm.elements.goalPro.value;
  const gFats = goalForm.elements.goalFats.value;
  if (
    Number.isNaN(gCalories) ||
    Number.isNaN(gCarbs) ||
    Number.isNaN(gProteins) ||
    Number.isNaN(gFats)
  ) {
    alert("Please Enter Numbers Only!");
  } else {
    const pTotal = document.querySelectorAll(parent2);
    const pGoal = document.querySelectorAll(parent1);
    const array = [gCalories, gCarbs, gProteins, gFats];
    for (let i = 0; i < num; i++) {
      pGoal[i].append(array[i]);
      pTotal[i].append(0);
      console.log(pTotal);
    }
    toggleHide(".intro");
    toggleHide("#display-section");
    toggleHide("#goal-form");
    toggleHide("#food-form");
    toggleHide(".list-section");
  }
};
const updateTotal = (parent) => {
  const servings = foodForm.elements.servings.value;
  const calories = foodForm.elements.calories.value;
  const carbs = foodForm.elements.carbs.value;
  const proteins = foodForm.elements.proteins.value;
  const fats = foodForm.elements.fats.value;
  if (
    Number.isNaN(calories) ||
    Number.isNaN(carbs) ||
    Number.isNaN(proteins) ||
    Number.isNaN(fats)
  ) {
    alert("Please Enter Numbers Only!");
  } else {
    const pTotal = document.querySelectorAll(parent);

    total.calories += calories * servings;
    total.carbs += carbs * servings;
    total.proteins += proteins * servings;
    total.fats += fats * servings;

    pTotal[0].innerText = total.calories;
    pTotal[1].innerText = total.proteins;
    pTotal[2].innerText = total.carbs;
    pTotal[3].innerText = total.fats;
    listItem();
    foodForm.elements.calories.value = "";
    foodForm.elements.carbs.value = "";
    foodForm.elements.proteins.value = "";
    foodForm.elements.fats.value = "";
    foodForm.elements.food.value = "";
    foodForm.elements.servings.value = "";
  }
};
