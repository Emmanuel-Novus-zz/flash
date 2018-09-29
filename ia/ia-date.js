module.exports = class IADATE {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith("Flash Quel est la date d'aujourd'hui ?")
	}

	static action(message) {
		const Discord = require('discord.js');
		const moment = require('moment');
		var iadate = new Discord.RichEmbed()
				.setTitle(message.author.username +  " a demandé la date ")
				.setDescription("Nous sommes actuellement le " + `${moment().format('DD-MM-YYYY')}`)
				.setColor("0x00DBEA")
				.setFooter("Flash | Développé par Emmanuel")
			message.channel.send(iadate)
	}
}