require('dotenv').config({path: './config/.env'});
require('./config/db');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const teamsRoutes = require('./routes/teams.routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// routes
app.use('/api/teams', teamsRoutes);

// Server
app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`);
})