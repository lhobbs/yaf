'use strict';

const Hapi = require('hapi');
const mysql = require('mysql');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

// var Client = require('mysql').Client;
// var client = new Client(); 

// client.host = 'lisahobbscom.powwebmysql.com';
// client.user = 'yafuser';
// client.password = 'y@fU$3r';
// client.connect(function(err, results) {
//     if (err) {
//         console.log("Error: " + err.message);
//         throw err;
//     }
//      console.log("connected!");
//      clientConnected(client);
// })



//console.log(connection)
//  connection.connect();

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});


var connection = mysql.createConnection({
  host     : 'lisahobbscom.powwebmysql.com',
  user     : 'yafuser',
  password : 'y@fU$3r34',
  database : 'yaf'
});
 connection.connect();
    // connection.query(`INSERT INTO RSVP (Event, Name, Phone, Email, NumberGuests) 
    //                   VALUES('April', '${this.state.name}', '${this.state.phone}', '${this.state.email}', ${this.state.num})`)
    // connec