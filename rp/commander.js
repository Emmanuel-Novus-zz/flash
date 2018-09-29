module.exports = class Commander {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'commander')
	}
	static action(message) {
		const Discord = require('discord.js');
		const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
        const adapter = new FileSync('db.json')
        const db = low(adapter)

        var msgauthor = message.author.id
        var servauthor = message.guild.id

if (!db.get("pc").find({ user: msgauthor, serveur: servauthor }).value()) {
  db.get("pc").push({ user: msgauthor, serveur: servauthor,  pc: 2 }).write()
      } else {
        var userpcdb = db.get("pc").filter({ user: msgauthor, serveur: servauthor,  }).find('pc').value()
        var userpc = Object.values(userpcdb)
        db.get("pc").find({ user: msgauthor, serveur: servauthor }).assign({ user: msgauthor, serveur: servauthor, pc: userpc[2] += 1 }).write()    
        const succes = new Discord.RichEmbed()
            .setTitle("📌 Commande effectué")
            .setDescription("Vous venez de commander 1 ordinateur pour votre société.")
            .setFooter("Flash | Touts droits réservés.")
            .setColor("0xF67B00")
            message.channel.send(succes)
}
}
}