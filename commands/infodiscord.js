 module.exports = class InfoDiscord {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'infodiscord')
  }

  static action(message) {
    const Discord = require('discord.js');
    var embed = new Discord.RichEmbed()
       .setDescription("A propos de ce serveur discord")
       .addField("Nom du serveur", message.guild.name)
       .addField("Nombre de membres", message.guild.memberCount)
       .addField("Créé le :", message.guild.createdAt)
       .addField("Vous avez rejoint le :", message.guild.joinedAt)
       .setColor("0xD4D0D0")
    message.channel.send(embed)
  }

  
}