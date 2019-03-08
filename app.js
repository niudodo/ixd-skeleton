
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var versionB = require('./routes/versionB');
var versionA = require('./routes/versionA');
// Example route
// var user = require('./routes/user');
var storyline = require('./routes/storyline');
var login = require('./routes/login');
var advices = require('./routes/advices');
var profile = require('./routes/profile');
var statistics = require('./routes/statistics');
var settings = require('./routes/settings');
var add = require('./routes/add');
var friend = require('./routes/storyline/friend');
var family = require('./routes/storyline/family');
var intro = require('./routes/intro');
var intro2 = require('./routes/intro2');
var intro3 = require('./routes/intro3');



var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.viewLogIn);
app.get('/home', index.view);
app.get('/home/versionB', versionB.viewVersionB);
app.get('/home/versionA', versionA.viewVersionA);
// Example route
// app.get('/users', user.list);
app.get('/storyline', storyline.viewStoryLine);
app.get('/advices', advices.viewAdvice);
app.get('/profile', profile.viewProfile);
app.get('/statistics', statistics.viewStatistics);
app.get('/settings', settings.viewSettings);
app.get('/add',add.addGoals);
app.get('/add',add.addWorking);
app.get('/storyline/friend',friend.viewFriend);
app.get('/storyline/family',family.viewFamily);
app.get('/intro', intro.viewIntro);
app.get('/intro2', intro2.viewIntro2);
app.get('/intro3', intro3.viewIntro3);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
