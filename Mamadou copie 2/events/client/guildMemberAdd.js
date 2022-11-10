const { MessageEmbed } = require('discord.js');

module.exports = (client, member) => {
    const embed = new MessageEmbed()
      .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
      .setColor("#35f092")
      .setFooter("Un juif a rejoint")
      .setTimestamp();

    client.channels.cache.get('857230832620011520').send(embed);
};