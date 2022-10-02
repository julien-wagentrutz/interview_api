const pool = require('../config/db')

module.exports.getAllTeams = async () => {
	return await pool.query("SELECT * FROM teams");
	pool.end()
}