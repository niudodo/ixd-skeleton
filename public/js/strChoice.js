var data =  [
			{	image: "/images/2019-02-07",
				story: "When your friend randomly start crying", 
				choice1: "cry with her",
				choice2: "ask her if anything is wrong",
				choice3: "being serious and ignore her",
				choice4: "punch her"
			}, 
			{
				image: "/images/2019-02-07",
				story: "When your friend randomly start crying", 
				choice1: "cry with him",
				choice2: "ask him if anything is wrong",
				choice3: "being serious and ignore him",
				choice4: "punch him"
			}];

var num = 0;  

$(document).ready(function(){
	initializePage();
})

function initializePage(){
	console.log("javascript connected ");
	choicesfunction();
	$(".choices").click(buttonClick);
}

function choicesfunction() {
	console.log("choices Function called ");
	var choice1 = JSON.stringify((data[num]["choice1"]));
	console.log(choice1);
	var choice2 = JSON.stringify((data[num]["choice2"]));
	var choice3 = JSON.stringify((data[num]["choice3"]));
	var choice4 = JSON.stringify((data[num]["choice4"]));
	$('#choice1').text(choice1);
	$('#choice2').text(choice2);
	$('#choice3').text(choice3);
	$('#choice4').text(choice4);
	num++;
}

function buttonClick(e){
	e.preventDefault();
	var delayInMilliSec = 1000;
	$(".choices").hide(500);
	setTimeout(choicesfunction, delayInMilliSec);
	$(".choices").show(500);
}