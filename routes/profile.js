
/*
 * GET advice page.
 */
var goals = require("../goals.json")
exports.viewProfile = function(req, res){
  res.render('profile', goals);
};