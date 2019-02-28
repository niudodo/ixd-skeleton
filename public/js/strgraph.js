

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
    ['Feelings Based on this Storyline', 1, 2, 2, 1, 3, 0, ''],
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
  var strchart = new google.visualization.ColumnChart(document.getElementById('strchart')); 
  strchart.draw(data, options);
}

