const Discord = require ('discord.js');
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGES_MESSAGES')) {
        return message.channel.send(
            "Vous n'avez pas la permissions pour faire cela ! "
        )
    }
    if (!args[0]) return message.channel.send('Syntaxe: <prefix>poll + Question');
    const pollEmbed = new Discord.RichEmbed()
    .setTitle(`Sondage crée par ${message.author.username}`)
    .setColor('RANDOM')
    .setFooter('Appuyez sur les réactions ci-dessous.')
    .setDescription(args.join(' '))

    let msg = await message.channel.send(pollEmbed);
    await msg.react('✅')
    await msg.react('❌')
   
};
module.exports.help = {
    name: 'poll'
};