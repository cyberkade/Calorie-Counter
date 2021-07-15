const goalForm = document.querySelector("#goalForm");
const foodForm = document.querySelector("#foodForm");
let total = {
  carbs: 0,
  calories: 0,
  proteins: 0,
  fats: 0,
}
goalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    assignGoals();
    // displayGoals();
  });