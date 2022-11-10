const { MessageEmbed } = require('discord.js')

module.exports.run = async(client, message, args) => {
    await message.delete();

    let user = message.guild.member(message.mentions.users.first());

    if(isNaN(args[1]) || (args[1] < 1 || args[1] > 100)) return message.reply("Frère choisis un **nombre entre 1 et 100**");

    const messages = (await message.channel.messages.fetch({
        limit: 100,
        before: message.id,
    })).filter(a => a.author.id === user.id).array();

    messages.length = Math.min(args[1], messages.length);
    console.log(messages.length);

    if (message.length === 0 || !user) return message.reply("Il n'a jamais parlé cet arabe (ou il n'existe pas) !");

    if (message.length === 1) await message[0].delete();
    else await message.channel.bulkDelete(messages);

    const embed = new MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL())
                .setColor("#287db5")
                .setDescription(`**Action**: prune\n**Nombre de messages**: ${args[1]}\n**Utilisateur**: ${args[0]}`)
        
            const log_channel = client.channels.cache.get('857230832620011520');
            log_channel.send(embed);
};

module.exports.help = {
    name: 'prune',
    aliases: ['prune'],
    category: 'moderation',
    description: "Purge un nombre de message spécifié sur un utilisateur spécifié",
    cooldown: 10,
    usage: '<@user> <nombre_message>',
    isUserAdmin: true,
    permissions: true,
    args: true
};