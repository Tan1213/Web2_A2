// Introduce Express and create an Express instance
const db = require('express')();
// Introduce custom API modules
const dbApi = require('./api');
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
db.listen(3200);
// Output prompt information
console.log('Start Listening');