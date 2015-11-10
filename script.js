$(document).ready(function() {

var total = 7.49;

$('#userSubmit').click(function(event) {
	event.preventDefault();
	var itemName = $('#itemInput').val();
	var itemPrice = $('#priceInput').val();
	total += parseFloat(itemPrice);
	$('ul').append("<li>" + itemName + ": $" + itemPrice + "</li>");
	
	$('#totalP').text("Total: $" + total);
	console.log(itemName);
	console.log(itemPrice);
	console.log(total);
});


// $('li').hover(function() {
	// $(this).finish();
	// $(this).fadeTo(200, 0.25);
// }, function() {
	// $(this).finish();
	// $(this).fadeTo(200, 1);
// });

// $('li').click(function() { 
	// $(this).toggleClass('asdf');
	// $(this).text($(this).text() === 'Clicked!' ? '' : 'Clicked!');
// });




});