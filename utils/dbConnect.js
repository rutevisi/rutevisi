const mongoose = require('mongoose')

const connection = {}

async function dbConnect(){
    if(connection.isConnected){
        return;
    }
    
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
    
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log("There's a problem while connexting to database", error)
    }
}

module.exports = dbConnect