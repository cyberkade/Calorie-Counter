const goalForm = document.querySelector("#goalForm");
const foodForm = document.querySelector("#foodForm");
let total = {
  carbs: 0,
  calories: 0,
  proteins: 0,
  fats: 0,
}
goalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    assignGoals();
    // displayGoals();
  });
foodForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    createList();
})
  const createList = ()=>{
    const item = foodForm.elements.food.value;
    const food = document.createElement("li");
    const ateToday = document.querySelector("h2");
    const foodList = document.querySelector("ul");

    ateToday.classList.remove("hide");
    food.classList.add("list");
    food.append(item);
    foodList.append(food);
  }