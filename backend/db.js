const mongoose = require("mongoose");
const mongoURI = 'mongodb://127.0.0.1:27017/toDo';
const connecToMongo = async() => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true })
        console.log('Connected to MongoDB')
      } catch (err) {
        console.error('Error connecting to MongoDB', err)
      }
};
module.exports = connecToMongo