const { MessageEmbed } = require('discord.js');

module.exports = async(client, message) => {
    const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
        limit: 1,
        type: 'MESSAGE_DELETE'
    });

    const latestMessageDeleted = fetchGuildAuditLogs.entries.first();
    console.log(latestMessageDeleted);
    const { executor } = latestMessageDeleted;

    const embed = new MessageEmbed()
                .setAuthor(`Supression d'un message`)
                .setColor("#dc143c")
                .setDescription(`**Action**: Supression de message\n**Message supprimé**: ${message.content}\n**Auteur du message**: ${message.author}`)
                .setTimestamp()
                .setFooter(executor.username, executor.displayAvatarURL());
        
            const log_channel = client.channels.cache.get('857230832620011520');
            log_channel.send(embed);

}