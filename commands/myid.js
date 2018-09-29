module.exports = class MyId {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'myid')
	}

	static action(message) {
		const Discord = require('discord.js');
		var myid = new Discord.RichEmbed()
				.setTitle('Votre identifiant / ID')
				.addField("Votre ID est le suivant :", message.author.id)
				.setFooter('Flash | Touts droits réservés.')
				.setColor("0xff0000")
			message.channel.send(myid)
	}
}