 module.exports = class Maj {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'maj')
  }

  static action(message) {
    const Discord = require('discord.js');
    var embed = new Discord.RichEmbed()
       .setDescription("Dernières mises à jours")
       .addField("Date:","[13/06/2018 18:40] ")
       .addField(">remerciment", "Développement de la commande terminée.")
       .addField("Date:","[13/06/2018 15:00] ")
       .addField(">maj", "Reset des mises à jours.")
       .setColor("0x000000")
    message.channel.sendEmbed(embed)
    message.reply('La liste des dernières mises à jours vous a été envoyé par message privée.')
  }
}