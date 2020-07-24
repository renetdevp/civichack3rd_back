const { model, Schema } = require('mongoose');

const dataSchema = new Schema({
    MSRDT: String,
    MSRRGN_NM: String,
    MSRSTE_NM: String,
    PM10: Number,
    PM25: Number,
    O3: Number,
    NO2: Number,
    CO: Number,
    SO2: Number,
    IDEX_NM: String,
    IDEX_MVL: Number,
    ARPLT_MAIN: {
        type: String,
        enum: ['PM10', 'PM25', 'O3', 'NO2', 'CO', 'SO2', '점검중'],
    },
}, {
    _id: false,
    versionKey: false,
});

const airDataSchema = new Schema({
    data: [dataSchema],
    time: String,
}, {
    versionKey: false,
});

module.exports = model('AirData', airDataSchema);
