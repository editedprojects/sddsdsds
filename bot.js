const Discord = require('discord.js');
const moment = require("moment");
const fs = require("fs");
const sql = require("better-sqlite3");
const client = new Discord.Client();
const Codes = new Discord.Client();
 const prefix = "-";
client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
    if (message.content === 'spam') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 90000; x++) {
            message.channel.send(`سمك فوق الجمع `)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    
    
    client.login(process.env.BOT_TOKEN); 
