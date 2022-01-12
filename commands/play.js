module.exports = {
    name: 'play',
    description: "this is the main play command",
    execute(message, args, Discord){
        const bg = '⬛';
        const attackLeft = '<:heroattackside:927785032507068478>';
        const attackLWeapon = '<:heroattacksideweapon:927784955487076404>';
        const idle = '<:heroidlefront:927784807042265108>';
        const playEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('@' + message.author.username + "'s Game")
        .addFields(
            {name: 'help', value: idle}
        )
        .setFooter('HiT World 2t Bot')

        message.channel.send(playEmbed);
    }
}