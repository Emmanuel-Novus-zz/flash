module.exports = class LancerRedem {
  static match(message) {
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'lancer-redem')
  }

  static action(message) {
   const Discord = require('discord.js');
    var embednom = new Discord.RichEmbed()
                    .setTitle("Redémarrage en cours...")
                    .setDescription("Le BOT  est actuellement en cours de redémarrage.")
                    .setColor("0xFA0000")
                    .setFooter("Flash | Touts droits réservés.")
    message.channel.sendEmbed(embednom)
  }
}