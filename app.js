const goalForm = document.querySelector("#goal-form");
const foodForm = document.querySelector("#food-form");
let total = {
  carbs: 0,
  calories: 0,
  proteins: 0,
  fats: 0,
}
goalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    toggleHide('#display-section');
    toggleHide('#goal-form');
    toggleHide('#food-form');
    toggleHide('.list-section');
    assignGoals('.append','.goal-total',4);
    // displayGoals();
  });
foodForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    listItem();

    foodForm.elements.calories.value = "";
    foodForm.elements.carbs.value = "";
    foodForm.elements.proteins.value = "";
    foodForm.elements.fats.value = "";
    foodForm.elements.food.value = "";
    foodForm.elements.servings.value = "";
})
const listItem = ()=>{
  const userInput = foodForm.elements.food.value;
  const listItem = document.createElement("li");
  const list = document.querySelector("ul");
  listItem.classList.add("list");
  listItem.append(userInput);
  list.append(listItem);
  }
const toggleHide = (id) =>{
  const display = document.querySelector(id);
  display.classList.toggle('hide');
}

// parent is the element you want the object appended to--- num is the amount of parent objects you want to have the element appended to.
const assignGoals = (parent1, parent2, num) => {
// replace 'goalCal, goalCarbs, etc.' with input's name you want to grab information from'
  const calories = goalForm.elements.goalCal.value;
  const carbs = goalForm.elements.goalCarbs.value;
  const proteins = goalForm.elements.goalPro.value;
  const fats = goalForm.elements.goalFats.value;
  const pTotal = document.querySelectorAll(parent2);
  const pGoal = document.querySelectorAll(parent1);
  const array = [calories, carbs, proteins, fats] 
  for(let i = 0; i < num; i++){
    pGoal[i].append(array[i]);
    pTotal[i].append(0);
    console.log(pTotal);
  }
}
const updateGoals = ()=>{



  pTotal[i].append(total.calories);
}
// assignGoals('.append','goal-total',4);