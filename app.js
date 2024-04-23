//adding a listener event

//get access to the Paragraph

let paragraphElement = document.querySelector("p");

//add a function for the listener

function changeParagraphText() {
  paragraphElement.textContent = "Clicked";
}

// add event listener

paragraphElement.addEventListener("click", changeParagraphText);

//----------------------------------------------------------------

//listen to user input event

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
//   let enteredText = inputElement.value; //holds the current value of the element
let enteredText = event.target.value //same thing as above
// let enteredText = event.data // this shows the last data in input event
  console.log(enteredText);
//   console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);

//--------------------------------------------------------------------
