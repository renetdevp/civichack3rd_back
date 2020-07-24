const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');

const getDataSchedule = require('./utils/schedules');
const runDB = require('./models');

runDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('common'));

app.head('/status', (req, res, next) => {
    res.status(200).json({
        msg: 'Server status green :)'
    });
});

app.get('/status', (req, res, next) => {
    res.status(200).json({
        msg: 'Server status green :)'
    });
});

app.use((err, req, res, next)=>{
    console.error(`Error: ${err}`);

    res.status(500).json({
        msg: 'Interval server error'
    });
});

app.use((req, res, next)=>{
    res.status(404).json({
        msg: 'Sorry, Not found :('
    });
});

module.exports = app;
