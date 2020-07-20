const Discord = require('discord.js')
const UserManager = require("../../../models/user")

module.exports.run = async(client, msg) => {

    var Rank = await UserManager.findOne({userID: msg.author.id})

    var embed = new Discord.MessageEmbed()
        .setColor(client.config.embed.color)
        .setAuthor(`${msg.author.username}'s Rankcard`)
        .setThumbnail(msg.author.avatarURL({ format: 'png', dynamic : true }))
        .addField(`Level : `, `lvl:${Rank.level}`, true)
        .addField(`XP`, `${Rank.xp} XP`, true)
    msg.channel.send(embed).catch(console.error)
}

module.exports.info = {
    name: "rank",
    aliases: ["rankcard"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}