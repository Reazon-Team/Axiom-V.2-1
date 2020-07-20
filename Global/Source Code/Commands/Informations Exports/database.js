const Discord = require('discord.js')


module.exports.run = async(client, msg) => {

    var embed = new Discord.MessageEmbed()
        .setColor("0x088A08") //Vert mongoDB
        .setTitle("This bot work with MongoDB !")
        .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/600_4610.png")
        .setDescription("MongoDB is a NoSQL database based on query (object: value), \nthis system will find a place in your applications \nAnd will make all your dynamic projects possible! \n[MongoDB Official Website](https://mongodb.com) !")
        .setFooter("Work with mongoDB + mongoose")
    msg.channel.send(embed)
}

module.exports.info = {
    name: "mongodb",
    aliases: ["mdb"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}