module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args, Discord){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Commands')
        .addFields(
            {name: 'help', value: 'Displays this embed'},
            {name: 'play', value: 'Starts a new game'},
            {name: 'stop', value: 'Stops the users currently active game'},
            {name: 'Saves', value: "The bot doesn't save game progress, but it does however save game items. **You can use this to your advantage**"}
        )

        message.channel.send(helpEmbed);
    }
}