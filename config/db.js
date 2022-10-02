const mariadb = require('mariadb')

const pool = mariadb.createPool({
	host: process.env.HOST_DB,
	user: process.env.USER_DB,
	password: process.env.PASSWORD_DB,
	port: process.env.PORT_DB,
	database: process.env.DATABASE_DB,
});

pool.getConnection()
.then(() => {console.log("Connected to Database")})
.catch((err) => {console.log("Failed to connect to db", err)})

BigInt.prototype.toJSON = function() {
	return this.toString()
}

module.exports = pool;