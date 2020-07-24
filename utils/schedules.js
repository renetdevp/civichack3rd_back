const schedule = require('node-schedule');
const axios = require('axios');
const moment = require('moment');

const { api } = require('../const');
const AirData = require('../models/AirData');

const apiAxios = axios.create({
    baseURL: `http://openapi.seoul.go.kr:8088/${api.key}`
});

const getData = schedule.scheduleJob('0 0 * * * *', async () => {
    try {
        const { data: { RealtimeCityAir: airData } } = await apiAxios.get('/json/RealtimeCityAir/1/25');

        if (airData.RESULT.CODE !== 'INFO-000') console.log(`GET data fail`);
        else {
            const timeNow = moment().format('YYYYMMDDhhmm');

            console.log(`GET data success at ${timeNow}`);
            await AirData.create({ data: airData.row, time: timeNow });
        }
    } catch (err) {
        console.log(`Error while get AirData\n${err}`);
        throw new Error(err);
    }
});

module.exports = getData;
