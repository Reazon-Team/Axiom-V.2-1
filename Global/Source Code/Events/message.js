const Discord = require('discord.js')

var userManager = require('../../Class/Shared/user.js')
var boosterManager = require('../../Class/Shared/booster.js')

module.exports.run = async(client, msg) => {

        //Attribution de l'XP

    var newUser = await userManager.findOne({userID: msg.author.id})
    var newBooster = await userManager.findOne({userID: msg.author.id})

    if(!newUser) {
        newUser = new userManager({ userID: msg.author.id, guildID: msg.guild.id, userdesc: "Anonymous", xp: 0, level: 0, total: 0, bans: 0, kick: 0, mute: 0, money: 0, bank: 0, }).save();
    }

    if(!newBooster) {
        newBooster = new boosterManager({userID: msg.author.id, x2: false, x4: false, x6: false}).save();
    }

    var llot = undefined

    //============================================================
    //                        NO BOOSTERS
    //============================================================

    loot = Math.floor(Math.random() * 20) + 5  // Enter 5 and 20

    //============================================================
    //                        X2 BOOSTERS
    //============================================================

    loot = Math.floor(Math.random() * 40) + 10 // Enter 10 and 40

    //============================================================
    //                 XP CALCULATOR ATTRIBUTION
    //============================================================

    newUser.xp = newUser.xp + loot
    //newUser.save() 

    //============================================================
    //                      Leveling Manager
    //============================================================

        if (
            newUser.level === 0 && newUser.xp >= 200
            ||
            newUser.level === 1 && newUser.xp >= 400
            ||
            newUser.level === 2 && newUser.xp >= 600
            ||
            newUser.level === 3 && newUser.xp >= 800
            ||
            newUser.level === 4 && newUser.xp >= 1000
            ||
            newUser.level === 5 && newUser.xp >= 1200
            ||
            newUser.level === 6 && newUser.xp >= 1400
            ||
            newUser.level === 7 && newUser.xp >= 1600
            ||
            newUser.level === 8 && newUser.xp >= 1800
            ||
            newUser.level === 9 && newUser.xp >= 2000
            ||
            newUser.level === 10 && newUser.xp >= 2200
            ||
            newUser.level === 11 && newUser.xp >= 2400
            ||
            newUser.level === 12 && newUser.xp >= 2800
            ||
            newUser.level === 13 && newUser.xp >= 3000
            ||
            newUser.level === 14 && newUser.xp >= 3200
            ||
            newUser.level === 15 && newUser.xp >= 3400
            ||
            newUser.level === 16 && newUser.xp >= 3600
            ||
            newUser.level === 17 && newUser.xp >= 3800
            ||
            newUser.level === 18 && newUser.xp >= 4000
            ||
            newUser.level === 19 && newUser.xp >= 4200
            ||
            newUser.level === 20 && newUser.xp >= 4400
            ||
            newUser.level === 21 && newUser.xp >= 4600
            ||
            newUser.level === 22 && newUser.xp >= 4800
            ||
            newUser.level === 23 && newUser.xp >= 5000
            ||
            newUser.level === 24 && newUser.xp >= 5200
            ||
            newUser.level === 25 && newUser.xp >= 5400
            ||
            newUser.level === 26 && newUser.xp >= 5600
            ||
            newUser.level === 27 && newUser.xp >= 5800
            ||
            newUser.level === 28 && newUser.xp >= 6000
            ||
            newUser.level === 29 && newUser.xp >= 6200
            ||
            newUser.level === 30 && newUser.xp >= 6400
            ||
            newUser.level === 31 && newUser.xp >= 6600
            ||
            newUser.level === 32 && newUser.xp >= 6800
            ||
            newUser.level === 33 && newUser.xp >= 7000
            ||
            newUser.level === 34 && newUser.xp >= 7200
            ||
            newUser.level === 35 && newUser.xp >= 7400
            ||
            newUser.level === 36 && newUser.xp >= 7600
            ||
            newUser.level === 37 && newUser.xp >= 7800
            ||
            newUser.level === 38 && newUser.xp >= 8000
            ||
            newUser.level === 39 && newUser.xp >= 8200
            ||
            newUser.level === 40 && newUser.xp >= 8400
            ||
            newUser.level === 41 && newUser.xp >= 8600
            ||
            newUser.level === 42 && newUser.xp >= 8800
            ||
            newUser.level === 43 && newUser.xp >= 9000
            ||
            newUser.level === 44 && newUser.xp >= 9200
            ||
            newUser.level === 45 && newUser.xp >= 9400
            ||
            newUser.level === 46 && newUser.xp >= 9600
            ||
            newUser.level === 47 && newUser.xp >= 9800
            ||
            newUser.level === 48 && newUser.xp >= 10000
            ||
            newUser.level === 49 && newUser.xp >= 10200
            ||
            newUser.level === 50 && newUser.xp >= 10400
            ||
            newUser.level === 51 && newUser.xp >= 10600
            ||
            newUser.level === 52 && newUser.xp >= 10800
            ||
            newUser.level === 53 && newUser.xp >= 11000
            ||
            newUser.level === 54 && newUser.xp >= 11200
            ||
            newUser.level === 55 && newUser.xp >= 11400
            ||
            newUser.level === 56 && newUser.xp >= 11600
            ||
            newUser.level === 57 && newUser.xp >= 11800
            ||
            newUser.level === 58 && newUser.xp >= 12000
            ||
            newUser.level === 59 && newUser.xp >= 12200
            ||
            newUser.level === 60 && newUser.xp >= 12400
            ||
            newUser.level === 61 && newUser.xp >= 12600
            ||
            newUser.level === 62 && newUser.xp >= 12800
            ||
            newUser.level === 63 && newUser.xp >= 13000
            ||
            newUser.level === 64 && newUser.xp >= 13200
            ||
            newUser.level === 65 && newUser.xp >= 13400
            ||
            newUser.level === 66 && newUser.xp >= 13600
            ||
            newUser.level === 67 && newUser.xp >= 13800
            ||
            newUser.level === 68 && newUser.xp >= 14000
            ||
            newUser.level === 69 && newUser.xp >= 14200
            ||
            newUser.level === 70 && newUser.xp >= 14400
            ||
            newUser.level === 71 && newUser.xp >= 14600
            ||
            newUser.level === 72 && newUser.xp >= 14800
            ||
            newUser.level === 73 && newUser.xp >= 15000
            ||
            newUser.level === 74 && newUser.xp >= 15200
            ||
            newUser.level === 75 && newUser.xp >= 15400
            ||
            newUser.level === 76 && newUser.xp >= 15600
            ||
            newUser.level === 77 && newUser.xp >= 15800
            ||
            newUser.level === 78 && newUser.xp >= 15800
            ||
            newUser.level === 79 && newUser.xp >= 16000
            ||
            newUser.level === 80 && newUser.xp >= 16200
            ||
            newUser.level === 81 && newUser.xp >= 16400
            ||
            newUser.level === 82 && newUser.xp >= 16600
            ||
            newUser.level === 83 && newUser.xp >= 16800
            ||
            newUser.level === 84 && newUser.xp >= 17000
            ||
            newUser.level === 85 && newUser.xp >= 17200
            ||
            newUser.level === 85 && newUser.xp >= 17400
            ||
            newUser.level === 86 && newUser.xp >= 17600
            ||
            newUser.level === 87 && newUser.xp >= 17800
            ||
            newUser.level === 88 && newUser.xp >= 18000
            ||
            newUser.level === 89 && newUser.xp >= 18200
            ||
            newUser.level === 90 && newUser.xp >= 18400
            ||
            newUser.level === 91 && newUser.xp >= 18600
            ||
            newUser.level === 92 && newUser.xp >= 18800
            ||
            newUser.level === 93 && newUser.xp >= 19000
            ||
            newUser.level === 94 && newUser.xp >= 19200
            ||
            newUser.level === 95 && newUser.xp >= 19400
            ||
            newUser.level === 96 && newUser.xp >= 19600
            ||
            newUser.level === 97 && newUser.xp >= 19800
            ||
            newUser.level === 98 && newUser.xp >= 20000
            ||
            newUser.level === 99 && newUser.xp >= 40000
        )
    
        //Level Embed
        
        {
        var level_embed = new Discord.MessageEmbed()
            .setColor("0xF7D358")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/trophy10.png")
            .setTitle(`GG ${msg.author.username} !`)
            .setDescription(`You reached the level ${newUser.level} !`)
            .setTimestamp()
            .setFooter(`${100 - newUser.level} levels to reach !`)
        msg.channel.send(level_embed)

        newUser.xp = 0
        newUser.level = + 1
        newUser.save()
        }

        if(newUser.xp >= 40000 && newUser.level === 100) {
            loot = 0 //For not depass the 100 floor
        }



    if(
        msg.author.bot ||
        !msg.guild ||
        !msg.content.startsWith(client.config.prefix)
    ) return;

    if(msg.mentions.has(client.user)){
        // Mention du client
    }

    let args = msg.content.substring(client.config.prefix.length).split(" ");
    let cmdName = args.shift().toLowerCase();
    let command = client.commands.find((cmd) => cmd.info.name === cmdName || cmd.info.aliases.includes(cmdName));

    if(command){
        let neededPermissions = [];

        // Bot perms
        if(!command.info.botPermissions.includes("EMBED_LINKS")){
            command.info.botPermissions.push("EMBED_LINKS");
        }
        command.info.botPermissions.forEach((perm) => {
            if(!msg.channel.permissionsFor(msg.guild.me).has(perm)){
                neededPermissions.push(perm);
            }
        });
        if(neededPermissions.length > 0){
            return msg.channel.send(`I do not have the permissions to run this command ! (${neededPermissions.join(", ")})`);
        }

        // User perms
        neededPermissions = [];
        command.info.userPermissions.forEach((perm) => {
            if(!msg.channel.permissionsFor(msg.member).has(perm)){
                neededPermissions.push(perm);
            }
        });
        if(neededPermissions.length > 0){
            return msg.channel.send(`You do not have the permissions to run this command ! (${neededPermissions.join(", ")})`);
        }

        try {
            command.run(client, msg, args);
        } catch(err) {
            console.log(err);
        }
    }
}