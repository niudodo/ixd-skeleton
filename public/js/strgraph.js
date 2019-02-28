

$(document).ready(initializePage);

function initializePage(){
	console.log("graph javascript connected ");
	google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['','Passion','Happy',
    'Joy', 'Depressed', 'Angry','Mediocre', {role: 'style'}],
    ['Passion', 3, 0, 0, 0, 0, 0, ''],
    ['Happy', 0, 0, 0, 0, 0, 0, ''],
    ['Joy', 0, 0, 1, 0, 0, 0, ''],
    ['Sad', 0, 0, 0, 1, 0, 0, ''],
    ['Angry', 0, 0, 0, 0, 2, 0, ''],
    ['Mediocre', 0, 0, 0, 0, 0, 2, ''],
  ]);

  var options = {
    title: 'Feeling Based on this Storyline',
    width:400,
    height:300,
    legend: {position: 'none'},
    bar: { groupWidth: '75%' },
    isStacked: true,
    series: {
      0:{color:'#FCAC2C'},
      1:{color:'#FFC466'},
      2:{color:'#FFD799'},
      3:{color:'#006384'},
      4:{color:'#0085B2'},
      5:{color:'#00ABE5'}
    }
  };
  var strchart = new google.visualization.ColumnChart(document.getElementById('strchart')); 
  strchart.draw(data, options);
}

