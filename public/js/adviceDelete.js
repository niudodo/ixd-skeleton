$(document).ready(function(){
	initializePage();
})

function initializePage(){
	console.log("javascript connected ");
	/*$("#NoToLastAdvice").click(buttonClick);
	$("#completeLastAdvice").click(buttonClick);*/
	$("#submitBtnDelete").click(submitClick);
	$("#submitBtnDidIt").click(submitClick);
}

function buttonClick(e){
	//e.preventDefault();
	console.log(this);
	$("#logTitle").text("You Logged: Nothing yet");
	$("#lastAdvice").text("NOTHING");
}
function submitClick(e){
	e.preventDefault();
	console.log(this);
	$("#contentNotCompleteAdvice").hide();
	$("#contentCompleteAdvice").hide();
	buttonClick();
}
