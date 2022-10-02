const pool = require('../config/db')

module.exports.getAllTeams = async () => {
	const teams =  await pool.query("SELECT * FROM teams")
	return teams;
}


module.exports.getTeamById = async (id) => {
	const team = await pool.query("SELECT * FROM teams WHERE id = ? ", id)
	return team;
}