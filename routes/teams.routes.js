const router = require('express').Router();
const teamsController = require('../controllers/teams.controller');

//Get the ranking of all teams
router.get('/ranking', teamsController.ranking);
//Get one team by id
router.get('/:id', teamsController.getTeam);


module.exports = router;