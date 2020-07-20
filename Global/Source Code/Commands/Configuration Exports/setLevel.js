const Discord = require('discord.js')
const ServerManager = require("../../../MongoDB Classes/server.js")

module.exports.run = async(client, msg, args) => {

    var newServer = await ServerManager.findOne({guildID: msg.guild.id})

    var response = args.slice(0).join(" ")

    if(!response) {
        let error = new Discord.MessageEmbed()
            .setTitle('Error !')
            .setDescription("Please type Enable or Disable")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setColor('0xF04040')
        msg.channel.send(error)
    }
    
    if(response === "ENABLE" || "Enable" || "enable" || "ON" || "On" || "on" || "Activate" || "activate" ) {
    
        newServer.moderation = 'Enabled',
        newServer.save()

    var ModEnable = new Discord.MessageEmbed()
        .setColor(client.config.embed.color)
        .setTitle("Leveling system was successfully enabled")
        .setDescription("You can now use the leveling commands !")
        .setFooter('If you want to disable it, type ">set-level Disable"')
    msg.channel.send(ModEnable)
        
        
    }else if(reponse === "DISABLE" || "Disable" || "disable" || "OFF" || "Off" || "off" || "Desactivate" || "desactivate") {

        newServer.moderation = 'Disabled',
        newServer.save()

    var ModEnable = new Discord.MessageEmbed()
        .setColor(client.config.embed.color)
        .setTitle("Leveling system was successfully disabled")
        .setDescription("The leveling commands was now blocked !")
        .setFooter('If you want to enable it, type ">set-level Enable"')
    msg.channel.send(ModEnable)

        
    }
}

module.exports.info = {
    name: "set-level",
    aliases: ["set-lvl"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}

    