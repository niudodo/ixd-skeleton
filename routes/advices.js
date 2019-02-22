
/*
 * GET advices page.
 */
var advices = require("../advices.json");
exports.viewAdvice = function(req, res){
  res.render('advices',advices);
};
