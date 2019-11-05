const Discord = require('discord.js');
const  moment = require('moment');
moment.locale('fr');

module.exports.run = async (bot, message, args) => {

    let BotinfoEmbed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.displayAvatarURL)
        .setColor("RANDOM")
        .addField("👑 ❱ Nom", message.channel.name)
        .addField(":mag: ❱ Channel ID", message.channel.id)
        .addField(":clipboard: ❱ Catégorie", message.channel.parent)
        .addField(":1234: ❱ Position", message.channel.position)
        .addField(":hourglass: ❱ Type", message.channel.type)
        .addField("⚙ ❱ Créé le", moment(message.channel.createdAt).format("LL"))
        .setTimestamp();

 message.channel.send(BotinfoEmbed);

};

module.exports.help = {
  name: "channel",
    usage: "!channel",
    description: "Avoir des informations sur le channel actuel."
}