module.exports = class StopRedem {
  static match(message) {
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'stop-redem')
  }

  static action(message) {
   const Discord = require('discord.js');
    var embednom = new Discord.RichEmbed()
                    .setTitle("Redémarrage terminée..")
                    .setDescription("Le redémarrage du BOT viens d'être terminé..")
                    .setColor("0x2FED00")
                    .setFooter("Flash | Touts droits réservés.")
    message.channel.sendEmbed(embednom)
  }
}