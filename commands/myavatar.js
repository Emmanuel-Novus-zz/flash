 module.exports = class MyAvatar {
  static match(message) {
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'myavatar')
  }

  static action(message) {
  	const Discord = require('discord.js');
    var embednom = new Discord.RichEmbed()
            .setTitle(":white_check_mark: Succès")
            .setDescription("Le lien de ton avatar viens de t'être envoyé par message privée.")
            .setColor("0x27EA00")
             .setFooter("Flash | Touts droits réservés.")
             message.channel.sendEmbed(embednom)
        message.author.send('Hey, voici le lien de ton avatar :')
  		message.author.send(message.author.avatarURL)
  }
}