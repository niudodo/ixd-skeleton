var goals = require("../goals.json");

exports.addGoals = function(request, response) {    
	// Your code goes here
	goals.goals.push({
		"goalContext":request.query.goalContext
	});
	response.render('settings',goals);
	console.log(goals);
 }

exports.addWorking = function(request,response) {
	console.log("addWorking called! ");
	goals.working.push({
		"workingContext":request.query.workingContext
	});
	response.render('settings', goals);
	console.log(goals);
}