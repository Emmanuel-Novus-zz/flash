 module.exports = class InfoBot {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'infobot')
    message.delete()
  }

  static action(message) {
    const Discord = require('discord.js');
    const bot = new Discord.Client()
    var embed = new Discord.RichEmbed()
      .setDescription("Informations sur Flash")
       .addField(":bust_in_silhouette: Mon nom : ", "Flash", )
       .addField(":bust_in_silhouette: Mon discriminateur :", "#0544")
       .addField(":bust_in_silhouette: Mon créateur / développeur :", "</> Emmanuel#2543")
       .addField(":bust_in_silhouette: Ma date de création :", " 08/06/2018")
       .setColor("0x0000FF")
       .setFooter("Flash | Touts droits réservés.")
      message.channel.sendEmbed(embed)
  }
}