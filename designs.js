// When size is submitted by the user, call makeGrid()
	
function makeGrid(grid) {
// Your code goes here!
	$('table').children().remove();//clear the grid when ever submit button is entered
	// Select color input
	var row = $('#inputWeight').val();
	var col = $('#inputHeight').val();
	//create a new row and loop through for all the instances of 
	//i.
	for(var i = 1; i <= row; i++){
		$('table').append('<tr></tr>');
		//get the value of col (table detail) and create instance of col in each and every 
		//row
		
	}	
	for(var j = 1; j <= col; j++){
			$('tr').append('<td></td>');
			
		}
$('td').attr('class', 'cells');
	//listen to onclick event on every td cell then add a background
	//color to it base on the value of colorpicker
	$('.cells').click(function(e){
		var color = $('#colorPicker').val();
		$(e.target).css('background-color', color);
	});
}
$('#sizePicker').submit(function(event){
	//prevent the grid from being deleted after initialized
	event.preventDefault();
	makeGrid();
});