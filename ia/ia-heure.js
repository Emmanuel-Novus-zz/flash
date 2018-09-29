module.exports = class IAHEURE {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith('Flash Il est quel heure ?')
	}

	static action(message) {
		const Discord = require('discord.js');
		const moment = require('moment');
		var iaheure = new Discord.RichEmbed()
				.setTitle(message.author.username +  " a demandé l'heure")
				.setDescription("Il est actuellement" + ` ${moment().format('LT')}`)
				.setColor("0x00DBEA")
				.setFooter("Flash | Développé par Emmanuel")
			message.channel.send(iaheure)
	}
}