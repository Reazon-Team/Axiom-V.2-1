const Discord = require('discord.js')
const ServerManager = require("../../../MongoDB Classes/server.js")

module.exports.run = async(client, msg) => {

    var newServer = await ServerManager.findOne({guildID: msg.guild.id})

    var embed = new Discord.MessageEmbed()
            .setColor('0xEDAB28') //YELLOW
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/see10.png")
            .setAuthor("Okay, let's see ...", client.user.avatarURL())
            .setDescription("Normally, that should be it")
            .addField("Server ID", newServer.guildID)
            .addField("Moderation module :", newServer.moderation)
            .addField("Welcome/Goodbye module", newServer.welcome)
            .addField("XP/Level module :", newServer.leveling)
            .addField("Animation module", newServer.animation)
            .addField("Music module :", newServer.music)
        msg.channel.send(embed)   
}

module.exports.info = {
    name: "status",
    aliases: ["db"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}