  module.exports = class Heure {
  static match(message) {
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'heure')
  }

  static action(message) {
   const Discord = require('discord.js');
   const moment = require('moment');
    var heure = new Discord.RichEmbed()
                    .setTitle("Heure")
                    .setDescription("Il est actuellement " + `${moment().format('LT')}`)
                    .setColor("0x00DBEA")
                    .setFooter("Flash | Touts droits réservés.")
    message.channel.sendEmbed(heure)
  }
}