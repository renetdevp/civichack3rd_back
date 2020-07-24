const router = require('express').Router();

const AirData = require('../models/AirData');

router.get('/', async (req, res, next) => {
    try {
        const data = await AirData.findOne({}, { _id: 0 }).sort({ time: -1 });

        return res.status(200).json({
            data
        });
    } catch (err) {
        next(err);
    }
});

router.get('/msrrgns/:place', async (req, res, next) => {
    const place = decodeURIComponent(req.params.place);

    try {
        const { data } = await AirData.findOne({}, { _id: 0 }).sort({ time: -1 });
        const fltData = data.filter(v => v.MSRRGN_NM === place);

        if (!data) return res.status(404).json({ msg: 'Not found :(' });
        res.status(200).json({
            data: fltData
        });
    } catch (err) {
        next(err);
    }
});

router.get('/msrstes/:place', async (req, res, next) => {
    const place = decodeURIComponent(req.params.place);

    try {
        const { data } = await AirData.findOne({}, { _id: 0 }).sort({ time: -1 });
        const fltData = data.filter(v => v.MSRSTE_NM === place);

        if (!data) return res.status(404).json({ msg: 'Not found :(' });
        res.status(200).json({
            data: fltData
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
