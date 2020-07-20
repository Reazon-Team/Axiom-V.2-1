const mongoose = require('mongoose')
const moment = require('moment')

module.exports.run = async(client) => {
    console.log(`[${moment().format("LT")}] [AxCore-QuickStart] [READY] Connected as ${client.user.tag}`);

    mongoose.connect(
        client.config.mongodb.connector,
     {
         useNewUrlParser: true,
         useUnifiedTopology: true,
     });
		
//Statut ARRAY
const status = [

    "Developed by AzelSync# !",
    "Axiom core | beta-V.2.0 !",
    `#Goto75 | (${client.guilds.cache.size}/75)`,
    "Powered by the Reazon-Team !",
    "I love see my dev RAGE !",
    "My leveling system was repair !",

]

setInterval(function() {

    var statutID = Math.floor(Math.random() * Math.floor(status.length));
    client.user.setActivity({ name:status[statutID], type:'STREAMING', url: "https://www.twitch.tv/kuro_kenshi222"})

    }, 10000)
};