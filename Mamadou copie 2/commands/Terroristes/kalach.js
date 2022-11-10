const Discord = require("discord.js");
const { MessageEmbed, MessageAttachment } = require('discord.js')
const KalashImg = new MessageAttachment('./assets/img/kalash.gif');



const embed = new MessageEmbed()

 module.exports.run = async(client,message,args)  => {

    const membre = message.mentions.members.first() || message.member;

    message.channel.send({

    embed : {
   
        
        color : 000000,
        title : `**${message.author.username}** Kalach **${membre.user.tag}** !`,
        image : {
            url : ('https://c.tenor.com/BrW62hJ1-Z0AAAAC/rambo-first-blood.gif'),
        
        },
        footer: {
            text: 'Kalach |'
        }
        
    }
 }
)};

module.exports.help = {
    name: "kalach",
    aliases: ['kal', 'kalach'],
    category: 'terroristes',
    description: "kalach un membre!",
    cooldown: 5,
    usage: '<@user>',
    isUserAdmin: false,
    permissions: false,
    args: false
};
