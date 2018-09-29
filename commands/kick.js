module.exports = class Kick {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'kick')
  }

  static action(message) {
const Discord = require('discord.js');
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas les permissions nécessaires pour kick un membre.");
        if(message.mentions.users.size === 0) {
            return message.channel.send("Merci de mentionner un utilisateur.")
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Impossible de trouver l'utilisateur..")
        }
        kick.kick().then(member => {
            message.channel.send(`<:oui:470322748594454549> L'utilisateur ${member.user.username} est désormais kick du serveur. `)
    }
}