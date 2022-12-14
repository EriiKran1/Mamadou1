const { readdirSync } = require("fs");
const { TOKEN, PREFIX } = require('./config');
const { Client, Collection } = require('discord.js');

const client = new Client();
["commands", "cooldowns"].forEach(x => client[x] = new Collection());


const loadCommands = (dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
    
    for (const file of commands) {
    const getFileName = require(`${dir}/${dirs}/${file}`);
    client.commands.set(getFileName.help.name, getFileName);
    console.log(`Commande chargée: ${getFileName.help.name}`);    
    }; 
 });
};

const loadEvents = (dir = "./events/") => {
    readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
    for (const event of events) {
    const evt = require(`${dir}/${dirs}/${event}`);
    const evtName = event.split('.')[0];
    console.log(evtName);
    client.on(evtName, evt.bind(null, client));
    console.log(`Evénement chargé: ${evtName}`);   
    }; 
 });
};
     
loadCommands();
loadEvents();
    
client.login(TOKEN);