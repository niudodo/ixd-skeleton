
/*
 * GET home page.
 */
var advices = require("../advices.json");
exports.view = function(req, res){
	console.log(advices);
  res.render("index",advices );
};