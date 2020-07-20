const Discord = require('discord.js')
const userManager = require("../../../MongoDB Classes/user.js")

module.exports.run = async(client, msg, args) => {

    var statut = args.slice(0).join(" ")
    var setdesc = await userManager.findOne({ userID: msg.author.id })

    if(!statut) {

        var error = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Please type a description to show in your usercard !")
            .setColor("0xF04040")
        msg.channel.send(error).catch(console.error);
    }

    else{

        var sucess = new Discord.MessageEmbed()
            .setTitle("Statut changed !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/sucess10.png")
            .setDescription(`New value : ${statut}`)
            .setColor("0xF04040")
        msg.channel.send(sucess).catch(console.error); 
        
        setdesc.userdesc = statut
        setdesc.save()
        
    }
        
}

module.exports.info = {
    name: "set-description",
    aliases: ["set-desc"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}