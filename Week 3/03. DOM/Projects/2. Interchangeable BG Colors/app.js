// Getting Elements From The DOM
const btns = document.querySelectorAll(".btn");
const body = document.body;
// console.log(btns);

// Iterating over all buttons
// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const number = btn.value;
//     changeBackground(number);
//   });
// });

btns.forEach((button) => {
    button.addEventListener("click",() =>{
        const button_color = button.value;
        changeBackground(button_color);
    } )
});

function changeBackground(number) {
  // console.log(number);
  body.className = "";

  switch (number) {
    case "purple":
      body.classList.toggle("purple");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    default:
      break;
  }
}