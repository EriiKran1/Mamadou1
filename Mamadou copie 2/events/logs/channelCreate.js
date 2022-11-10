const { MessageEmbed } = require('discord.js');

module.exports = async(client, channel) => {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_CREATE'
    });

    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    console.log(latestChannelCreated);
    const { executor } = latestChannelCreated;

    const embed = new MessageEmbed()
                .setAuthor(`Création d'un nouveau salon`)
                .setColor("#fd7aff")
                .setDescription(`**Action**: création de salon\n**Salon créé**: ${channel.name}`)
                .setTimestamp()
                .setFooter(executor.username, executor.displayAvatarURL());
        
            const log_channel = client.channels.cache.get('857230832620011520');
            log_channel.send(embed);

}