const router = require('express').Router();
const teamsController = require('../controllers/teams.controller');

//Get the ranking of all teams
router.get('/ranking', teamsController.ranking);

module.exports = router;