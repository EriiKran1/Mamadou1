module.exports.run = (client, message, args) => {
    message.delete();

    message.channel.send(args.join(" "));
};

module.exports.help = {
    name: "say",
    aliases: ['repeat', 'rep', 'say'],
    category: 'interactions bot',
    description: "Répète le message d'un membre",
    cooldown: 5,
    usage: '<votre_message>',
    isUserAdmin: false,
    permissions: false,
    args: true
};