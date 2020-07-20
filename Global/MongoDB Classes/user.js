const mongoose = require('mongoose')
const moment = require('moment')

const Schema = mongoose.Schema;

const UserManager = new Schema({
    guildID: {
        type: String,
        required: false
    },
    userID: {
        type: String,
        required: false
    },
    money: {
        type: Number,
    },
    bank: {
        type: Number,
    },
    total: {
        type: Number,
    },
    bans: {
        type: Number,
    },
    mute: {
        type: Number,
    },
    kick: {
        type: Number,
    },
    warn: {
        type: Number,
    },
    xp: {
        type: Number,
    },
    level: {
        type: Number,
    },
    userdesc: {
        type: String,
    },
});

console.log(`[${moment().format("LT")}] [AxCore-QuickStart] [MONGO] Loading Model: UserManager`)
module.exports = mongoose.model("user", UserManager);