 module.exports = class Ajouter {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'prefix')
  }

  static action(message) {
   const Discord = require('discord.js');
    var embednom = new Discord.RichEmbed()
                    .setTitle(":pushpin: Quel est mon préfix ?")
                    .setDescription("Mon préfix est le suivant : **/**")
                    .setColor("0x002E28")
                    .setFooter("Flash | Touts droits réservés")
    message.channel.sendEmbed(embednom)
  }
}