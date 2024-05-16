const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://RhuanFaria:rhuan159357@rhuan.nadn6jv.mongodb.net/';


let db = null;

async function conectarDb() {
    if (db == null) {
        const client = new MongoClient(url);
        await client.connect();
        db = client.db("agenda");
    }
    return db;
}

module.exports = conectarDb;