const Discord = require('discord.js')
const moment = require('moment')
const userMananager = require('../../../Class/Shared/user.js')

module.exports.run = (client, msg, args) => {


    var member = msg.mentions.members.first()
    var reason = args.slice(1).join(" ")

    if(!reason) {
        reason = '\`any\`'
    }

    if(!msg.member.permissions.has("BAN_MEMBERS")) {
        var error_lowperms = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("You haven't the required permissions ! \`(BAN_MEMBERS)\`")
            .setColor("0xF04040") //RED
        msg.channel.send(error_lowperms).catch(console.error);

    }else

    if(!member) {
        var error_member = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Please mention a member to ban !")
            .setColor("0xF04040") //RED
        msg.channel.send(error_member).catch(console.error);

    }else

    if(member.permissions.has("ADMINISTRATOR")) {
        var error_admin = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("You cannot ban an Administrator !")
            .setColor("0xF04040") //RED
        msg.channel.send(error_admin).catch(console.error);

    }else

    if(member.permissions.has("BAN_MEMBERS") || !member.bannable) {
        var error_notbannable = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("This member can't be banned !")
            .setColor("0xF04040") //RED
        msg.channel.send(error_notbannable).catch(console.error);

    }else

        member.ban({reason : reason}).then((user) => {
            var ban_embed = new Discord.MessageEmbed()
                .setAuthor("New ban !", client.user.avatarURL())
                .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/sucess10.png")
                .addField("Member Banned", `${user}`)
                .addField("By", msg.author.username)
                .addField("When", moment().format("L"))
                .addField("Reason", reason)
                .setColor("0x7AE295")
            msg.channel.send(ban_embed)

            var newUser = userMananager.findOne({userID: member.id})
                newUser.bans = + 1
                newUser.save()

    })
}  

module.exports.info = {
    name: "ban",
    aliases: [],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}