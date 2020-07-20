const Discord = require('discord.js')
const ServerManager = require("../../../MongoDB Classes/server")

module.exports.run = async(client, msg) => {

    var newServer = await ServerManager.findOne({guildID: msg.guild.id})

        newServer.guildID = msg.guild.id, 
        newServer.moderation = 'Disabled',
        newServer.welcome = 'Disabled', 
        newServer.leveling = 'Disabled',
        newServer.animation = 'Disabled',
        newServer.music = 'Disabled',
        newServer.welcome = 'Disabled'
        newServer.save()

        var embed = new Discord.MessageEmbed()
            .setColor('0x7AE295') //MENTHOL GREEN
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/sucess10.png")
            .setAuthor("Phiou, what a crazy job !", client.user.avatarURL())
            .setDescription("It's good, I'm done cleaning, there's nothing left...")
            .addField("Server ID", newServer.guildID)
            .addField("Moderation module :", newServer.moderation)
            .addField("Welcome/Goodbye module", newServer.welcome)
            .addField("XP/Level module :", newServer.leveling)
            .addField("Animation module", newServer.animation)
            .addField("Music module", newServer.music)
        msg.channel.send(embed)   
}

module.exports.info = {
    name: "reset",
    aliases: ["clearDB"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}