const Discord = require('discord.js')
const Canvas = require('discord-canvas')

module.exports.run = async(client, member) => {

var goodbyechannel = member.guild.channels.cache.find(c => c.name === "goodbye")
    
    if(!goodbyechannel) {
        try{
            welcomechannel = member.guild.channels.create('goodbye', {
                permissionOverwrites: [
                    {
                        id: member.guild.id,
                        deny: ["ADD_REACTIONS", "SEND_MESSAGES"],  
                    }
                ]
            });
        } catch(err) {
            console.log(err);
        }
    }

    goodbyeCanvas = new Canvas.Goodbye();

    let image = await goodbyeCanvas
      .setUsername(member.user.username)
      .setDiscriminator(member.user.discriminator)
      .setMemberCount(member.guild.members.cache.size)
      .setGuildName(member.guild.name)
      .setAvatar(member.user.avatarURL())
      .setColor("border", "#500000")
      .setColor("username-box", "#500000")
      .setColor("discriminator-box", "#500000")
      .setColor("message-box", "#500000")
      .setColor("title", "#500000")
      .setColor("avatar", "#500000")
      .setBackground("http://image.noelshack.com/fichiers/2020/27/1/1593383188-gh6yp002.png")
      .toAttachment();
    
    let attachment = new Discord.Attachment(image.toBuffer(), "goodbye-image.png");
    
    goodbyechannel.send(attachment);
}