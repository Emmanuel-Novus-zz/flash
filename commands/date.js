  module.exports = class Date {
  static match(message) {
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'date')
  }

  static action(message) {
   const Discord = require('discord.js');
   const moment = require('moment');
    var date = new Discord.RichEmbed()
                    .setTitle("Date")
                    .setDescription("Nous sommes actuellement le : " + `${moment().format('DD-MM-YYYY')}`)
                    .setColor("0x00DBEA")
                    .setFooter("Flash | Touts droits réservés.")
    message.channel.sendEmbed(date)
  }
}