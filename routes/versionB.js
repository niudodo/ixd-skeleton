
/*
 * GET home page.
 */
var advices = require("../advices.json");
exports.viewVersionB = function(req, res){
	console.log(advices);
  res.render("versionB",advices );
};