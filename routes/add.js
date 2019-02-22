var data = require("../goals.json");

exports.addGoals = function(request, response) {    
	// Your code goes here
	console.log(data)
	console.log(response.query);
	data.goals.push({
		"goalContext":request.query.goalContext,
	});
	response.render('settings',data);
	response.render('profile', data);
	console.log(data)
 }