var mysql = require('mariadb');

var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "123456",
        port: 3306
        })
        .then(conn => {
                console.log("connected" + conn.threadId);
                
                conn.query("SELECT * from leo_db.orders")
                .then((rows) => {
                  console.log(rows); 
               


                  
                })





        })
        .catch(err => {
                console.log("got error111 " + err);
        });