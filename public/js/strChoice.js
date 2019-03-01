var data =  [
			{	image: "/images/2019-02-07",
				story: "Your friend randomly starts crying", 
				choice1: "Cry with her",
				choice2: "Ask them if anything is wrong",
				choice3: "Remain serious and ignore her",
				choice4: "Tell her to stop crying and suck it up"			}, 
			{
				image: "/images/2019-02-07",
				story: "Your friend is ignoring your texts", 
				choice1: "Start crying",
				choice2: "Ask them if anything is wrong",
				choice3: "Let it go and wait",
				choice4: "Call and yell at them"
			},
			{
				image: "/images/2019-02-07",
				story: "Your friend is being sassy and you don't know why",
				choice1: "Be sassy back",
				choice2: "Ask her if anything is wrong",
				choice3: "Don't react",
				choice4: "Tell her she's a bad friend"
			},{	
				image: "/images/2019-02-07",
				story: "Your friend is complaining to you about the same thing over and over", 
				choice1: "Say 'can you be quiet for even a sec??'",
				choice2: "Listen quietly",
				choice3: "Help her with the issue and give advice",
				choice4: "Roll your eyes and say 'this again?'"
			},{	
				image: "/images/2019-02-07",
				story: "Your friend wants to go to a restaurant you don't like much", 
				choice1: "Go with her unwillingly",
				choice2: "Ask to go somewhere else",
				choice3: "Tell her yes but you want to choose next time",
				choice4: "Tell her she has bad taste"
			},{
				image: "/images/2019-02-07",
				story: "Your friend is being mean to your common friend", 
				choice1: "Be mean as well",
				choice2: "Tell her to not be mean" ,
				choice3: "Start reading shakespeare out loud",
				choice4: "Punch her"			}];

var num = 0;  
var score = 0;

$(document).ready(function(){
	console.log("javascript connected ");
	num = 0;
	score = 0;
	choicesfunction();
	$(".choices").click(buttonClick);
	$('#strchart').hide();
	$('#seeadvice').hide();
});

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
		//$('h4').text("A low score correlates with a lower mood. A '5' would be very happy and a '1' would be very sad");
		$('h4').text("A score of 0 correlates with Extremely Dissatisfied. A score of 1 correlates with Dissatisfied A score of 2 correlates with Neither Satisfied nor Dissatisfied. A score of 3 correlates with Somewhat Satisfied. A score of 4 correlates with Satisfied. A score of 5 correlates with Very Satisfied");
		//$('h4').text("A score of 1 correlates with Dissatisfied");
		//$('h4').text("A score of 2 correlates with Neither Satified nor Dissatisfied");
		//$('h4').text("A score of 3 correlates with Somewhat Satisfied");
		//$('h4').text("A score of 4 correlates with Satisfied");
		//$('h4').text("A score of 5 correlates with Extremely Satisfied");
		$('#strchart').show();
		$('#seeadvice').show();
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
	var delayInMilliSec = 500;
	$(".choices").hide(300);
	setTimeout(choicesfunction, delayInMilliSec);
	$(".choices").show(300);
}
