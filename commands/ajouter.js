 module.exports = class Ajouter {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'ajouter')
  }

  static action(message) {
   const Discord = require('discord.js');
    var embednom = new Discord.RichEmbed()
                    .setTitle(":gear: Ajouter Flash sur votre serveur discord")
                    .setDescription("Vous souhaitez ajoutez notre BOT ? Voici son lien : https://discordapp.com/oauth2/authorize?client_id=454683828536082433&scope=bot&permissions=10310")
                    .setColor("0x00D1B5")
                    .setFooter("Flash | Touts droits réservés")
    message.channel.sendEmbed(embednom)
  }
}