
const mysql = require('mysql');

const conn = mysql.createConnection(
    require('./../configs/db.config'),
);

conn.connect((err) => {
    if (err) console.log("error: ", err);
    console.log('Database connected');
});



conn.query("CREATE TABLE IF NOT EXISTS `user` ( `id` int(11) NOT NULL AUTO_INCREMENT, `firstName` varchar(70) DEFAULT NULL, `lastName` varchar(70) DEFAULT NULL, `address` varchar(50) DEFAULT NULL, `contact` varchar(20) DEFAULT NULL, `email` varchar(50) DEFAULT NULL, `password` varchar(255) DEFAULT NULL, `image` varchar(255) DEFAULT NULL, `role` enum('admin', 'member') DEFAULT NULL, PRIMARY KEY(`id`), UNIQUE KEY`email`(`email`)) ",
    (err, rows) => {
        if (err) console.log(err);
        else {
            conn.query(
                "CREATE TABLE IF NOT EXISTS `message` (                    `id` int(11) NOT NULL AUTO_INCREMENT,`senderId` int(11) DEFAULT NULL, `text` text,                `receiverId` int(11) DEFAULT NULL,                `image` varchar(255) DEFAULT NULL,                `status` varchar(30) DEFAULT NULL,                `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,                PRIMARY KEY(`id`),                KEY`senderId`(`senderId`),                CONSTRAINT`message_ibfk_1` FOREIGN KEY(`senderId`) REFERENCES`user`(`id`)            )"
                ,
                (err, rows) => {
                    if (err) console.log(err);
                });
        }
    });
