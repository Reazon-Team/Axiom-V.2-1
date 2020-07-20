const Discord = require('discord.js')
const calendarManager = require('../../../Class/Shared/agenda.js')

module.exports.run = async(client, msg, args) => {

    var slot = args.slice(0).join(" ")
    var day = args.slice(1).join(" ")
    var month = args.slice(2).join(" ")
    var year = args.slice(3).join(" ")
    var desc = args.slice(4).join(" ")

    if(!slot) {
        var error_slot = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Please type a slot")
            .setColor("0xF04040") //RED
        msg.channel.send(error_slot).catch(console.error);
    }

    else if(slot < 1) {
        var error_lowslot = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Slot cannot be inferior to 1")
            .setColor("0xF04040") //RED
        msg.channel.send(error_lowslot).catch(console.error);
    }

    else if(slot > 5) {
        var error_overslot = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Slot cannot be superior to 5")
            .setColor("0xF04040") //RED
        msg.channel.send(error_overslot).catch(console.error);
    }

    else if(!day) {
        var error_day = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Please type a day")
            .setColor("0xF04040") //RED
        msg.channel.send(error_day).catch(console.error);
    }

    else if(day < 1) {
        var error_lowday = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Day cannot be inferior to 1")
            .setColor("0xF04040") //RED
        msg.channel.send(error_lowday).catch(console.error);
    }

    else if(day > 31) {
        var error_overday = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Day cannot be superior to 31")
            .setColor("0xF04040") //RED
        msg.channel.send(error_overday).catch(console.error);
    }

    else if(!month) {
        var error_month = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Please type a month")
            .setColor("0xF04040") //RED
        msg.channel.send(error_month).catch(console.error);
    }

    else if(month < 1) {
        var error_lowmonth = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Month cannot be inferior to 1")
            .setColor("0xF04040") //RED
        msg.channel.send(error_lowmonth).catch(console.error);
    }

    else if(month > 12) {
        var error_overmonth = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Month cannot be superior to 12")
            .setColor("0xF04040") //RED
        msg.channel.send(error_overmonth).catch(console.error);
    }

    else if(!year) {
        var error_year = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Please type a year")
            .setColor("0xF04040") //RED
        msg.channel.send(error_year).catch(console.error);
    }

    else if(year < 2020) {
        var error_lowyear = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Year cannot be inferior to 2020")
            .setColor("0xF04040") //RED
        msg.channel.send(error_lowyear).catch(console.error);
    }

    else if(year > 2030) {
        var error_overyear = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Sorry, but i cant save a date superior to 2030")
            .setColor("0xF04040") //RED
        msg.channel.send(error_overyear).catch(console.error);
    }

    else if(!desc) {
        var error_desc = new Discord.MessageEmbed()
            .setTitle("Error !")
            .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/error13.png")
            .setDescription("Please type a desc")
            .setColor("0xF04040") //RED
        msg.channel.send(error_desc).catch(console.error);
    }

    else {

        var newAgenda = calendarManager.findOne({userID: msg.author.id})

        if(slot === '1') {

            newAgenda.calendar1Day = day
            newAgenda.calendar1Month = month
            newAgenda.calendar1Year = year
            newAgenda.calendar1Desc = desc
            newAgenda.save()

            var port1 = new Discord.MessageEmbed()
                .setColor("0x7AE295")
                .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/sucess10.png")
                .setDescription('Config saved to the port **1**')
            msg.channel.send(port1)
        }

        else if(slot === '2') {

            newAgenda.calendar2Day = day
            newAgenda.calendar2Month = month
            newAgenda.calendar2Year = year
            newAgenda.calendar2Desc = desc
            newAgenda.save()
            
            var port2 = new Discord.MessageEmbed()
                .setColor("0x7AE295")
                .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/sucess10.png")
                .setDescription('Config saved to the port **2**')
            msg.channel.send(port2)
        }

        else if(slot === '3') {

            newAgenda.calendar3Day = day
            newAgenda.calendar3Month = month
            newAgenda.calendar3Year = year
            newAgenda.calendar3Desc = desc
            newAgenda.save()
            
            var port3 = new Discord.MessageEmbed()
                .setColor("0x7AE295")
                .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/sucess10.png")
                .setDescription('Config saved to the port **3**')
            msg.channel.send(port3)
        }

        else if(slot === '4') {

            newAgenda.calendar4Day = day
            newAgenda.calendar4Month = month
            newAgenda.calendar4Year = year
            newAgenda.calendar4Desc = desc
            newAgenda.save()

            var port4 = new Discord.MessageEmbed()
                .setColor("0x7AE295")
                .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/sucess10.png")
                .setDescription('Config saved to the port **4**')
            msg.channel.send(port4)
        }

        else if(slot === '5') {

            newAgenda.calendar5Day = day
            newAgenda.calendar5Month = month
            newAgenda.calendar5Year = year
            newAgenda.calendar5Desc = desc
            newAgenda.save()

            var port5 = new Discord.MessageEmbed()
                .setColor("0x7AE295")
                .setThumbnail("https://i88.servimg.com/u/f88/20/09/25/40/sucess10.png")
                .setDescription('Config saved to the port **5**')
            msg.channel.send(port5)
        }
    }
}

module.exports.info = {
    name: "create-date",
    aliases: ["c-date"],
    botPermissions: [],
    userPermissions: [],
    ownerOnly: false,
    dir: __dirname
}