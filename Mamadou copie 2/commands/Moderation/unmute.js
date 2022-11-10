const ms = require('ms');
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client,message,args) => {

    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

      if(!user.roles.cache.has(muteRole.id)) return message.reply("Il a toujours sa langue cet escclave");
      user.roles.remove(muteRole.id);
      message.channel.send(`<@${user.id}> a récupéré sa langue.`);

      const embed = new MessageEmbed()
                .setAuthor(`${user.username} (${user.id})`)
                .setColor("#35f092")
                .setDescription(`**Action**: unmute`)
                .setThumbnail(user.user.avatarURL())
                .setTimestamp()
                .setFooter(message.author.username, message.author.avatarURL());
                
                const log_channel = client.channels.cache.get('857230832620011520');
                log_channel.send(embed);
};


module.exports.help = {
    name: "unmute",
    aliases: ['unmute'],
    category: 'moderation',
    description: "Unmute un membre",
    cooldown: 10,
    usage: '<@user>',
    isUserAdmin: true,
    permissions: true,
    args: true
};