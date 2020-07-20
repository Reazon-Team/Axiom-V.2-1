const Discord = require('discord.js')

module.exports.run = (client, msg, args) => {

    msg.delete()

    var ToSay = args.slice(0).join(" ")

    if(!ToSay) {
        var error_say = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Please type a message to say")
            .setColor("0xF04040") //RED
        msg.channel.send(error_say).catch(console.error);
    }

    var embed = new Discord.MessageEmbed()
        .setColor(client.config.embed.color)
        .setTitle(ToSay)
    msg.channel.send(embed)
}

module.exports.info = {
    name: "e-say",
    aliases: [],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}