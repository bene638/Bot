const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
let helpmodoEmbed = new Discord.RichEmbed()
 .setDescription("**Commande de modération**, ")
 .setColor("RANDOM")
 .addField("**ban** *Permet de bannir un utilisateur*","!ban @user raison"  )
 .addField("**mute** *Permet de mute un utilisateur pendant un certains temp*","!mute @user durée raison" )
 .addField("**kick** *Permet de kick un utilisateur*", "!kick @user raison" )
 .addField("**clear** *Permet de clear jusqu'a' 100 message* ", "!clear 100" )
 .addField("**poll** *Permet de créer un sondage* ", "!poll votre sondage" )
 .addField("**addrole** *Permet de donner un role a un utilisateur* ", "!addrole @user @role" )
 .addField("**removerole** *Permet de retirer un role a un utilisateur* ", "!removerole @user @role" )
 .addField("**espace** *Permet de retiré les espace au nom des channel*","!espace" )
 .addField("**warn** *Permet d'avertir un utilisateur* ", "!warn @user raison" )
return message.channel.send(helpmodoEmbed);

module.exports.help = {
    name: "helpmodo"
  };
}