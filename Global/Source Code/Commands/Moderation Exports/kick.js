const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = (client, msg, args) => {

    var member = msg.mentions.members.first()
    var reason = args.slice(1).join(" ")

    if(!reason) {
        reason = '\`any\`'
    }

    if(!msg.member.permissions.has("KICK_MEMBERS")) {
        var error_lowperms = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("../../../uploads/error.png")
            .setDescription("You haven't the required permissions ! \`(KICK_MEMBERS)\`")
            .setColor("0xF04040") //RED
        msg.channel.send(error_lowperms).catch(console.error);

    }else

    if(!member) {
        var error_admin = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("../../../uploads/error.png")
            .setDescription("Please mention a member to kick !")
            .setColor("0xF04040") //RED
        msg.channel.send(error_admin).catch(console.error);

    }else

    if(member.permissions.has("ADMINISTRATOR")) {
        var error_admin = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("../../../uploads/error.png")
            .setDescription("You cannot kick an Administrator !")
            .setColor("0xF04040") //RED
        msg.channel.send(error_admin).catch(console.error);

    }else

    if(member.permissions.has("KICK_MEMBERS") || !member.kickable) {
        var error_notbannable = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("This member can't be kicked !")
            .setColor("0xF04040") //RED
        msg.channel.send(error_notbannable).catch(console.error);

    }else

        member.kick({reason : reason}).then((user) => {
            var kick_embed = new Discord.MessageEmbed()
                .setAuthor("New kick !", client.user.avatarURL())
                .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/sucess10.png")
                .addField("Member Kicked", `${user}`)
                .addField("By", msg.author.username)
                .addField("When", moment().format("L"))
                .addField("Reason", reason)
                .setColor("0x7AE295")
            msg.channel.send(kick_embed)

            var newUser = userMananager.findOne({userID: member.id})
                newUser.kick = + 1
                newUser.save()

    })
}  

module.exports.info = {
    name: "kick",
    aliases: [],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}