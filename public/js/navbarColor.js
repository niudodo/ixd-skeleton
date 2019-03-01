// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  changeColor();
})
var pagePath=window.location.pathname;
/*
 * Function that is called when the document is ready.
 */
function changeColor() {
  console.log("navbar js connected");
  if(pagePath=="/home"){
    $("#homeNav").css("background-color","#C7CBD1" );
    $("#profileNav").css("background-color","#EDEDED" );
    $("#statisticsNav").css("background-color","#EDEDED");
    $("#adviceNav").css("background-color","#EDEDED");
  }
  if(pagePath=="/profile"){
    $("#homeNav").css("background-color","#EDEDED" );
    $("#profileNav").css("background-color","#C7CBD1" );
    $("#statisticsNav").css("background-color","#EDEDED");
    $("#adviceNav").css("background-color","#EDEDED");
  }
  if(pagePath=="/statistics"){
    $("#homeNav").css("background-color","#EDEDED" );
    $("#profileNav").css("background-color","#EDEDED" );
    $("#statisticsNav").css("background-color","#C7CBD1");
    $("#adviceNav").css("background-color","#EDEDED");
  }
  if(pagePath=="/advices"){
    $("#homeNav").css("background-color","#EDEDED" );
    $("#profileNav").css("background-color","#EDEDED" );
    $("#statisticsNav").css("background-color","#EDEDED");
    $("#adviceNav").css("background-color","#C7CBD1");
  }
}