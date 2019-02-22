'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$('h3').click(function(event){
		console.log('click');
		event.preventDefault();
		var newName = anagrammedName($(this).text());
		$(this).text(newName);
	});
}


