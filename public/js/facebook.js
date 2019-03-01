function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response){
  console.log(response);
  $(".facebookLogin p").hide();
  $("#name").text(response.name);
  $("#photo").attr("src", response.picture.data.url);
  window.location.href='/home';
  var pictureLink = response.picture.data.url;
  localStorage.setItem('fbPicture', pictureLink);
  console.log("picture of Facebook uploaded");
  var username = response.name;
  localStorage.setItem('fbUsername', username);
  console.log("username of facebook uploaded");
  console.log(pictureLink);
}
