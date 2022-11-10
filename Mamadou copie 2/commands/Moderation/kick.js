const { MessageEmbed } = require('discord.js')

module.exports.run = (client,message,args) => {

    let user = message.mentions.users.first();
    let reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');

        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(`Vole pas les perms sale arabe !`);

        if(message.mentions.users.size === 0) {
            return message.channel.send(`Mentionne quelqu'un que je l'explose a la bombe !`);
        }

        let kick = message.guild.member(message.mentions.users.first());

        if(!kick) {
            return message.channel.send(`Je le trouve pas il se cache comme un juif à la guerre !`);
        }

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(`Donne les perms sale noir !`);

        kick.kick(reason).then(member => {
            message.channel.send(`${member.user.username} est envoyé au goulag par ${message.author.username}`);

            const embed = new MessageEmbed()
                .setAuthor(`${user.username} (${user.id})`)
                .setColor("#ffa500")
                .setDescription(`**Action**: kick\n**Raison**: ${reason}`)
                .setThumbnail(user.avatarURL())
                .setTimestamp()
                .setFooter(message.author.username, message.author.avatarURL());
                
                const log_channel = client.channels.cache.get('857230832620011520');
                log_channel.send(embed);
        });
    };

    module.exports.help = {
        name: "kick",
        aliases: ['kick'],
        category: 'moderation',
        description: "Kick un membre",
        cooldown: 10,
        usage: '<@user>',
        isUserAdmin: true,
        permissions: true,
        args: false
    };