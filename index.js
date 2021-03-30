const config = require("./config.json");
const prefix = (config.prefix);
const Discord = require("discord.js");
const ascii = require("ascii-art");
const fs = require("fs");
const got = require("got");
const chancejs = require("chance");
const moment = require("moment");
const request = require("superagent"); 
const catFacts = require('cat-facts');
const dogFacts = require('dog-facts');
const shorten = require("isgd");
const weather = require("weather-js");
const zalgo = require("zalgolize");
const snekfetch = require("snekfetch");
const wiki = require("wikijs").default;
const urban = require("relevant-urban");
const superagent = require("superagent")
const hastebin = require("hastebin-gen");
const gtranslate = require("translate-google");
const http = require('http');
const express = require('express');
const sfetch = require('snekfetch');

const app = express()

app.get("/", (req, res) => {
  res.send("hello hell!")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})
const bot = new Discord.Client();

bot.lovedb = require("./lovedb.json");
bot.ratedb = require("./ratedb.json");
bot.penisdb = require("./penisdb.json");
bot.iqdb = require("./iqdb.json");

var reload = (message, cmd) => {
  delete require.cache[require.resolve("./commands/" + cmd)];
  try {
    let cmdFile = require('./commands/' + cmd);
  } catch (err) {
    message.channel.send(`Problem loading ${cmd}: ${err}`).then(
      response => response.delete(1000).catch(error => console.log(error.stack))
    ).catch(error => console.log(error.stack));
  }
  message.channel.send(`${cmd} reload was a success!`).then(
    response => response.delete(1000).catch(error => console.log(error.stack))
  ).catch(error => console.log(error.stack));
};

bot.on("ready", async () =>{
   console.log("SelfBot Activated!");
     bot.user.setActivity('VRChat', { type: 'PLAYING'
//       url: "https://open.spotify.com/album/1ubczeMvCrPHbSEjgfu4a7",
//       type: "LISTENING" 
     });
});


bot.login(config.token);
