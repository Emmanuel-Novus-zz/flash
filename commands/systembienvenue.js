module.exports = class SystemBienvenue {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'systembienvenue')
  }

  static action(message) {
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                      const Discord = require('discord.js');
                      var embednom = new Discord.RichEmbed()
                    .setTitle(":white_check_mark: Succès")
                    .setDescription("Vous avez bien activé le système automatique de bienvenue !")
                    .setColor("0x27EA00")
                    .setFooter("Flash | Touts droits réservés.")
                    message.channel.send(embednom)
                    message.channel.guild.createChannel("bienvenue-welcome");
                  }
                }
}