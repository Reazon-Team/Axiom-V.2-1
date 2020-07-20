const Discord = require('discord.js')
const calendar = require('table')
const calendarManager = require('../../../Class/Shared/agenda.js')

module.exports.run = async(client, msg) => {

    var newCalendar = calendarManager.findOne({userID: msg.author.id})

    let data = [

            ['N', 'Day', 'Month', 'Year', 'Description'],
            [1, newCalendar.calendar1Day, newCalendar.calendar1Month, newCalendar.calendar1Year, newCalendar.calendar1Desc],
            [2, newCalendar.calendar2Day, newCalendar.calendar2Month, newCalendar.calendar2Year, newCalendar.calendar2Desc],
            [3, newCalendar.calendar3Day, newCalendar.calendar3Month, newCalendar.calendar3Year, newCalendar.calendar3Desc],
            [4, newCalendar.calendar4Day, newCalendar.calendar4Month, newCalendar.calendar4Year, newCalendar.calendar4Desc],
            [5, newCalendar.calendar5Day, newCalendar.calendar5Month, newCalendar.calendar5Year, newCalendar.calendar5Desc],

               ]


    let config = {
        columns: {
            0: {                            //Slots
                alignment: 'center',
                width: 1
            },
            1: {                            //Day
                alignment: 'center',
                width: 8
            },
            2: {                            //Month
                alignment: 'center',
                width: 8
            },
            3: {                            //Year
                alignment: 'center',
                width: 8
            },
            4: {                            //Desc
                alignment: 'left',
                width: 30
            },
        }
    };

    var output = calendar.table(data, config);

    msg.channel.send(":warning: The calendar is not optimised for mobile, please return your screen for see the complete calendar")
    msg.channel.send(`\`\`\`${output}\`\`\``)
}

module.exports.info = {
    name: "calendar",
    aliases: ["agenda", "diary"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}