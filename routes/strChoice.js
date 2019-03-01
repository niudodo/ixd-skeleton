var data =  [
			{	image: "/images/2019-02-07",
				story: "Your friend randomly starts crying", 
				choice1: "Cheer them up",
				choice2: "Give them a hug",
				choice3: "Cry with them",
				choice4: "Tell them to stop crying and suck it up"}, 
			{
				image: "/images/2019-02-07",
				story: "Your friend is ignoring your texts", 
				choice1: "Find something fun to do to destress",
				choice2: "Ask them if anything is wrong",
				choice3: "They always do it. Let it go.",
				choice4: "Call and yell at them"
			},
			{
				image: "/images/2019-02-07",
				story: "Your friend is being sassy and you don't know why",
				choice1: "Be sassy back as a joke and laugh",
				choice2: "Make a joke to break the tension",
				choice3: "Don't react and hold back tears",
				choice4: "Tell her she's a bad friend"
			},{	
				image: "/images/2019-02-07",
				story: "Your friend is complaining to you about the same thing over and over", 
				choice1: "Ask them to bowl to get their mind off it",
				choice2: "Listen patiently",
				choice3: "Tell them they don't ask about your issues",
				choice4: "Roll your eyes and say 'this again?'"
			},{	
				image: "/images/2019-02-07", 
				story: "Your friend wants to go to a restaurant you don't like much", 
				choice1: "Go! You may find something new!",
				choice2: "She wants it so ofcourse I'll go",
				choice3: "Tell her yes but you want to choose next time",
				choice4: "Tell her she has bad taste"
			},{
				image: "/images/2019-02-07",
				story: "Your friend is being mean to your common friend", 
				choice1: "Read shakespeare out loud so they laugh",
				choice2: "Talk to them both and help work out things" ,
				choice3: "Let things play out. It's not worth it.",
				choice4: "Take sides and punch one of them"			}];

var num = 0;  
var score = 0;

$(document).ready(function(){
	console.log("javascript connected ");
	num = 0;
	score = 0;
	choicesfunction();
	$(".choices").click(buttonClick);
	$('#Joy').hide();
	$('#Happy').hide();
	$('#Mediocre').hide();
	$('#Sad').hide();
	$('#Angry').hide();
	//$('#strchart').hide();
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
		score = parseInt(((score+4)/ (num*4) )*5);
		console.log("score out of five is" + score);
		if (score==5) {
			$('#Joy').show();
			$('h2').text("You're mainly feeling joyous! YAY!")
		} 
		else if (score==4) {
			$('#Happy').show();
			$('h2').text("You're mainly feeling happy! Keep it up!")
		}
		else if (score==3){
			$('#Mediocre').show();
			$('h2').text("Why so meh? Remember, problems are temporary!")
		}
		else if (score==2) {
			$('#Sad').show();
			$('h2').text("Feeling a bit down? Don't worry, we've got you!")
		}
		else if (score==1) {
			$('#Angry').show();
			$('h2').text("A bit frustrated? We've all been there! Take a deep breath.")
		}
		//$('h2').text("your score is " + score + "/5");
		//$('h4').text("A low score correlates with a lower mood. A '5' would be very happy and a '1' would be very sad");
		//$('#strchart').show();
		$('#seeadvice').show()
	}
}

function buttonClick(e){
	e.preventDefault();
	console.log(this);
	if(this.id == "1"){
		score=score+4;
	}
	if(this.id == "2"){
		score=score+3;
	}
	if(this.id=="3"){
		score=score+2;
	}
	if(this.id=="4"){
		score=score+1;
	}
	console.log(score);
	var delayInMilliSec = 500;
	$(".choices").hide(300);
	setTimeout(choicesfunction, delayInMilliSec);
	$(".choices").show(300);
}
