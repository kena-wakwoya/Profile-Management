
// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const Logger = require('./logger/api.logger');
const logger = new Logger();

// Import profile router
const profileRouter = require('./router/profile.router')


// Create an Express application
const app = express();
const port = process.env.PORT || 3000; // Set the port to listen on


app.use(bodyParser.json()); // Parse JSON bodies

// Use the profile router middleware
app.use('/api/profile', profileRouter);

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});




app.listen(port, () => {
    logger.info(`Server listening on the port  ${port}`);
})