exports.run = (client, message) => {

    let channel = message.mentions.channels.first  ( ) || message.channel;

    if( channel.type !== "text" ){return ( message.reply ( "Il faut mentionner un salon textuel" ) ) };

    channel.setName( ( channel.name ) .replace( /-/g , '\u2009\u2009') );

    message.reply ( "Le salon a été renommé correctement Maitre 3éné" );
}