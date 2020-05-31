// Setup empty JS object to act as endpoint for all routes
var projectData=[];
// Express to run server and routes
// Start up an instance of app
const express = require('express')
const app = express()
/*
/* Dependencies */ // body-parser, cors
const bodyParser = require('body-parser')
const cors = require('cors');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website')); 
// Spin up the server
const port=3000;

const server= app.listen(port, listening);
// Callback to debug
function listening(){
    console.log("server is running");
    console.log(`running on localhost: ${port}`);
}


// Callback function to complete GET '/all'
app.get('/all', sendData);
function sendData (request, response) {
    response.send(projectData);
  };

// Post Route
app.post('/all', addinfo);

function addinfo(req,res){
    newEntry=
        { temp: req.body.temp, 
         date: req.body.date, 
         user_response: req.body.user_response
        }
   projectData.push(newEntry);
   console.log(projectData);

};
