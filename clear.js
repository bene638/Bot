const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.delete()
    if(!message.member.hasPermissions("MANAGE_MESSAGES"))
            return message
            .reply("Vous n'avez pas la permission")
            .then(msg => msg.delete(5000));
         var clear1  = new Discord.RichEmbed()
            .setTitle("**COMMANDE REFUSER**")
            .setDescription(message.author)
            .setColor("28B463")
            .setTimestamp()
            .setFooter('commande: /clear')

       
        
    if (!args[0])
        return message
            .reply("Veuilliez indiquer un nombre de message a suprimer")
            .then(msg => msg.delete(5000));
    if (isNaN(args[0]))
        return message.channel
            .send('Veuilliez indiquer un nombre valide')
            .then(msg => msg.delete(5000));
    if (args[0]< 1 || args[0] > 100) 
        return message.channel
            .send('Veuilliez indiquer un nombre entre 1 et 100')
            .then(msg => msg.delete(5000));


    message.channel.bulkDelete(args[0]).then(() => {
        message.channel
            .send(`J'ai suprimé **${args[0]} message**`)
            .then(msg => msg.delete(5000));
    });
    
};

module.exports.help = {
    name: "clear"
}