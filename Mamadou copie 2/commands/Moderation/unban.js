const { MessageEmbed } = require('discord.js')

module.exports.run = async(client, message, args) => {
    let user = await client.users.fetch(args [0]);
    if(!user) return message.reply("Il existe pas ce juif !");
    message.guild.members.unban(user)

    const embed = new MessageEmbed()
                .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
                .setColor("#35f092")
                .setDescription(`**Action**: unban`)
                .setTimestamp()
                .setFooter(message.author.username, message.author.avatarURL());
        
            const log_channel = client.channels.cache.get('857230832620011520');
            log_channel.send(embed);
};

module.exports.help = {
    name: 'unban',
    aliases: ['unban'],
    category: 'moderation',
    description: "Unban un utilisateur",
    cooldown: 10,
    usage: '<user_id>',
    isUserAdmin: false,
    permissions: true,
    args: true
};