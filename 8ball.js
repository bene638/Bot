const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
    if (!args[0]) return message.channel.send("Veuillez poser une question")
    let rep = ["on dirait que oui", "Oui", "J'en suis pas sûr", "Peut être :thinking:", "Absolument", "Non :x:", "Absolument pas", "je sais pas" , "perso j'suis pas sûr"];
    let reptaille = Math.floor((Math.random() * rep.length));
    let question = args.slice(1).join(" ");

    let huitembed = new Discord.RichEmbed()
      .setColor("#483D8B")
      .setTitle("「:8ball:」║ 8ball")
      .setAuthor(`${message.author.username}, message.author.avatarURL`)
      .addField("Question:", question)
      .addField(`"Question de:" , ${message.author.username}`)
      .addField("Réponse:" , rep[reptaille]);
      console.log('8ball chargée')
      message.channel.send(huitembed)
      }

module.exports.help = {
  name:"8ball"
}