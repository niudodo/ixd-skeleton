var goals = require("../goals.json");

exports.addGoals = function(request, response) {    
	// Your code goes here
	console.log(goals)
	console.log(response.query);
	goals.goals.push({
		"goalContext":request.query.goalContext,
	});
	response.render('settings',goals);
	localStorage.setItem('goalsStorage', goals);
	console.log(goals);
 }