//define global variables
    //imports express module
const express = require('express');
    //imports instance of "app" from the express module
const app = express();
    //imports the routes from the API
const apiRoutes = require('./routes/api');

//sets up app to view the index and final file
app.set('view engine', 'ejs');
//sets up the use of the style sheet
app.use(express.static('public'));
//sets up the use of the API itself
app.use('/', apiRoutes);

//start the server on port 8000
app.listen(8000, () => 
    {
  //logs to the console and sents what port the website is running on
  console.log('Server running on port 8000');
    });