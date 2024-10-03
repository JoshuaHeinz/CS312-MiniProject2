//define global variables
    //imports express module
const express = require('express');
    //imports axios to make HTTP requests to the API
const axios = require('axios');
    //creates a router to define routes
const router = express.Router();

//Handles submissions from the weather data
router.post('/weather', async (req, res) => 
    {
  //takes the city name from the user
  const city = req.body.city;
  //defines the API key
  const apiKey = '6ca51c7258c6146394bceaf573f44bd9';
  //defines the API url
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
  //will try to request the API
    try 
     {
        //requests the APIs help
        const response = await axios.get(apiUrl);
        //extracts the weather data
        const weatherData = response.data;
        //renders the data to the final ejs 
        res.render('final', { weather: weatherData });
    } 
    //catches error if no city found
    catch (error) 
    {
        //prints message if city is not found
        res.render('error', { message: 'Failed to retrieve data. Try again.' });

    }
});

//exports the router so it can be used in the app
module.exports = router;
