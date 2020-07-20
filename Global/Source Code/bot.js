const { Bot } = require("./API/Client.js");
const { readdir } = require("fs");
const { sep } = require("path");
const moment = require('moment')

let client = new Bot();

async function init() {
    client.loadCommands(__dirname);

    readdir(`${__dirname}${sep}Events`, (err, files) => {
        if(err) return console.log(err);

        files.forEach((f) => {
            let event = require(`${__dirname}${sep}Events${sep}${f}`);
            let eventName = f.split(".").shift();
            console.log(`[${moment().format("LT")}] [AxCore-QuickStart] [START] Loading Event: ${eventName}`);
            client.on(eventName, (...args) => event.run(client, ...args));
        });
    });

    client.login(client.config.token);
}

init();

client.on("error", (err) => console.log(`Error: ${err}`))
    .on("warn", (info) => console.log(`Warn: ${info}`));

process.on("unhandledRejection", (err) => console.log(`[${moment().format("LT")}] [AxCore-Internal] [ERROR] UnhandledRejection: ${err}`));