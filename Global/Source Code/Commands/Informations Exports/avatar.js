const Discord = require('discord.js')


module.exports.run = (client, msg) => {


    var member = msg.mentions.members.first()

    if(!member) {
        var error_member = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Please mention a member")
            .setColor("0xF04040") //RED
        msg.channel.send(error_member).catch(console.error);
    }

    var embed = new Discord.MessageEmbed()
        .setColor('0xfc0478') //FUSHIA
        .setAuthor(`${member.user.username}'s avatar`)
        .setImage(member.user.avatarURL({ format: 'png', dynamic: true, size: 2048 }))
    msg.channel.send(embed)
}

module.exports.info = {
    name: "avatar",
    aliases: ["pp"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}