const {connection} = require("../database/conection")

async function findAll(table) {

    const [rows] = await connection.query(
      `SELECT * FROM \`${table}\``
    );
    return rows;

}
module.exports = {findAll};