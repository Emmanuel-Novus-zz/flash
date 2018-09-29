module.exports = class WDLivraison {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'wd-livraison')
  }

  static action(message) {
            if (message.member.hasPermission("MANAGE_MESSAGES")){

            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")           
            const Discord = require('discord.js');
            var embednom = new Discord.RichEmbed()
                    .setDescription(":white_check_mark: Nouvelle livraison effectué")
                    .addField("Informations sur la livraison :", thingToEcho)
                    .addField("Livré par :", message.author.username)
                    .setColor("0x27EA00")
                    .setFooter("Flash | Touts droits réservés")
    message.channel.sendEmbed(embednom)       
        }else{
            return message.reply("Erreur. Il me semblerait que vous n'ayez pas les permissions nécessaires pour effectuer la commande >alerte.")
        }
    }
  }