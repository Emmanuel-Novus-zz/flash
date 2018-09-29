module.exports = class MeInfo {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'meinfo')
  }

  static action(message) {
    const Discord = require('discord.js');
      var meinfo = new Discord.RichEmbed()
          .setTitle("Informations sur vous")
          .addField("Tu a rejoint le serveur le:", message.author.permissions)
          .setFooter("Flash | Touts droits réservés.")
          .setColor("0x000000")
          message.channel.sendEmbed(meinfo)
}
}