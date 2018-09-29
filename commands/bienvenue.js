  module.exports = class Bienvenue {
  static match(message) {
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'bienvenue')
  }

  static action(message) {
   const Discord = require('discord.js');
    var embednom = new Discord.RichEmbed()
                    .setTitle("Bienvenue / Welcome")
                    .setDescription("Nous vous souhaitons la bienvenue sur notre serveur très chères amies.")
                    .addField("Utilisateur qui t'a souhaité la bienvenue:", message.author.username)
                    .setColor("0x40A497")
                    .setFooter("Flash | Touts droits réservés")
    message.channel.sendEmbed(embednom)
  }
}