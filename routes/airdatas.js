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

module.exports = router;
