// Introduce Express and create an Express instance
const db = require('express')();
// Introduce custom API modules
const dbApi = require('./api');
// Introduce custom  defined path 
const path = require('path');
// Introduce body parser middleware for parsing request bodies
const bodyParser = require('body-parser');
// Using body parser middleware to parse request bodies in JSON and URL encoding formats
db.use(bodyParser.json())
db.use(bodyParser.urlencoded({ extended: false }));

// Introducing cors middleware for handling cross domain requests
const cors = require('cors');
db.use(cors());
// Mount the API module to the/mysql path
db.use('/mysql', dbApi);
// Start the server and listen on port 3200
db.get("/Homepage",(req,res)=>{
    res.sendFile(path.join(__dirname,'../view.html'));
  });
  db.get("/searchpage",(req,res)=>{
    res.sendFile(path.join(__dirname,'../list.html'));
  });
  db.get("/fundraiserpage",(req,res)=>{
    res.sendFile(path.join(__dirname,'../detail.html'));
  });
db.listen(3200);
// Output prompt information
console.log('Start in localhost:3200/Homepage');