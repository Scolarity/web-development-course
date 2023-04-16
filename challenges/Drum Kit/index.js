for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () { 

    var buttonInnerHTML = this.innerHTML;

    addSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  
  addSound(event.key);
  buttonAnimation(event.key);
})

function addSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    default:
      alert("error");
      break;
  }
}

function buttonAnimation(currentKey) {
  
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");   
  }, 100);
}

// Calculator

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 -num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}