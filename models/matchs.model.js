const pool = require('../config/db')

module.exports.getAllMatchFinish = async () => {
	return await pool.query("SELECT * FROM matchs WHERE score is not null");
	pool.end()
}