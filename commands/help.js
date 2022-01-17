module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args, Discord){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('HiT World', 'https://media.discordapp.net/attachments/928430664943042560/931476784296386570/new-hit-logo.jpg?width=766&height=670', 'https://ckstudios.itch.io/hitworld')
        .setTitle('COMMANDS')
        .addFields(
            {name: 'help', value: 'Displays this embed'},
            {name: 'play', value: 'Starts a new game'},
            {name: 'stop', value: "Stops the user's currently active game"},
            {name: 'Saves', value: "The bot doesn't save game progress, but it does however save game items. **You can use this to your advantage**"}
        )

        message.channel.send(helpEmbed);
    }
}