console.log("in toggleclues");


var clues = document.getElementsByClassName("ClueList-wrapper--3m-kd");
console.log("clues length is " + clues.length);

console.log("across removed, starting cluebar");
var clueBar = document.getElementsByClassName("ClueBar-text--1fYP2");
console.log("cluebar's length is " + clueBar.length);

console.log("visibility is " + window.getComputedStyle(clues[clue], null).getPropertyValue('visibility'));

if (window.getComputedStyle(clues[clue], null).getPropertyValue('visibility') == 'visible') {
  console.log("ac is " + window.getComputedStyle(clues[clue], null).getPropertyValue('visibility'));
 console.log("hiding across clues and cluebar");
  clues[clue].style.visibility = "hidden";
  clueBar[0].style.visibility = "hidden";
} else {
  console.log("ac is " + window.getComputedStyle(clues[clue], null).getPropertyValue('visibility'));
  console.log("showing across clues and cluebar")
  clues[clue].style.visibility = "visible";
  clueBar[0].style.visibility = "visible";
}