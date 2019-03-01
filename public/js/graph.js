

$(document).ready(initializePage);

function initializePage(){
	console.log("graph javascript connected ");
	google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawWeekChart);
}

function drawWeekChart() {
  var data = google.visualization.arrayToDataTable([
    ['','Positive Feelings', 'Negative Feelings', {role: 'style'}],
    ['S', 4, 5, ''],
    ['M', 2, 4, ''],
    ['Tu', 1, 3, ''],
    ['W', 3, 2, ''],
    ['Th', 2, 1, ''],
    ['F', 1, 4, ''],
    ['S', 1, 2, '']
    
    /*['','Passion','Happy',
    'Joy', 'Sad', 'Angry','Mediocre', {role: 'style'}],
    ['S', 1, 2, 2, 1, 3, 0, ''],
    ['M', 2, 0, 0, 5, 2, 0, ''],
    ['Tu', 1, 2, 3, 1, 1, 1, ''],
    ['W', 3, 2, 3, 0, 0, 0, ''],
    ['Th', 2, 1, 1, 3, 2, 0, ''],
    ['F', 1, 4, 2, 0, 2, 0, ''],
    ['S', 1, 2, 2, 0, 1, 1, '']*/
  /*['Day', 'Score'],
  [1, 3],
  [2, 4],
  [3, 2],
  [4, 1],
  [5, 4],
  [6, 5],
  [7, 3] */

  ]);

  var options = {
    /*width:300,
    height:300,
    hAxis: {title: 'Day', minValue: 1, maxValue: 7},
    vAxis: {title: 'Score', mineValue:0, maxValue: 5},
    legend: 'none'*/
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' },
    isStacked: true,
    series: {
        0:{color:'#FCAC2C'},
        //1:{color:'#FFC466'},
        //2:{color:'#FFD799'},
        1:{color:'#006384'},
        //4:{color:'#0085B2'},
        //5:{color:'#00ABE5'}
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('chart')); 
  chart.draw(data, options);
}

function drawDetailChart(){
  var data = google.visualization.arrayToDataTable([
    ['','time(s) of feelings',"Goal" {role: 'style'}],
    ['S', 4, 5, ''],
    ['M', 2, 4, ''],
    ['Tu', 1, 3, ''],
    ['W', 3, 2, ''],
    ['Th', 2, 1, ''],
    ['F', 1, 4, ''],
    ['S', 1, 2, '']]);
    
    var options = {
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' },
    isStacked: true,
    series: {
        0:{color:'#FCAC2C'},
        //1:{color:'#FFC466'},
        //2:{color:'#FFD799'},
        1:{color:'#ffffff',stroke-color:'#006384'},
        //4:{color:'#0085B2'},
        //5:{color:'#00ABE5'}
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('chart')); 
  chart.draw(data, options);
}
