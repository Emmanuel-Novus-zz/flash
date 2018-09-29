module.exports = class MsgGlobal {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'msg-global')
  }

  static action(message) {
    const Discord = require('discord.js');
    const bot = new Discord.Client();
        let args = message.content.split(" ").slice(1);
        let vcsmsg = args.join(" ")
        if(!message.guild.channels.find("name", "flash-global")) return message.channel.send("**❌ | Channel #flash-global introuvable**")
        if(message.channel.name !== "flash-global") return message.channel.send("**❌ | Utilise le salon #flash-global pour pourvoir parler a tous les serveurs cette commande.**")
        if(!vcsmsg) return message.channel.send("**❌ | Merci d'envoyer un message.**")

        var vcsembed = new Discord.RichEmbed()
        .setColor("0xDF0101")
        .setAuthor("Flash - Message global")
        .addField("Serveur :", message.guild.name, true)
        .addField("Utilisateur :", message.author.tag, true)
        .addField("Message :", vcsmsg)
        .setFooter("Flash| Touts droits réservés.")
        .setTimestamp()
        message.delete();
            message.channel.send(vcsembed)
        }
    }
        