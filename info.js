const Discord = require("discord.js");
const prefix = "!";

module.exports.run = async (bot, message, args) => {
  let servIcon = message.guild.iconURL;
  let servEmbed = new Discord.RichEmbed()
    .setDescription("Informations sur le **Serveur**")
    .setColor("#dc143c")
    .setThumbnail(servIcon)
    .addField("Nom du serveur", message.guild.name)
    .addField("Nombre total de membre", message.guild.memberCount)
    .addField("Créer le", message.guild.createdAt)
    .addField("Vous avez rejoint le", message.member.joinedAt)
    .addField(`${prefix}info`, "Renvoie des informations sur le bot");

  return message.channel.send(servEmbed);
};

module.exports.help = {
  name: "infoserv"
};