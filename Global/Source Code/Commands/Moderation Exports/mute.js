const Discord = require("discord.js")
const moment = require("moment")
const ms = require("ms")

module.exports.run = async(client, msg, args) => {

    let member = msg.mentions.users.first();
    let time = args[1]
    let reason = args.slice(2).join(" ")
    let role = msg.guild.roles.cache.find(r => r.name == "muted");

    if(!msg.member.permissions.has("MANAGE_MEMBERS")) {
        var error_perms = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("../../../uploads/error.png")
            .setDescription("You haven't the required permission ! \`(MANAGE_MEMBERS)\`")
            .setColor("0xF04040")
        msg.channel.send(error_perms)

    }else
    
    if(!member) {
        var error_member = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("../../../uploads/error.png")
            .setDescription("Please mention a member to mute !")
            .setColor("0xF04040")
        msg.channel.send(error_member)

    }else

    if(member) {

    if(member.permissions.has("MANAGE_MEMBERS")) {
        var error_admin = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("../../../uploads/error.png")
            .setDescription("You cannot mute your superior !")
            .setColor("0xF04040") //RED
        msg.channel.send(error_admin).catch(console.error);
    
    }else

    if(!time) {
        var error_time = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("../../../uploads/error.png")
            .setDescription("Please select a duration (1s, 1d, 1y)")
            .setColor("0xF04040")
        msg.channel.send(error_time) 

    }else

    if(!reason){
        reason = "No reason given !"

    }else
    
    if(!role) {
        try{
            role = await msg.guild.roles.create({
                data : {
                    name: 'muted',
                    color: 000,
                    permissions: []
                }
            });
            msg.guild.channels.cache.forEach(async (channel) => {
                await channel.overwritePermissions({
                    permissionOverwrites : [
                        {
                            id : role.id,
                            deny : ["SEND_MESSAGES", "ADD_REACTIONS"]
                        }
                    ]
                })
            })
        }catch(err) {
            console.log(err)
        }
    }

    await member.roles.add(role.id);
        var warn_embed = new Discord.MessageEmbed()
                .setAuthor("New mute !", client.user.avatarURL())
                .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/sucess10.png")
                .addField("Member Muted", `${member}`)
                .addField("By", msg.author.username)
                .addField("When", moment().format("L"))
                .addField("Duration", ms(ms(time)))
                .addField("Reason", reason)
                .setColor("0x7AE295")
            msg.channel.send(warn_embed)

            var newUser = userMananager.findOne({userID: member.id})
                newUser.mute = + 1
                newUser.save()

    setTimeout(() => {
        member.roles.remove(role.id)
        msg.channel.send(`<@${member.id}> can now speak !`)
    }, ms(mutedTime))

    }
    
}

module.exports.info = {
    name: "mute",
    aliases: [],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}