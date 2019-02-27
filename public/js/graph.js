

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
    ['Family', 10, 24, 20, 32, 18, 5, ''],
    ['Friend', 16, 22, 23, 30, 16, 9, ''],
    ['School', 28, 19, 29, 30, 12, 13, '']
  ]);

  var options = {
    width:400,
    height:300,
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' },
    isStacked: true,
    series: {
      0:{color:'#FFBA4C'},
      1:{color:'#FFC466'},
      2:{color:'#FFD799'},
      3:{color:'#0085B2'},
      4:{color:'#0098CC'},
      5:{color:'#00ABE5'}
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('chart')); 
  chart.draw(data, options);
}

