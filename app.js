const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

// middleware : pass urlencoded parameters
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);


//layout path
app.set('layout', './layouts/main');

// engine view
app.set('view engine', 'ejs');


// routes
const routes  = require('./server/routes/recipeRoutes.js');
app.use('/', routes);



// server listening
app.listen(port, ()=> console.log(`server listening on ${port}`));