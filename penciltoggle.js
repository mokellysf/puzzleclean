// If crossword pencil then
var pencil = document.getElementsByClassName("Icon-pencil--1cTxu Icon-icon--1RAWC");

if (pencil.length > 0) {
  console.log("pencil is " + pencil[0]);
  pencil[0].click();
}

// If acrostic pencil then
var ap = document.querySelector('#portal-game-toolbar > div > div:nth-child(3) > button.acrostic-tool.acrostic-tool__icon.acrostic-tool__pencil.pencil-mode-toggle');
if (ap != null) {
  console.log("ap pencil found!");
  ap.click(); 
}
