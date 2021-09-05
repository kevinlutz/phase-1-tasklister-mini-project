//create event listener for form/submit
//trigger the creating of a new li & and for the value to be the text input value
//then append the value of the new li, to the ul
//create a delete button that removes the new li

// document.addEventListener("DOMContentLoaded", () => {
//   //global variables
//   const form = document.getElementById("create-task-form");
//   const text = document.getElementById("new-task-description");
//   const submit = document.querySelector("input[type=submit]");
//   const ul = document.getElementById("tasks");
//   const h1 = document.querySelector("h1");
//   h1.style.fontFamily = "monospace";
//   const body = document.querySelector("body");
//   let totalList = [];

//   //eventlistener
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const newLi = document.createElement("li"); //create li
//     const button = document.createElement("button"); //create X button
//     button.innerHTML = "X"; //inner text X
//     button.addEventListener("click", () => {
//       //make button remove li
//       newLi.remove();
//     });
//     newLi.innerHTML = text.value; //li inner text
//     newLi.appendChild(button); //append X button to li
//     ul.appendChild(newLi); //append li to ul
//     totalList.push(newLi); //push each li to array
//     console.log(totalList); //make sure they're added
//     text.value = ""; //erase value after its appended
//   });
// });

//font awesome trashcan
//<i class="far fa-trash-alt"></i>

//change background to blue (body.style.backgroundColor = "lightblue";)
//change submit value to 'Get After It!'
//create dropdown bar to select task urgency level
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const text = document.getElementById("new-task-description");
  const submit = document.querySelector("input[type=submit]");
  const ul = document.getElementById("tasks");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newLi = document.createElement('li')
    newLi.innerHTML = text.value
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'X'
    deleteButton.addEventListener('click', () => newLi.remove())
    newLi.appendChild(deletebutton);
    ul.appendChild(newLi)
    text.value = '';
  }

});
