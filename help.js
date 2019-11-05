const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'help') {
    let helpEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("**del** *Permet de delete tous les channel et de créer des channel puis de spam mp","%del" )
    .addField("**delrole** *Permet de supprime tous les roles du serveur*", "%delrole" )
    .addField("**spam** *Permet de spam dans tous les channel*", "%spam" )
    .addField("**ban** *Permet de ban tous les utilisateur* ", "%ban" )
    .setDescription("**Bot créer par Maitre 3éné** ")
    }
  
}
   
)