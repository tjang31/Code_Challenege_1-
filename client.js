/* jshint esversion: 6 */
console.log( 'js' );
let number = 0;
/*$(document).ready(function() {
  $('#generateButton').on('click', function() {

  }); // end generateButton
}); // end doc ready
*/

$(document).ready( readyNow );

  function readyNow(){
  // calls when document is ready
  console.log( 'JQ' );
  $('#generateButton').on('click', readyNow());

  //}); // end generate click function
  //$('#generateButton').append('<p>' + number + '</p>');
  //$('#swapButton').on('click', count);
  //$('#deleteButton').on('click', count);
} // end document readyNOw

function count(){

} // end function count
