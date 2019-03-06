var data =  [
			{	image: "/images/story1.png",
				story: "Your friend randomly starts crying", 
				choice1: "Cry with her",
				choice2: "Ask them if anything is wrong",
				choice3: "Remain serious and ignore her",
				choice4: "Tell her to stop crying and suck it up"}, 
			{
				image: "/images/2019-02-07.png",
				story: "Your friend is ignoring your texts", 
				choice1: "Start crying",
				choice2: "Ask them if anything is wrong",
				choice3: "Let it go and wait",
				choice4: "Call and yell at them"
			},
			{
				image: "/images/2019-02-07.png",
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

var datafam = [
			{	image: "/images/Family1.png",
				story: "You don't have much to talk about with your friend", 
				choice1: "Call and invite them to mini-golf",
				choice2: "Text 'So what's new?'",
				choice3: "Accept that you're not friends anymore",
				choice4: "Ask them to put more effort into the convo"},
			{	image: "/images/story1.png",
				story: "They cancel on you but post a story with someone else", 
				choice1: "Hang out with another friend",
				choice2: "Reschedule for tomorrow, it'll still be fun",
				choice3: "Wipe your tears with pizza in between bites",
				choice4: "Text another friend to complain"},
			{	image: "/images/story1.png",
				story: "You know your friend is free but they haven't asked to hang out", 
				choice1: "Show up to their door with food",
				choice2: "Send a text asking to hang out",
				choice3: "Wait for them to text you",
				choice4: "Check their story to see if they go out"},
			{	image: "/images/story1.png",
				story: "Your best friend keeps hanging out with their new friend", 
				choice1: "Ask to join them. You wanna meet them!",
				choice2: "Ask when they're free to hang with you",
				choice3: "Ask to hang out alone for once",
				choice4: "Ask your friend why they're ditching you"},
			{	image: "/images/story1.png",
				story: "Your new friend doesn't get along with your best friend", 
				choice1: "Invite both to group hangs so they become friends",
				choice2: "See what they think and go from there",
				choice3: "Hang out with them separately",
				choice4: "Only hang out with the new friend"},
			{	image: "/images/story1.png",
				story: "Your best friend talked bad about you to your other friend", 
				choice1: "Talk to your BFF about it to work it out",
				choice2: "Tell them you felt weird hearing about it",
				choice3: "Pretend it didn't happen",
				choice4: "Talk bad about her to the same friend"}];

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
	var imgSrc= JSON.stringify((data[num]["image"]));
	var choice1 = JSON.stringify((data[num]["choice1"]));
	console.log(choice1);
	var choice2 = JSON.stringify((data[num]["choice2"]));
	var choice3 = JSON.stringify((data[num]["choice3"]));
	var choice4 = JSON.stringify((data[num]["choice4"]));
	$('#story').text(story);
	$('#storyImg').attr(imgSrc);
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
