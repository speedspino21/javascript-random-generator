"use strict";

var input = document.getElementById("item");
var submitButton = document.getElementById("submit");
var list = document.getElementById("list");
var generateButton = document.getElementById("generate");
var generated = document.getElementById("generated");
var itemsArray = [];
submitButton.addEventListener("click", function () {
  var itemName = input.value;

  if (itemName != "") {
    itemsArray.push(itemName);
    var itemElem = document.createElement("div");
    itemElem.classList.add("list-item");
    itemElem.innerText = itemName;
    list.appendChild(itemElem);
    input.value = "";
    return;
  }

  alert("Please enter an item");
});
generateButton.addEventListener("click", function () {
  generated.innerText = itemsArray[randomIndex(0, itemsArray.length)];
}); // Inclusive of min & max
// function randomIndex (min, max) {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function randomIndex(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}