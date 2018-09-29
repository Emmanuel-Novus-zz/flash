module.exports = class Money {
    static match(message) {
        const Discord = require('discord.js');
        const settings = require('../config.json')
        const prefix = settings.prefix
        return message.content.startsWith(prefix + 'money')
    }
    static action(message) {
        const Discord = require('discord.js');
        const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
        const adapter = new FileSync('db.json')
        const db = low(adapter)

        var msgauthor = message.author.id
            var servauthor = message.guild.id

        if (!db.get("money").find({ user: msgauthor, serveur: servauthor }).value()) return
        var usermoneydb = db.get("money").filter({ user: msgauthor, serveur: servauthor  }).find('money').value()
        var usermoney = Object.values(usermoneydb)

     
        const money = new Discord.RichEmbed()
                .setTitle("🌐 Argent de l'entreprise de " + message.author.username)
                .addField("💳 Argent actuel : ", usermoney[2] + '€')
                .setFooter("Flash | Touts droits réservés.")
                .setColor("0xF67B00")
            message.channel.send(money)
        }
}