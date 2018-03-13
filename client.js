/* jshint esversion: 6 */
let count = 0;

$(document).ready( readyNow );

function readyNow (){
  // calls when document is ready
  $('#generateButton').on('click', appendDiv);
  $('#appendHere').on('click', '.swapButton', swapColors);
  $('#appendHere').on('click', '.deleteButton', deleteDiv);
} // end document readyNow

function appendDiv () {
  count++;
  let newDiv = '<div class="newDiv"><p>' + count + '</p> <button class="swapButton">Swap</button> <button class="deleteButton"> Delete </button> </div>';
  $('#appendHere').append(newDiv);
}

function swapColors() {
  $(this).parent().toggleClass('yellow');
//console.log('swap');
}

function deleteDiv () {
  $(this).parent().remove();
}
