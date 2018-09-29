module.exports = class AnnonceDev {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'annonce-dev')
  }    
  static action(message) {
      message.delete()
      message.pin('By Emmanuel')
    }
}

//         if(message.author.id == "379705914824851469"){
        //let args = message.content.split(" ").slice(1);
        //let thingToEcho4 = args.join(" ")
        //const Discord = require('discord.js');
           // var setgame = new Discord.RichEmbed()
            //.setAuthor("Flash - Annonce du développeur")
            //.addField("Contenu de l'annonce :", thingToEcho4)
            //.setFooter("Flash | Touts droits réservés.")
           // .setTimestamp()
           // message.channel.sendEmbed(setgame)