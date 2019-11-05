const Discord = require ('discord.js')
module.exports.run = async (bot, message, args) => {

    let reason = args.join(' ') ? args.join(' ') : ' Je suis actuellement afk, je vous répondrai dans les meilleurs délais .';
    let afklist = bot.afk.get(message.author.id);

    if (!afklist) {
        let construct = {
            id: message.author.id,
            usertag: message.author.tag,
            reason: reason
        };

        bot.afk.set(message.author.id, construct);
        return message.reply(` vous avez été configuré pour afk pour raison: ${reason}`).then(msg => msg.delete(5000));
    }

};

module.exports.help = {
    name: 'afk',
    
}