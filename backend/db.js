const mongoose = require('mongoose');

const database = 'express'

const MongoURI = `mongodb://0.0.0.0:27017/${database}`

async function ConnectToMongo(){
    try {
        await mongoose.connect(MongoURI)
        console.log('Connect to Mongo')
    } catch (err) {
        console.log(err)
    }
}

module.exports = ConnectToMongo