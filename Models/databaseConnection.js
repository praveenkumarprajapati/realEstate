const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

const hosturl = "mongodb://localhost:27017/realestate"

mongoose.connect(hosturl, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection
    .once('open', () => {
        console.log("Database Connected Succsses")
    })
    .on('error', err => console.log("Error while connecting with Database ", err));