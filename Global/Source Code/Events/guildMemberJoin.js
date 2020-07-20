const Discord = require('discord.js')
const Canvas = require('discord-canvas')

let userManager = require('../../Class/Shared/user.js')
let calendarManager = require('../../Class/Shared/agenda.js')
let boosterManager = require('../../Class/Shared/booster.js')

module.exports.run = async(client, member) => {

    new userManager({ userID: member.user.id, guildID: member.guild.id, userdesc: "Anonymous", xp: 0, level: 0, total: 0, bans: 0, kick: 0, mute: 0, money: 0, bank: 0, }).save();
    new calendarManager({userID: member.user.id, guildID: member.guild.id, calendar1Day: 'DD', calendar2Day: 'DD', calendar3Day: 'DD', calendar4Day: 'DD', calendar5Day: 'DD', calendar1Month: 'MM', calendar2Month: 'MM', calendar3Month: 'MM', calendar4Month: 'MM', calendar5Month: 'MM', calendar1Year: 'YYYY', calendar2Year: 'YYYY', calendar3Year: 'YYYY', calendar4Year: 'YYYY', calendar5Year: 'YYYY', calendar1Desc: 'undefined', calendar2Desc: 'undefined', calendar3Desc: 'undefined', calendar4Desc: 'undefined', calendar5Desc: 'undefined'}).save();
    new boosterManager({userID: member.user.id, x2: false, x4: false, x6: false}).save();

    let welcomechannel = member.guild.channels.cache.find(c => c.name === "welcome")
    
    if(!welcomechannel) {
        try{
            welcomechannel = member.guild.channels.create('welcome', {
                permissionOverwrites: [
                    {
                        id: member.guild.id,
                        deny: ["ADD_REACTIONS", "SEND_MESSAGES"],     
                    }
                ]
            });
        } catch(err) {
            console.log(err);
        }
    }


welcomeCanvas = new Canvas.Welcome();
  
  let image = await welcomeCanvas
    .setUsername(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setMemberCount(member.guild.members.cache.size)
    .setGuildName(member.guild.name)
    .setAvatar(member.user.avatarURL())
    .setColor("border", "#005000")
    .setColor("username-box", "#005000")
    .setColor("discriminator-box", "#005000")
    .setColor("message-box", "#005000")
    .setColor("title", "#005000")
    .setColor("avatar", "#005000")
    .setBackground("http://image.noelshack.com/fichiers/2020/27/1/1593382855-gh6yp00.png")
    .toAttachment();
  
  let attachment = new Discord.Attachment(image.toBuffer(), "welcome-image.png");

    welcomechannel.send(attachment);
}