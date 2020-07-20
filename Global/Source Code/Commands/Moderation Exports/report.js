const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = (client, msg, args) => {

    var reportChannel = msg.guild.channels.cache.find(c => c.name === "reports")
    var member = msg.mentions.members.first()
    var reason = args.slice(1).join(" ")

    if(!member) {
        var error_member = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Please mention a member to ban !")
            .setColor("0xF04040") //RED
        msg.channel.send(error_member).catch(console.error);
    }

    if(!reason) {
        reason = '\`any\`'
    }

    if(!reportChannel) {
        try{
            guild.channels.create('reports', {
                permissionOverwrites: [
                    {
                        id: guild.id,
                        deny: ["SEND_MESSAGES"],              
                    }
                ]
            });
        } catch(err) {
            console.log(err);
        }
    }

    if(reportChannel) {
        var report_embed = new Discord.MessageEmbed()
                .setAuthor("New report !", client.user.avatarURL())
                .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/sucess10.png")
                .addField("Member Reported", `${user}`)
                .addField("By", msg.author.username)
                .addField("When", moment().format("L"))
                .addField("Reason", reason)
                .setColor("0x7AE295")
            reportChannel.send(report_embed)
    }
}

module.exports.info = {
    name: "report",
    aliases: [],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}