const Discord = require('discord.js')

const UserManager = require('../../../Class/Shared/user.js')


module.exports.run = async(client, msg) => {

    var member = msg.mentions.members.first();

    if(!member){
        var error_mention = new Discord.MessageEmbed()
                .setTitle("Error !")
                .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
                .setDescription('Please mention a member')
                .setColor("0xF04040")
            msg.channel.send(error_mention).catch(console.error);
    }else{

    var newUser = await UserManager.findOne({userID: member.user.id})


    var embed = new Discord.MessageEmbed()
        .setColor(client.config.embed.color)
        .setAuthor(`${member.user.username}'s Account`, member.user.avatarURL())
        .addField("Money :", `${newUser.money}$`, true)
        .addField("Bank :", `${newUser.bank}$`, true)
    msg.channel.send(embed)
    
    }
}

module.exports.info = {
    name: "account",
    aliases: ["bank"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}