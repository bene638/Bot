const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) =>
{
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don\'t have permission to do this");
  if(!wUser) return message.reply("Vous devez mentionner un membre.");
  if(wUser.hasPermission("MANAGE_MEMBERS")) return message.reply("Vous ne pouvez pas avertir un membre avec un rôle plus élevé que vous.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] =
  {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>
  {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setAuthor(message.author.username)
    .addField("Utilisateur averti", wUser.tag)
    .addField("Averti dans", message.channel)
    .addField("Nombre d'avertissements", warns[wUser.id].warns)
    .addField("Raison", reason);

    message.channel.send(warnEmbed);
}

module.exports.help =
{
  name: "warn"
}
