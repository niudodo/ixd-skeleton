
/*
 * GET home page.
 */
var advices = require("../advices.json");
exports.viewVersionA = function(req, res){
	console.log(advices);
  res.render("versionA",advices );
};