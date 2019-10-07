const express = require('express');
var todoController = require('./controllers/todoController');

//init express js
const app = express();

//set up view engine ejs
app.set('view engine', 'ejs');

//set up the static links of assets files
app.use(express.static('./public'));

//use the first controller
todoController(app);

//listenning to port
app.listen('3000');