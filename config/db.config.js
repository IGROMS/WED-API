const mongoose = require('mongoose')

const DB_NAME = 'WED';
const URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';

mongoose
  .connect("mongodb://127.0.0.1:27017/WED", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.info(`Successfully connected to the database`))
  .catch((error) => {
    console.error(`An error ocurred trying to connect to de database`, error);
    process.exit(0);
  });

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
});