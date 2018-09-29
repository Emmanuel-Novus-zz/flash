module.exports = class Clear {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'clear')
  }

  static action(message) {
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.fetchMessages()
                    .then(function(list){
                      const Discord = require('discord.js');
                      var embednom = new Discord.RichEmbed()
                    .setTitle(":white_check_mark: Votre demande a été effectué")
                    .setDescription("Le channel demandé a bien été clear avec succès.")
                    .setColor("0x27EA00")
                    .setFooter("Flash | Touts droits réservés.")
                      message.channel.send(embednom)
                        message.channel.bulkDelete(list)
                    }) }else{
                      const Discord = require('discord.js')
                      var erreur_clear = new Discord.RichEmbed()
                      .setTitle(":x: Erreur", message.author.username)
                      .setDescription("Oups, il semblerait que vous n'ayez pas les permissions nécessaires pour effectuer cette commande.")
                      .setColor("0xF50716")
                      .setFooter("Flash | Touts droits réservés.")
                      message.channel.send(erreur_clear)
                    }
}
}