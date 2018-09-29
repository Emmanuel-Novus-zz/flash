  module.exports = class Ping {
  static match(message) {
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'ping')
  }

  static action(message) {
   const Discord = require('discord.js');
    var embednom = new Discord.RichEmbed()
                    .setTitle(":computer: Ping")
                    .setDescription("Temps de latence avec le serveur: " + `${message.createdTimestamp - Date.now()}` + "ms")
                    .setColor("0xFA0000")
                    .setFooter("Flash | Touts droits réservés")
    message.channel.sendEmbed(embednom)
  }
}