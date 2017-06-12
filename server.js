var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/companyModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');   
  
var routes = require('./api/routes/companyRoutes');
routes(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
  
app.listen(port);

app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log(r.route.path)
  }
})

console.log('LilBusiness RESTful API server started on: ' + port);