const Discord = require("discord.js");
module.exports.run = (bot ,message, args) => {
    let users = message.guild.members.random()
    let question = args.slice(1).join(" ");
    if (!args[0]) return message.channel.send("***Veuillez rajouter un élément***")
    let rouletteEmbed = new Discord.RichEmbed()
    .setColor("#483D8B")
   .setTitle("「?」║ RESULTAT")
   .addField("Question", `${argresult}`)
   .addField("Le gagnant de la roulette est : " , `${users}`)
   message.channel.send(rouletteEmbed)
    }
module.exports.help = {
  name:"roulette"
}