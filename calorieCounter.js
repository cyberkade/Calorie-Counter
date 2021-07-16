const goalForm = document.querySelector("#goalForm");
const foodForm = document.querySelector("#foodForm");
let calTotal = 0;
let carbTotal = 0;
let proTotal = 0;
let fatTotal = 0;
// let total = {
//   carbs: 0,
//   calories: 0,
//   proteins: 0,
//   fats: 0,
// }

goalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  assignGoals();
  displayGoals();
});
foodForm.addEventListener("submit", (e) => {
  adjustGoals();
  e.preventDefault();
  foodForm.elements.calories.value = "";
  foodForm.elements.carbs.value = "";
  foodForm.elements.proteins.value = "";
  foodForm.elements.fats.value = "";
  foodForm.elements.food.value = "";
  foodForm.elements.servings.value = "";
});

const assignGoals = () => {
  // const goalDiv = document.querySelectorAll(".goalDiv");
  const div = document.querySelector("#submit");
  const goalBtn = document.querySelector(".submitBtn");
  const calDiv = document.createElement("div");
  const carbDiv = document.createElement("div");
  const proDiv = document.createElement("div");
  const fatDiv = document.createElement("div");
  calDiv.append(`/${goalForm.elements.goalCalories.value} Calories`);
  carbDiv.append(`/${goalForm.elements.goalCarbs.value}g Carbs`);
  proDiv.append(`/${goalForm.elements.goalProteins.value}g Proteins`);
  fatDiv.append(`/${goalForm.elements.goalFats.value}g Fats`);
  // for (let i = 0; i < 4; i++) {
  //   goalDiv[i].remove();
  // }
  goalBtn.remove();
  calDiv.classList.add("bold");
  carbDiv.classList.add("bold");
  proDiv.classList.add("bold");
  fatDiv.classList.add("bold");
  div.classList.add("setGoals");
  div.append(calDiv);
  div.append(carbDiv);
  div.append(proDiv);
  div.append(fatDiv);
};

const displayGoals = () => {
  const div = document.querySelector("#foodEaten");
  const calDiv = document.createElement("div");
  const carbDiv = document.createElement("div");
  const proDiv = document.createElement("div");
  const fatDiv = document.createElement("div");

  calDiv.classList.add("displayCalProgress", "bolder");
  carbDiv.classList.add("displayCarbProgress", "bolder");
  proDiv.classList.add("displayProteinProgress", "bolder");
  fatDiv.classList.add("displayFatProgress", "bolder");

  calDiv.append(calTotal);
  carbDiv.append(carbTotal);
  proDiv.append(proTotal);
  fatDiv.append(fatTotal);
  div.append(calDiv);
  div.append(carbDiv);
  div.append(proDiv);
  div.append(fatDiv);
};

const adjustGoals = () => {
  const servings = foodForm.elements.servings.value;
  const item = foodForm.elements.food.value;
  const food = document.createElement("li");
  const ateToday = document.querySelector("h2");
  const foodList = document.querySelector("ul");





// **************************************************************************************
  const servings = foodForm.elements.servings.value;
  const nutrients = {
    calories: foodForm.elements.calories.value,
    carbs: foodForm.elements.carbs.value,
    proteins: foodForm.elements.proteins.value,
    fats: foodForm.elements.fats.value,
  };

  calTotal += parseInt(nutrients.calories * servings);
  carbTotal += parseInt(nutrients.carbs * servings);
  proTotal += parseInt(nutrients.proteins * servings);
  fatTotal += parseInt(nutrients.fats * servings);
// **************************************************************************************
}





//   ateToday.classList.remove("hide");
//   food.classList.add("list");
//   food.append(item);
//   foodList.append(food);

//   const calDiv = document.querySelector(".displayCalProgress");
//   const carbDiv = document.querySelector(".displayCarbProgress");
//   const proDiv = document.querySelector(".displayProteinProgress");
//   const fatDiv = document.querySelector(".displayFatProgress");
//   calDiv.innerText = calTotal;
//   carbDiv.innerText = carbTotal;
//   proDiv.innerText = proTotal;
//   fatDiv.innerText = fatTotal;

//   fatDiv.classList.add("fat");
//   proDiv.classList.add("protein");
// };



// const goalForm = document.querySelector("#goal-form");
// const foodForm = document.querySelector("#food-form");
// let total = {
//   carbs: 0,
//   calories: 0,
//   proteins: 0,
//   fats: 0,
// }
// goalForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     toggleHide('#display-section');
//     toggleHide('#goal-form');
//     toggleHide('#food-form');
//     toggleHide('.list-section');
//     assignGoals('.append','.goal-total',4);
//     // displayGoals();
//   });
// foodForm.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     listItem();

//     foodForm.elements.calories.value = "";
//     foodForm.elements.carbs.value = "";
//     foodForm.elements.proteins.value = "";
//     foodForm.elements.fats.value = "";
//     foodForm.elements.food.value = "";
//     foodForm.elements.servings.value = "";
// })
// const listItem = ()=>{
//   const userInput = foodForm.elements.food.value;
//   const listItem = document.createElement("li");
//   const list = document.querySelector("ul");
//   listItem.classList.add("list");
//   listItem.append(userInput);
//   list.append(listItem);
//   }
// const toggleHide = (id) =>{
//   const display = document.querySelector(id);
//   display.classList.toggle('hide');
// }

// // parent is the element you want the object appended to--- num is the amount of parent objects you want to have the element appended to.
// const assignGoals = (parent1, parent2, num) => {
// // replace 'goalCal, goalCarbs, etc.' with input's name you want to grab information from'
//   const calories = goalForm.elements.goalCal.value;
//   const carbs = goalForm.elements.goalCarbs.value;
//   const proteins = goalForm.elements.goalPro.value;
//   const fats = goalForm.elements.goalFats.value;
//   const pTotal = document.querySelectorAll(parent2);
//   const pGoal = document.querySelectorAll(parent1);
//   const array = [calories, carbs, proteins, fats] 
//   for(let i = 0; i < num; i++){
//     pGoal[i].append(array[i]);
//     pTotal[i].append(0);
//     console.log(pTotal);
//   }
// }
// const updateGoals = ()=>{

//   pTotal[i].append(total.calories);
// }
// assignGoals('.append','goal-total',4);