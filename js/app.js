
//cached element references for input, button and ul element
const inputHere = document.getElementById('inp')
const btn = document.getElementById('submit-button')
const list = document.getElementById('todo-list')
// add cached element reference submit button 
const reset = document.getElementById('reset-button')
// console.log(reset)




// event listener to listen when "add to do" button has been clicked
btn.addEventListener('click', function(evt){
  //I need to create a new <li> element on click
  const newLi = document.createElement('li')
  //set the text of the new created <li> to the text the user enters
  newLi.textContent = inputHere.value
  //Reset the text input field to an empty string after click
  inputHere.value = ""
  //Add the new <li> element to the page, inside the <ul> element
  document.querySelector('ul').appendChild(newLi)

  //if user click button with no content there will be no value
  if(inputHere.value !== ""){

  }
})

reset.addEventListener('click', function(evt){
  // reset button on click removes ('li') to do list
  const removeList = list
  removeList.

  // reset.remove
})







