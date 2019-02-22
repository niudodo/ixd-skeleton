

$(document).ready(function(){
	initializePage();
})

function initializePage(){
	console.log("javascript connected ");
	google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
  $.get("/..")
  var data = google.visualization.DataView.fromJSON();
  var options = {
    title: 'My Daily Activities'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
 	}

