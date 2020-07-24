require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');
const { server: { port } } = require('./const');

app.listen(port, () => {
    console.log('Server start');
});


process.once('exit', () => {
    mongoose.connection.close();
});
