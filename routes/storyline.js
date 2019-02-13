var data = require("../storyline.json");

exports.viewStoryLine = function(req, res) { 
  // controller code goes here 
    console.log(data);
    res.render('storyline', data);
}; 
