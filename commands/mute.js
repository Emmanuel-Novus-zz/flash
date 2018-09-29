module.exports = class Mute {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'mute')
  }

  static action(message) {
    const Discord = require('discord.js');
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Il te faut la permission pour pouvoir mute.")
        let member = message.mentions.members.first();
        if(!member) return message.channel.send('Veuillez mentionner un utilisateur(s).');
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas la permission pour mute.");
        let channels = message.guild.channels.array()
        let role = member.guild.roles.find('name', 'Muted');
        member.addRole(role)
        for (var i=0; i < channels.length; i++) {
          channels[i].overwritePermissions(member, {SEND_MESSAGES: false})
            .catch(er => {message.channel.send("I'm crashing, man."); i = channels.length;});
        }
        message.channel.send({
            "embed": {
              "color": 14614785,
                  "footer": {
                "text": "Flash | Touts droits réservés."
              },
              "fields": [
                {
                  "name": "Mute du joueur",
                  "value": "<@!" + member.id + ">",
                  "inline": true
                },
                {
                  "name": "Mute éxécuté par",
                  "value": "<@!" + message.member.id + ">",
                  "inline": false
                }
              ]
            }
          });
      }
    }