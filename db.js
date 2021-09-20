const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGODB
  
const mongooseConnection = () => {
    mongoose.connect(
        MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => {
            console.log(`server has been started on ${MONGO_URI}`);
        }
    )
}

module.exports = mongooseConnection;