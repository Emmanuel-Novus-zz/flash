module.exports = class Ban {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'ban')
  }

  static action(message) {
    const Discord = require('discord.js');
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) 
            return message.channel.send("Vous n'avez pas la permissions nécessaires pour bannir.");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Merci de mentionner une personne pour bannir.");
        }
        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("Impossible de trouver l'utilisateur dans le serveur.");
        }
        ban.ban().then(member => {
            message.channel.send(`<:oui:470322748594454549> L'utilisateur ${member.user.username} est désormais ban du serveur.`)
    })
}
}