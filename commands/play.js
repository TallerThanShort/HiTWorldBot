module.exports = {
    name: 'play',
    description: "this is the main play command",
    execute(message, args, Discord){
        const bg = '⬛';
        const attackLeft = '<:heroattackside:927785032507068478>';
        const attackLWeapon = '<:heroattacksideweapon:927784955487076404>';
        const idle = '<:heroidlefront:927784807042265108>';
        var position = 'idle';
        const playEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('@' + message.author.username + "'s Game")
        .addFields(
            {name: position, value: bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + '\n' 
            + bg + idle + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + '\n' 
            + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + '\n' 
            + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + '\n' 
            + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + '\n' 
            + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + '\n' 
            + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + '\n' 
            + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg + bg},
            {name: 'Controls', value: "Use the emoji's below to play, use `hit!stop` to quit!"}
        )
        .setFooter('HiT World 2t Bot')

        message.channel.send(playEmbed).then(sentEmbed => {
            sentEmbed.react("⬅️")
            sentEmbed.react("⬆️")
            sentEmbed.react("➡️")
            sentEmbed.react("⬇️")
            sentEmbed.react("⚔️")
           /* const filter = (reaction, user) => {
                return ['⬅️', '⬆️'].includes(reaction.emoji.name) && user.id === interaction.user.id;
            };
            
            sentEmbed.awaitReactions({ filter, max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
            
                    if (reaction.emoji.name === '⬅️') {
                        message.reply('You reacted with a ⬅️.');
                    } else {
                        message.reply('You reacted with a ⬆️.');
                    }
                }).catch(collected => {
                    message.reply('You reacted with neither a thumbs up, nor a thumbs down.');
                }); */
        });
    }
}