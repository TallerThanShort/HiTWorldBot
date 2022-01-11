module.exports = {
    name: 'play',
    description: "this is the main play command",
    execute(message, args, Discord){
        const playEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('<@' + message.author.id + ">'s Game")
        .addFields(
            {name: 'help', value: 'Displays this embed'},
            {name: 'play', value: 'Starts a new game'},
            {name: 'stop', value: 'Stops the users currently active game'},
            {name: 'Saves', value: "The bot doesn't save game progress, but it does however save game items. **You can use this to your advantage**"}
        )

        message.channel.send(playEmbed);
    }
}