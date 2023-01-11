const mysql = require("mysql")
const con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "admin",
    database: "INFOSYS",
    port: 3306
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connection SUCCESSFUL");
});

module.exports.con = con;