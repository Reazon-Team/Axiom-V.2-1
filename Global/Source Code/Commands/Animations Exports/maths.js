const Discord = require('discord.js')


    module.exports.run = async(client, msg) => {
        var number1 = Math.floor(Math.random() * 100)
        var number2 = Math.floor(Math.random() * 100)
        var result = number1 + number2

        var Math_embed = new Discord.MessageEmbed()
        .setColor(client.config.embed.color)
        .setAuthor("Maths !", client.user.avatarURL())
        .setDescription(`How many does ${number1} + ${number2} ?`)
        msg.channel.send(Math_embed)
   
    const filter = (msg) => msg.author.id === msg.author.id
    const MathCollector = msg.channel.createMessageCollector(filter, {max: 1})

    MathCollector.on('collect', (msg) => {
    if(msg.content.includes(result)) {
        var Win_embed = new Discord.MessageEmbed()
        .setColor(client.config.embed.color)
        .setAuthor("You won !", client.user.avatarURL())
        .setDescription(`${number1} + ${number2} is equal to ${result} !`)
        msg.channel.send(Win_embed)  
    }else{
        var Lose_embed = new Discord.MessageEmbed()
        .setColor(client.config.embed.color)
        .setAuthor("You lose...", client.user.avatarURL())
        .setDescription(`${number1} + ${number2} is equal to ${result}...`)
        msg.channel.send(Lose_embed)
        }
    });
}

module.exports.info = {
    name: "math",
    aliases: ["calculate"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}



