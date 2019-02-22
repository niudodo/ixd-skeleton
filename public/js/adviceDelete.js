$(document).ready(function(){
	initializePage();
})

function initializePage(){
	console.log("javascript connected ");
	$("#NoToLastAdvice").click(buttonClick);
	$("#completeLastAdvice").click(buttonClick);
}

function buttonClick(e){
	e.preventDefault();
	console.log(this);
	$("#logTitle").text("You Logged: Nothing yet");
	$("#lastAdvice").text("NOTHING");
}
