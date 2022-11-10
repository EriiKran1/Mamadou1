const Discord = require("discord.js");
const { MessageEmbed, MessageAttachment } = require('discord.js')
const embed = new MessageEmbed()

 module.exports.run = async(client,message,args)  => {

    const membre = message.mentions.members.first() || message.member;

    message.channel.send({

    embed : {
       
        color : 000000,
        title : `**${message.author.username}** fait sauter **${membre.user.tag}** !`,
        image : {
            url : ('https://media2.giphy.com/media/oe33xf3B50fsc/giphy.gif?cid=ecf05e47arnd4cojcesbgtwtxivvtxas9cuc950dors8eqra&rid=giphy.gif&ct=g'),       
        },
        footer: {
            text: 'Explode |'
        }       
    }
 }
)};

module.exports.help = {
    name: "explode",
    aliases: ['explode', 'ex', 'dynamite'],
    category: 'terroristes',
    description: "Explose un membre!",
    cooldown: 5,
    usage: '<@user>',
    isUserAdmin: false,
    permissions: false,
    args: false
};