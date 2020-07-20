const mongoose = require('mongoose')
const moment = require('moment')

const Schema = mongoose.Schema;

const ServerManager = new Schema({
    guildID: {
        type: String,
        required: true
    },
    moderation: {
        type: String,
    },
    welcome: {
        type: String,
    },
    leveling: {
        type: String,
    },
    animation: {
        type: String,
    },
    music: {
        type: String,
    },
    welcomemsg: {
        type: String,
    },
    goodbyemsg: {
        type: String,
    },
});

console.log(`[${moment().format("LT")}] [AxCore-QuickStart] [MONGO] Loading Model: ServerManager`)
module.exports = mongoose.model("server", ServerManager);