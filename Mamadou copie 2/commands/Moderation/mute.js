const ms = require('ms');
const { MessageEmbed } = require('discord.js');

module.exports.run = async(client,message,args) => {

    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
    let muteTime = (args[1] || '60s');

    if(!muteRole)
      muteRole = await message.guild.roles.create({
          data: {
            name : 'muted',
            color: '#00000',
            permissions: []
          }
      });

      message.guild.channels.cache.forEach(async(channel, id) => {
          await channel.updateOverwrite(muteRole, {
              SEND_MESSAGES : false,
              ADD_REACTIONS: false,
              CONNECT: false,
          });
      });

      await user.roles.add(muteRole.id);
      message.channel.send(`<@${user.id}> a perdu sa langue pour ${ms(ms(muteTime))}.`);

      setTimeout(() => {
          user.roles.remove(muteRole.id);
      }, ms(muteTime));

      const embed = new MessageEmbed()
                .setAuthor(`${user.username} (${user.id})`)
                .setColor("#287db5")
                .setDescription(`**Action**: mute\n**Temps**: ${ms(ms(muteTime))}`)
                .setThumbnail(user.user.avatarURL())
                .setTimestamp()
                .setFooter(message.author.username, message.author.avatarURL());
                
                const log_channel = client.channels.cache.get('857230832620011520');
                log_channel.send(embed);

};


module.exports.help = {
    name: "mute",
    aliases: ['mute'],
    category: 'moderation',
    description: "Mute un membre",
    cooldown: 10,
    usage: '<@user> <time>',
    isUserAdmin: true,
    permissions: true,
    args: true
};