module.exports = (client, messageReaction, user) => {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    const channel = message.guild.channels.cache.find(c => c.id === '820268301913030677');
    const naziRole = message.guild.roles.cache.get("912817745987534858");
    const communisteRole = message.guild.roles.cache.get("912817836068577281");
    if(member.user.bot) return;

    if(["emoji_37", "emoji_38"].includes(emoji) && message.channel.id === channel.id) {
        switch (emoji) {
            case "emoji_37":
                member.roles.remove(naziRole);
                message.channel.send("Tu pars à la douche..");
                break;
            case "emoji_38":
                member.roles.remove(communisteRole);
                message.channel.send("Tu m'as déçu dégage au goulag..");
                break;
        };
    };

}