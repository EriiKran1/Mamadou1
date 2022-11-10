const { MessageEmbed } = require('discord.js');

module.exports = async(client, channel) => {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_DELETE'
    });

    const latestChannelDeleted = fetchGuildAuditLogs.entries.first();
    console.log(latestChannelDeleted);
    const { executor } = latestChannelDeleted;

    const embed = new MessageEmbed()
                .setAuthor(`Supression d'un salon`)
                .setColor("#dc143c")
                .setDescription(`**Action**: Supression de salon\n**Salon supprimé**: ${channel.name}`)
                .setTimestamp()
                .setFooter(executor.username, executor.displayAvatarURL());
        
            const log_channel = client.channels.cache.get('857230832620011520');
            log_channel.send(embed);

}