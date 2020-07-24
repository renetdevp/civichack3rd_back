const mongoose = require('mongoose');

const { db } = require('../const');

const run = () => {
    const connect = async () => {
        try {
            await mongoose.connect(`${db.url}/admin`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                dbName: 'civic3rdhacker',
            });
        } catch (err) {
            console.log(`Error while connect to DB\n${err}`);
            throw new Error(err);
        }

        console.log('DB on');
    };

    connect();

    mongoose.connection.on('error', (err) => {
        console.log(`Error while running DB\n${err}`);
        throw new Error(err);
    });
    mongoose.connection.once('disconnected', (err) => {
        console.log(`DB disconnected`);
        throw new Error(err);
    });
};

module.exports = run;
