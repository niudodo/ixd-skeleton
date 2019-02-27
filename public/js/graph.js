

$(document).ready(initializePage);

function initializePage(){
	console.log("graph javascript connected ");
	google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['','Passion','Happy',
    'Joy', 'Depress', 'Angry','Mediocre', {role: 'style'}],
    ['S', 10, 24, 20, 32, 18, 5, ''],
    ['M', 10, 24, 20, 32, 18, 5, ''],
    ['Tu', 16, 22, 23, 30, 16, 9, ''],
    ['W', 28, 19, 29, 30, 12, 13, ''],
    ['Th', 16, 22, 23, 30, 16, 9, ''],
    ['F', 16, 22, 23, 30, 16, 9, ''],
    ['S', 10, 24, 20, 32, 18, 5, '']
  ]);

  var options = {
    width:400,
    height:300,
    legend: { position: 'top', maxLines: 3 },
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
  var chart = new google.visualization.ColumnChart(document.getElementById('chart')); 
  chart.draw(data, options);
}

