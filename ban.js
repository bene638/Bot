const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bannedUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!bannedUser) return message.channel.send("L'utilisateur n'existe pas !");
  let bannedReason = args.join(" ").slice(22);

  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Vous n'avez pas les permissions.");

  if (bannedUser.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Vous ne pouvez pas Bannir cette personne.");

  let banEmbed = new Discord.RichEmbed()
    .setDescription("Bans")
    .setColor("#dc143c")
    .addField("Utilisateur ban", `${bannedUser} (ID: ${bannedUser.id})`)
    .addField(
      "Utilisateur ayant ban",
      `${message.author} (ID: ${message.author.id})`
    )
    .addField("Canal", message.channel)
    .addField("Raison", bannedReason);

  let banChannel = message.guild.channels.find(`name`, "reports");
  if (!banChannel)
    return message.channel.send(
      "Le salon 'reports' est introuvable. Veuillez créer ce canal !"
    );

  message.delete();
  message.guild.member(bannedUser).ban(bannedReason);
  banChannel.send(banEmbed);
};

module.exports.help = {
  name: "ban"
};