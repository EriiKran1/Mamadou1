module.exports = client => {
    console.log(`logged in as ${client.user.tag}!`);
    client.user.setPresence({
        activity: {
            name : "préparer la dynamite (?help)"
        }
    });
};