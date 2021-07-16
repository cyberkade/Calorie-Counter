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
    // displayGoals();
  });
foodForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    createList();
})
const createList = ()=>{
  const item = foodForm.elements.food.value;
  const food = document.createElement("li");
  const ateToday = document.querySelector(".list-section");
  const foodList = document.querySelector("ul");
  ateToday.classList.remove("hide");
  food.classList.add("list");
  food.append(item);
  foodList.append(food);
  }
const toggleHide = (id) =>{
  const display = document.querySelector(id);
  display.classList.toggle('hide');
  console.log(display);
}