

$(document).ready(initializePage);

function initializePage(){
	console.log("graph javascript connected ");
	google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawWeekChart);
  if(window.location.pathname=="/statistics"){
  	google.charts.setOnLoadCallback(drawDetailChart);
  }
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
        0:{color:'#F8E896'},
        //1:{color:'#FFC466'},
        //2:{color:'#FFD799'},
        1:{color:'#53B8D1'},
        //4:{color:'#0085B2'},
        //5:{color:'#00ABE5'}
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('chart')); 
  chart.draw(data, options);
}

function drawDetailChart(){
 console.log("drawDetailChart called");
 var oldData = google.visualization.arrayToDataTable([
      ['Emotion', 'Times of log'],
      ['Happy', 5],
      ['Joy', 6],
      ['Mediocre', 3],
      ['Sad', 6],
      ['Depress', 3]
    ]);

    var newData = google.visualization.arrayToDataTable([
      ['Emotion', 'Times of log'],
      ['Happy', 7],
      ['Joy', 7],
      ['Mediocre', 2],
      ['Sad', 2],
      ['Depress', 2]
    ]);

    /*var colChartBefore = new google.visualization.ColumnChart(document.getElementById('colchart_before'));
    var colChartAfter = new google.visualization.ColumnChart(document.getElementById('colchart_after'));
    var colChartDiff = new google.visualization.ColumnChart(document.getElementById('colchart_diff'));*/
    var barChartDiff = new google.visualization.BarChart(document.getElementById('barchart_diff'));

    var options = { 
      diff: { newData:{widthFactor: 0.6, color:'#FF9893'}},
      legend: { position: 'top'},
    };
    var diffData = barChartDiff.computeDiff(oldData, newData);
    //colChartDiff.draw(diffData, options);
    barChartDiff.draw(diffData, options);
}

