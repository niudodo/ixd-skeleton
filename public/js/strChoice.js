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
			},
			{
				image: "/images/2019-02-07",
				story: "When you friend is being sassy and you don't know why", 
				choice1: "being sassy back",
				choice2: "ask her if anything is wrong",
				choice3: "being serious and ignore her",
				choice3: "walk away",
				choice4: "punch her"
			},{	
				image: "/images/2019-02-07",
				story: "When your friend is complaining to you about the same thing over and over", 
				choice1: "can you be quite for even a sec??",
				choice2: "listen quitely",
				choice3: "help her with the issue and give advice",
				choice4: "punch her"
			},{	
				image: "/images/2019-02-07",
				story: "When you firend want to go to a resturant you don't like much", 
				choice1: "Go with her unwillingly",
				choice2: "tell her you don't like that place and if you can go some other place",
				choice3: "tell her that we can go this time but we should go to a place of your choice next time",
				choice4: "punch her"
			},{
				image: "/images/2019-02-07",
				story: "When you firend is being mean to your common firend", 
				choice1: "being mean as well",
				choice2: "tell her to not be mean" ,
				choice3: "start reading shakespeare out loud",
				choice4: "punch her"
			}];

var num = 0;  
var score = 0;

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
	var story = JSON.stringify((data[num]["story"]));
	var choice1 = JSON.stringify((data[num]["choice1"]));
	console.log(choice1);
	var choice2 = JSON.stringify((data[num]["choice2"]));
	var choice3 = JSON.stringify((data[num]["choice3"]));
	var choice4 = JSON.stringify((data[num]["choice4"]));
	$('#story').text(story);
	$('#choice1').text(choice1);
	$('#choice2').text(choice2);
	$('#choice3').text(choice3);
	$('#choice4').text(choice4);
	num++;
	if(num==6){
		$('.choices').hide(500);
		$('#story').hide(500);
		$('#storyImg').hide(500);
		$('h2').text("your score is " + score + "/5");
		$('h4').text("A low score correlates with a lower mood. A '5' would be very happy and a '1' would be very sad");

	}
}

function buttonClick(e){
	e.preventDefault();
	console.log(this);
	if(this.id == "1"){
		score++;
	}
	if($(this).id == "2"){
		score++;
	}
	console.log(score);
	var delayInMilliSec = 1000;
	$(".choices").hide(500);
	setTimeout(choicesfunction, delayInMilliSec);
	$(".choices").show(500);
}
