'use strict';
if(process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}
/**
 * Module Dependencies
 */
const
    Http = require('http'),
    Mongoose = require('mongoose'),
    App = require('./app');
/**
 * Module variables
 */
const 
    {dBURL} = process.env,
    PORT = process.env.PORT || 3030;

/**
 * Create Server Instance, pass App as the Listener
 */
const Server = Http.createServer(App);
/**
 * Config Mongoose
 */
Mongoose.set('strictQuery', true);

/**
 * Connect to MongoDB Database and initiate Server on connection success
 */
let attemptsCounter = 0;
const connectionOptions = {
    autoIndex: false,
    maxPoolSize: 50,
    minPoolSize: 5
};

async function main() {    
    if(attemptsCounter == 5) {
        return process.exit(1);
    }
    try {
      await Mongoose.connect(dBURL, connectionOptions);
      console.log(`Successfully connected to ${dBURL}`);
      return Server.listen(PORT, () => console.log(`server UP on port: ${Server.address().port}`));
    }
    catch (err) {
      console.error('There was a db connection error');
      console.error(err.message);
      return setTimeout(main, 1000);
    }
}

main();

process.on('SIGINT', async () => {
    await Mongoose.connection.close();
    console.error('dBase connection closed due to app termination');
    return process.exit(0);
});