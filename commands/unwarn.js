module.exports = class UnWarn {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'unwarn')
  }

  static action(message) {
    const Discord = require('discord.js');
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Il te faut la permission pour pouvoir warn.")
        let member = message.mentions.members.first();
        if(!member) return message.channel.send('Veuillez mentionner un utilisateur(s).');
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas la permission pour warn.");
        let channels = message.guild.channels.array()
        let role = member.guild.roles.find('name', 'Avertissement');
        member.removeRole(role)
        for (var i=0; i < channels.length; i++) {
          channels[i].overwritePermissions(member, {SEND_MESSAGES: true})
            .catch(er => {message.channel.send("I'm crashing, man."); i = channels.length;});
        }
        var warn = new Discord.RichEmbed()
            .setDescription(":white_check_mark: Retrait d'un avertissement")
            .addField("L'utilisateur ", member.displayName + " a bien été unwarn.")
            .setFooter("Flash | Touts droits réservés.")
            .setColor("0x00BFFF")
            message.channel.sendEmbed(warn)
    }
}