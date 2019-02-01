var body =  document.querySelector("body");
var guessed = document.querySelector(".guessed");
var hide = document.querySelector(".hide");
hide.style.visibility = "hidden";
var g;

document.onkeyup = function(event) {
    hide.style.visibility = "visible";
    var g = (event.key);
    var addH3 = document.createElement("h3");
    addH3.innerHTML = g;
    guessed.appendChild(addH3); 

  };
console.log

