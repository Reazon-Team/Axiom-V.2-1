const mongoose = require('mongoose')
const moment = require('moment')

const Schema = mongoose.Schema;

const BoosterManager = new Schema({
    userID: {
        type: String,
        required: true
    },
    x2: {
        type: Number,
    },
    x4: {
        type: Number,
    },
    x6: {
        type: Number,
    },
});

console.log(`[${moment().format("LT")}] [AxCore-QuickStart] [MONGO] Loading Model: BoosterManager`)
module.exports = mongoose.model("boosters", BoosterManager);