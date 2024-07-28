const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Bot is running🚀');
});

app.gety('/', (req, res) => {
    res.send('Hello World!');
});

const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("message", message => {
    if(message.content === "ping") {
        message.reply("pong!");
    }
});

client.login(process.env.TOKEN);