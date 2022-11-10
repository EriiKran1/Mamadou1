const { MessageEmbed } = require('discord.js')

module.exports.run = async(client, message, args) => {
    await message.delete();

    if(isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply("Frère choisis un **nombre entre 1 et 100**");

    const messages = await message.channel.messages.fetch({
        limit: Math.min(args[0], 100),
        before: message.id,
    });

    await message.channel.bulkDelete(messages);

    const embed = new MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL())
                .setColor("#287db5")
                .setDescription(`**Action**: purge\n**Nombre de messages**: ${args[0]}\n**Salon**: ${message.channel}`)
        
            const log_channel = client.channels.cache.get('857230832620011520');
            log_channel.send(embed);
};

module.exports.help = {
    name: 'purge',
    aliases: ['purge'],
    category: 'moderation',
    description: "Purge un nombre de message spécifié",
    cooldown: 10,
    usage: '<nombre_message>',
    isUserAdmin: false,
    permissions: true,
    args: true
};