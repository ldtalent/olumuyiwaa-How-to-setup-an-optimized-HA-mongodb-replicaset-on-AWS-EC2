const { MongoClient } = require('mongodb');

const uri = `mongodb://ozo:qwerty123@mongo-pri-nlb-78a27ea335ca229b.elb.eu-west-1.amazonaws.com:27017,mongo-sec-nlb-7bd4fe6b7a3f8a26.elb.eu-west-1.amazonaws.com:27017,mongo-hid-nlb-5af7b016bb30ccce.elb.eu-west-1.amazonaws.com:27017/accountmgmnt?replicaSet=pixgallery&retryWrites=true&retryReads=true&w=majority&readPreference=secondaryPreferred`;

const dbName = `accountmgmnt`;
const collectionName = `testCollection`;
let mongoClient;
let dbConnection;
let collectionConnection;

async function connectToCluster(uri) {    
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to remote MongoDB Replica set');
        await mongoClient.connect();
        console.log(`Successfully connected to ${uri}!`);
        dbConnection = mongoClient.db(dbName);
        collectionConnection = dbConnection.collection(collectionName);
        return true;
    } 
    catch (err) {
        console.error('Connection to MongoDB failed!', err);
        process.exit(1);
    }
 }

 async function readExistingData() {

    try {
        console.log('attemtping to read from dbase...')       ;
        const existingData = await collectionConnection.find({}).toArray();
        existingData.forEach(obj => console.log(obj));
        return console.log('successfully read from database');
    }
    catch(err) {
        console.error('there was an error retrieving data...');
        return console.error(err);
    }
 }

 async function addRandomData() {

    let
        date = new Date().getTime(),
        xterBank = 'abcdefghijklmnopqrstuvwxyz',
        fstring = '',
        i;
    for(i = 0; i < 15; i++) {
        fstring += xterBank[parseInt(Math.random()*26)];
    }
    fstring += date;

    const doc = {
        payload: fstring
    };

    try {        
        const result = await collectionConnection.insertOne(doc);
        console.log('successfully added doc...');
        return console.log(result);
    }
    catch(err) {
        console.error('there was an error inserting the doc');
        return console.error(err);
    }
 }

 async function main() {
    await connectToCluster(uri);
    await addRandomData();
    await readExistingData();
    setTimeout(() => {
        process.exit(0);
    })
 }

 main();