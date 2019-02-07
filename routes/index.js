
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render("index", {
  	"projects": [
  {	"name": "Calloge", 
  	"image": "FullSizeRender.jpg",
  	"id":"project1"
  },{
  	"name":"International Day Poster",
	"image":"poster2.jpg",
	"id":"project2"
  },{
  	"name":"WaterColor",
  	"image":"value-7.jpg",
  	"id":"project3"
  }
  	]
  });
};