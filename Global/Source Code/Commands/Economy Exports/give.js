const Discord = require('discord.js')
const userManager = require('../../../Class/Shared/user.js')

module.exports.run = async(client, msg, args) => {

    var member = msg.mentions.members.first()
    var give = args.slice(1).join(" ")

    if(!msg.member.permissions.has("ADMINISTRATOR")) {
        var error_lowperms = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("You haven't the required permissions ! \`(ADMINISTRATOR)\`")
            .setColor("0xF04040") //RED
        msg.channel.send(error_lowperms).catch(console.error);
    }

    else if(!member) {
        var error_member = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Please mention a member")
            .setColor("0xF04040") //RED
        msg.channel.send(error_member).catch(console.error);
    }

    else if(!give) {
        var error_money = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Please type a price to give")
            .setColor("0xF04040") //RED
        msg.channel.send(error_money).catch(console.error);
    }

    else if(isNaN(give)) {
        var error_isnan = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("The price was undefined/invalid")
            .setColor("0xF04040") //RED
        msg.channel.send(error_isnan).catch(console.error);
    }

    else {

        var embed = new Discord.MessageEmbed()
            .setColor(client.config.embed.color)
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/mo10.png")
            .setAuthor("An admin gave you money (kindness abuse)")
            .addField("Sender :", `${msg.author.username}`, true)
            .addField("Value :", `${give}$`, true)
            .addField("Receiver :", `${member.user.username}`, true)
        msg.channel.send(embed)

        var newUser = await userManager.findOne({userID: member.user.id})
            newUser.money = newUser.money + give
            newUser.save()
    }
}

module.exports.info = {
    name: "give",
    aliases: [],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}