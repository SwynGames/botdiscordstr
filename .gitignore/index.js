const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setGame("Botswyn *help");
    console.log("le bot est connecté");
});

bot.login("NDU1Mjg2NDY3ODMzMzY0NDkx.Df5ydQ.4V5IoBQYkMTGvpEbgP4_QLXChH4");
