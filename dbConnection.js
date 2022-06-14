// user = root
//pass = 2401
//bd = news_poral1
//port = 3306

// const mysql = require('mysql');
// module.exports = () => {

//     return mysql.createConnection({

//         host: 'localhost',
//         user: 'root',
//         password: '2401',
//         database: 'news_portal1',
//         port: '3306'

//     });

// };



const mysql = require('mysql');
module.exports = () => {

    return mysql.createConnection({

        host: 'bxodxpskr9thch1cvwrt-mysql.services.clever-cloud.com',
        user: 'uklbdmem79fjwxsh',
        password: 'KofhP9dt6wRM3vaL9QNE',
        database: 'bxodxpskr9thch1cvwrt',
        port: '3306'

    });

};
