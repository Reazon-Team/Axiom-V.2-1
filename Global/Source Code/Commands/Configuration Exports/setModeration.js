const Discord = require('discord.js')
const ServerManager = require("../../../MongoDB Classes/server.js")

module.exports.run = async(client, msg, args) => {

    var response = args.slice(0).join(" ")

    let newServer = await ServerManager.findOne({ guildID: msg.guild.id });


    if(!response) {
        let error = new Discord.MessageEmbed()
            .setTitle('Error !')
            .setDescription("Please type Enable or Disable")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setColor('0xF04040')
        msg.channel.send(error)
    }
    
    if(response === "ENABLE" || "Enable" || "enable" || "ON" || "On" || "on" || "Activate" || "activate") {

            newServer.moderation = 'Enabled'

            newServer.save()

            var ModEnable = new Discord.MessageEmbed()
                .setColor(client.config.embed.color)
                .setTitle("Moderation system was successfully enabled")
                .setDescription("You can now use the moderation commands !")
                .setFooter('If you want to disable it, type ">set-moderation Disable"')
            msg.channel.send(ModEnable)

    } else if(response === "DISABLE" || "Disable" || "disable" || "OFF" || "Off" || "off" || "Desactivate" || "desactivate") {

            newServer.moderation = 'Disabled',

            newServer.save()

            var ModDisable = new Discord.MessageEmbed()
                .setColor(client.config.embed.color)
                .setTitle("Moderation system was successfully disabled")
                .setDescription("The moderation commands was now blocked !")
                .setFooter('If you want to enable it, type ">set-moderation Enable"')
            msg.channel.send(ModDisable)

    }
}

module.exports.info = {
    name: "set-moderation",
    aliases: ["set-mod"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}