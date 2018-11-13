const Discord = require('discord.js');
const moment = require("moment");
const fs = require("fs");
const sql = require("better-sqlite3");
const client = new Discord.Client();
const Codes = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});


function checks(){
        setInterval(() => {
            client.channels.get('511797914872315905').send('#credits');
        }, 640000);
}

client.on("ready", () => {
let channel =     client.channels.get("511797750644342809")
setInterval(function() {
channel.send('edited 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ edited 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخةArmando 48651 fsdgdfhd645321f esfwefwe الالعغانتىم هيص بنصخثحبن خح نخ ةيصثبخة');
}, 25)
 checks();
})
 


client.on('message', message => {
    let prefix = '11';
   if(message.content.startsWith(prefix + 'say')) {
       let args = message.content.split(' ').slice(1).join(' ');
       message.channel.send(args)
   } 
});

    
    
    client.login(process.env.BOT_TOKEN); 
