const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = (client, msg) => {

    var embed = new Discord.MessageEmbed()
        .setColor("0x0489B1")
        .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/flag10.png")
        .setAuthor(`${msg.guild.name}'s Infos !`, client.user.avatarURL())
        .addField("Server Name", msg.guild.name, false)
        .addField("Server ID", msg.guild.id, false)
        .addField("Stats :", `Channels : ${msg.guild.channels.cache.size} \n Roles : ${msg.guild.roles.cache.size} \n Members : ${msg.guild.members.cache.size}`)
        .addField("Created at :", `${moment(msg.guild.createdAt).format("LL")} | ${moment(msg.guild.createdAt).format("LT")}`)
        .addField("Created by :", `${msg.guild.owner} (${msg.guild.ownerID})`)
    msg.channel.send(embed)
}

module.exports.info = {
    name: "serverinfo",
    aliases: ["server"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}