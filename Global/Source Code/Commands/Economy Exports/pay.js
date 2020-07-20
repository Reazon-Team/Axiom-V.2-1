const Discord = require('discord.js')

const UserManager = require('../../../Class/Shared/user.js')


module.exports.run = async(client, msg, args) => {

    var member = msg.mentions.members.first();
    var price = args[1]
    var Sender = await UserManager.findOne({userID: msg.author.id})

    if(!member){
        var error_mention = new Discord.MessageEmbed()
                .setTitle("Error !")
                .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
                .setDescription("Please mention a member")
                .setColor("0xF04040")
            msg.channel.send(error_mention).catch(console.error);

    } else if(!price) {
        var error_mention = new Discord.MessageEmbed()
                .setTitle("Error !")
                .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
                .setDescription("The price was undefined/invalid")
                .setColor("0xF04040")
            msg.channel.send(error_mention).catch(console.error);

    } else if(Sender.money < price) {
        var error_mention = new Discord.MessageEmbed()
                .setTitle("Error !")
                .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
                .setDescription("You haven't the money necessary")
                .setColor("0xF04040")
            msg.channel.send(error_mention).catch(console.error);
    }else{

    var embed = new Discord.MessageEmbed()
        .setColor(client.config.embed.color)
        .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/mo10.png")
        .setAuthor("You finally paid off your grandfather's debt")
        .addField("Sender :", `${msg.author.username}`, true)
        .addField("Value :", `${price}$`, true)
        .addField("Receiver :", `${member.user.username}`, true)
    msg.channel.send(embed)

    var newUser = await UserManager.findOne({userID: member.user.id})
        newUser.money = newUser.money + price
    }
}

module.exports.info = {
    name: "pay",
    aliases: [],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}