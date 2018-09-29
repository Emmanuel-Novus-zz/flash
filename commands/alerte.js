module.exports = class Alerte {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'alerte')
  }

  static action(message) {
            if (message.member.hasPermission("MANAGE_MESSAGES")){

            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")           
            const Discord = require('discord.js');
            var embednom = new Discord.RichEmbed()
                    .setTitle("Alerte des administrateurs")
                    .setDescription(thingToEcho)
                    .addField("Alerte par :", message.author.username)
                    .setColor("0xA102F0")
                    .setFooter("Flash | Touts droits réservés")
    message.channel.sendEmbed(embednom)       
        }else{
            const Discord = require('discord.js');
                      var erreur_alerte = new Discord.RichEmbed()
                      .setTitle(":x: Erreur", message.author.username)
                      .setDescription("Oups, il semblerait que vous n'ayez pas les permissions nécessaires pour effectuer cette commande.")
                      .setColor("0xF50716")
                      .setFooter("Flash | Touts droits réservés.")
                      message.channel.sendEmbed(erreur_alerte)
        }
    }
  }