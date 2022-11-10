const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const naziRole = message.guild.roles.cache.get("912817745987534858");
    const communisteRole = message.guild.roles.cache.get("912817836068577281");
    const naziEmoji = message.guild.emojis.cache.get("912817028853817364");
    const communisteEmoji = message.guild.emojis.cache.get("912817051943456769");

    const embed = new MessageEmbed()
        .setTitle("Camps")
        .setDescription("T'as intérêt à choisir ton camp !")
        .setColor("#dc143c")
        .addField(
            "Fais le bon choix:",
            `
            ${naziEmoji} - ${naziRole.toString()}
            ${communisteEmoji} - ${communisteRole.toString()}
            `
        );

        client.channels.cache.get('820268301913030677').send(embed).then(async msg => {
            await msg.react(naziEmoji);
            await msg.react(communisteEmoji);
        })
};





module.exports.help = {
    name: "allroles",
    aliases: ['allroles', 'camps'],
    category: 'reactions',
    description: "Renvoie un message avec des réactions!",
    cooldown: 10,
    usage: '',
    isUserAdmin: false,
    permissions: true,
    args: false
};