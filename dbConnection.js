// user = root
//pass = 2401
//bd = news_poral1
//port = 3306

const mysql = require('mysql');
module.exports = () => {

    return mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: '2401',
        database: 'news_portal1',
        port: '3306'

    });

};