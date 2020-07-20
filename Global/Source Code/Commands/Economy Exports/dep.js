const Discord = require('discord.js')
const userManager = require('../../../Class/Shared/user.js')

module.exports.run = async(client, msg, args) => {

    var deposit = args.slice(0).join(" ")
    
    if(!deposit) {
        var error_deposit = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("This member can't be banned !")
            .setColor("0xF04040") //RED
        msg.channel.send(error_deposit).catch(console.error);
    }

    else if(isNaN(deposit)) {
        var error_isnan = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("This member can't be banned !")
            .setColor("0xF04040") //RED
        msg.channel.send(error_isnan).catch(console.error);
    }

    else {
        var embed = new Discord.MessageEmbed()
            .setColor(client.config.embed.color)
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/mo10.png")
            .setAuthor("Pay attention to your credit card")
            .addField("Sender :", `${msg.author.username}`, true)
            .addField("Value :", `${give}$`, true)
        msg.channel.send(embed)
    }
}

module.exports.info = {
    name: "dep",
    aliases: [],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}