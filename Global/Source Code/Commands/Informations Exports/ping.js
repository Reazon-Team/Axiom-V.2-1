const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, msg, args) => {

    var pingMsg = await msg.channel.send("Calculating latency...")

    let embed = new MessageEmbed()
        .setColor(client.config.embed.color)
        .setAuthor("Latency", client.user.avatarURL())
        .addFields([
            { name: "Host Ping", value: `\`${pingMsg.createdTimestamp - msg.createdTimestamp}ms\`` },
            { name: "API Ping", value: `\`${client.ws.ping}ms\``}
        ]);

    msg.channel.send(embed);
}

module.exports.info = {
    name: "ping",
    aliases: ["latence"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}