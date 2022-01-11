const Discord = require('discord.js');
const client = new Discord.Client({ shardCount: 2 });
const fs = require('fs');
const prefix = 'hit!';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', async () => {
    await client.user.setActivity("HiT World on Discord", { type: 'COMPETING', url: "https://ckstudios.itch.io/hitworld" });
    console.log('time to play HiT World')
})

client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    let channel = message.channel;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else if(command === 'play'){
        client.commands.get('play').execute(message, args, Discord);
    }
})

client.login(process.env.token);