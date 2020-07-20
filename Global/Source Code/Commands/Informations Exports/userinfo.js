const Discord = require('discord.js')
const moment = require('moment')
const UserManager = require("../../../Class/Shared/user.js")

module.exports.run = async(client, msg) => {

    var member = msg.mentions.members.first();

    if(!member) {
        var error = new Discord.MessageEmbed()
            .setColor('0xFE2E9A')
            .setTitle('Error !')
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Please mention a member")
        msg.channel.send(error)
    }else{

    var newUser = await UserManager.findOne({userID: member.id})

    var embed = new Discord.MessageEmbed()
            .setColor(client.config.embed.color)
            .setAuthor(member.user.username)
            .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
            .addField("Level", `Lvl:${newUser.level}`, true)
            .addField("Money", `${newUser.money}$`, true)
            .addField("Bank", `${newUser.bank}$`, true)
            .addField("Sanctions", `${newUser.total}`, true)
            .addField("Account created at :", `${moment(member.createdAt).format("LL")} | ${moment(member.createdAt).format("LT")}`)
            .addField("Description :", `${newUser.userdesc}`)
            .setFooter("Axiom | By Kuro_Kenshi")
        msg.channel.send(embed) 
    }
}

module.exports.info = {
    name: "user",
    aliases: ["ui"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}
