const matchsModel = require('../models/matchs.model')
const teamsModel = require('../models/teams.model')
const teamsHelper = require('../helpers/teams.helper')

module.exports.ranking = async (req, res) => {
	try {
		const matchs = await matchsModel.getAllMatchFinish();
		const teams = await teamsModel.getAllTeams();
		const stats = [];

		teams.forEach( team => {
			stats[team.id] = {
				points: 0,
				goal_average: 0,
				number_of_goal: 0,
				number_of_goal_take: 0,
				id: team.id,
				name: team.name,
				logo: team.logo
			};
		})

		matchs.forEach(match => {
			const score = match.score.split('-').map(Number);
			// Add Points
			if (score[0] > score[1]) stats[match.id_team_1].points += 3
			else if (score[0] < score[1]) stats[match.id_team_2].points += 3
			else { stats[match.id_team_1].points += 1; stats[match.id_team_2].points += 1 }

			// Add goal made
			stats[match.id_team_1].number_of_goal += score[0];
			stats[match.id_team_2].number_of_goal += score[1];

			//Add goal take
			stats[match.id_team_1].number_of_goal_take += score[1];
			stats[match.id_team_2].number_of_goal_take += score[0];

			// Get the average goal
			stats[match.id_team_1].goal_average = stats[match.id_team_1].number_of_goal - stats[match.id_team_1].number_of_goal_take;
			stats[match.id_team_2].goal_average = stats[match.id_team_2].number_of_goal - stats[match.id_team_2].number_of_goal_take
		})

		let ranking= [stats[teams[0].id]];
		for(let i = 1; i < teams.length; i++) {
			ranking = teamsHelper.compareTwoTeamsFromStat(stats[teams[i].id], ranking, ranking.length -1);
		}
		res.status(200).json(ranking.reverse());
	}
	catch (err) {
		res.status(400).json({err});
	}
}

module.exports.getTeam = async(req, res) => {
	try {
		const teams = await teamsModel.getTeamById(req.params.id);
		res.status(200).json(teams);
	}
	catch (err) {
		res.status(400).json({err});
	}
}