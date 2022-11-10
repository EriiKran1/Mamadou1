const { PREFIX } = require('../../config');
const { Collection } = require('discord.js');

module.exports = (client, message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return; 
    if(message.channel.type === "dm") return;
    
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const user = message.mentions.users.first();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    console.log(client.commands);
    if(!command) return;

    if(command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply("Vole pas les perms sale noir !")

    if(command.help.args && !args.length) {
        let noArgsReply = `Sale trizo je peux pas renvoyer du vide, ${message.author}!`;

        if(command.help.usage) noArgsReply += `\nOn fait comme ça bougnoul: \`${PREFIX}${command.help.name} ${command.help.usage}\``

        return message.channel.send(noArgsReply);
    }

    if(command.help.isUserAdmin && !user) return message.reply("Mentionne quelqu'un que je l'explose à la bombe !");

    if(command.help.isUserAdmin && message.guild.member(user).hasPermission('BAN_MEMBERS')) return message.reply("Tu peux pas faire ça aux admins bougnoul !");
  
    if(!client.cooldowns.has(command.help.name)) {
        client.cooldowns.set(command.help.name, new Collection());
    }

    const timeNow = Date.now();
    const tStamps = client.cooldowns.get(command.help.name);
    const cdAmount = (command.help.cooldown || 5) * 1000;
    console.log(client.cooldowns); 

    if (tStamps.has(message.author.id)) {
        const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

        if(timeNow < cdExpirationTime) {
            timeLeft = (cdExpirationTime - timeNow) / 1000;
            return message.reply(`Attends encore **${timeLeft.toFixed(0)} seconde(s)** gros noir`)
        }
    }

    tStamps.set(message.author.id, timeNow);
    setTimeout(() => tStamps.delete(message.author.id), cdAmount);

    command.run(client, message, args);
}