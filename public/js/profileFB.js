$(document).ready(function(){
	initializePage();
})

function initializePage(){
	console.log("ProfileFB connected");
	var pictureLink = localStorage.getItem('fbPicture');
	$("#facebookPhoto").attr('src', pictureLink);
	var username = localStorage.getItem('fbUsername');
	$("#profileName").text(username);
	console.log(pictureLink);
}

