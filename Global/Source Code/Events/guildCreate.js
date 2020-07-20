let serverManager = require('../../Class/Shared/server.js');
let userManager = require('../../Class/Shared/user.js');
let calendarManager = require('../../Class/Shared/agenda.js')

module.exports.run = (client, guild) => {

    let welcomechannel = guild.channels.cache.find(c => c.name === "welcome")
    
    if(!welcomechannel) {
        try{
            welcomechannel = guild.channels.create('welcome', {
                permissionOverwrites: [
                    {
                        id: guild.id,
                        deny: ["ADD_REACTIONS", "SEND_MESSAGES"],     
                    }
                ]
            });
        } catch(err) {
            console.log(err);
        }
    }

    let goodbyechannel = guild.channels.cache.find(c => c.name === "goodbye")
    
    if(!goodbyechannel) {
        try{
            goodbyechannel = guild.channels.create('goodbye', {
                permissionOverwrites: [
                    {
                        id: guild.id,
                        deny: ["ADD_REACTIONS", "SEND_MESSAGES"],     
                    }
                ]
            });
        } catch(err) {
            console.log(err);
        }
    }

    new serverManager({ guildID: guild.id, moderation: 'Disabled', leveling: 'Disabled', animation: 'Disabled', music: 'Disabled', welcome: 'Disabled'}).save();

    guild.members.cache.forEach((m) => {
        new userManager({ userID: m.user.id, guildID: m.guild.id, userdesc: "Anonymous", xp: 0, level: 0, total: 0, bans: 0, kick: 0, mute: 0, money: 0, bank: 0}).save();
        new calendarManager({ userID: m.user.id, guildID: m.guild.id, calendar1Day: 'DD', calendar2Day: 'DD', calendar3Day: 'DD', calendar4Day: 'DD', calendar5Day: 'DD', calendar1Month: 'MM', calendar2Month: 'MM', calendar3Month: 'MM', calendar4Month: 'MM', calendar5Month: 'MM', calendar1Year: 'YYYY', calendar2Year: 'YYYY', calendar3Year: 'YYYY', calendar4Year: 'YYYY', calendar5Year: 'YYYY', calendar1Desc: 'undefined', calendar2Desc: 'undefined', calendar3Desc: 'undefined', calendar4Desc: 'undefined', calendar5Desc: 'undefined'}).save();
    });

    console.log(`Axiom joined ${guild.name}`)
}
