const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.MONGO_DBURIL, {
        dbName: process.env.MONGO_DBNAME,
        user: process.env.MONGO_DBUSER,
        pass: process.env.MONGO_DBPASS,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to database...')
    }).catch(err => console.log(err.message));
};
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas...');
});