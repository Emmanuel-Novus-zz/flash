module.exports = class Trello {
	static match(message) {
		const Discord = require('discord.js')
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'trello')
	}
	static action(message) {
		const Discord = require('discord.js');
		var trello = new Discord.RichEmbed()
				.setTitle("Mon trello")
				.setDescription("Nous possédons un trello pour suivre notre avancement en temps réel ici : https://trello.com/c/w4rF10Nb/")
				.setColor("0x000000")
				.setFooter("Flash|  Touts droits réservés.")
				.setTimestamp()
		message.channel.send(trello)
	}
}