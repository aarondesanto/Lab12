$(document).ready(function() {

var total = 7.49;

$('#userSubmit').click(function(event) {
	event.preventDefault();
	var itemName = $('#itemInput').val();
	var itemPrice = $('#priceInput').val();
	total += parseFloat(itemPrice);
	$('ul').append("<li>" + itemName + ": $" + itemPrice + "</li>");
	$('#totalP').text("Total: $" + total);
});

});