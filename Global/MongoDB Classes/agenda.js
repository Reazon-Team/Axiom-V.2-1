const mongoose = require('mongoose')
const moment = require('moment')

const Schema = mongoose.Schema;

const CalendarManager = new Schema({
    userID: {
        type: String,
        required: false
    },
    guildID: {
        type: String,
        required: false
    },
    calendar1Desc: {                                                        //Le titre des slots de l'agenda
        type: String,
        required: false
    },
    calendar2Desc: {
        type: String,
        required: false
    },
    calendar3Desc: {
        type: String,
        required: false
    },
    calendar4Desc: {
        type: String,
        required: false
    },
    calendar5Desc: {
        type: String,
        required: false
    },                                                                      //Le jour des slots de l'agenda
    calendar1Day: {
        type: String,
        required: false
    },
    calendar2Day: {
        type: String,
        required: false
    },
    calendar3Day: {
        type: String,
        required: false
    },
    calendar4Day: {
        type: String,
        required: false
    },
    calendar5Day: {
        type: String,
        required: false
    },                                                                      //Le mois des slots de l'agenda
    calendar1Month: {
        type: String,
        required: false
    },
    calendar2Month: {
        type: String,
        required: false
    },
    calendar3Month: {
        type: String,
        required: false
    },
    calendar4Month: {
        type: String,
        required: false
    },
    calendar5Month: {
        type: String,
        required: false
    },                                                                      //L'année des slots de l'agenda
    calendar1Year: {
        type: String,
        required: false
    },
    calendar2Year: {
        type: String,
        required: false
    },
    calendar3Year: {
        type: String,
        required: false
    },
    calendar4Year: {
        type: String,
        required: false
    },
    calendar5Year: {
        type: String,
        required: false
    },                                                                      //La description des slots de l'agenda

})

console.log(`[${moment().format("LT")}] [AxCore-QuickStart] [MONGO] Loading Model: CalendarManager`)
module.exports = mongoose.model("calendar", CalendarManager);