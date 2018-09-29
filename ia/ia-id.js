module.exports = class IAID {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith("Flash Quel est mon ID ?")
	}

	static action(message) {
		const Discord = require('discord.js');
		const moment = require('moment');
		var iaid = new Discord.RichEmbed()
				.setTitle(message.author.username +  " a demandé son ID ")
				.addField("Son ID est le suivant :", message.author.id)
				.setColor("0x00DBEA")
				.setFooter("Flash | Développé par Emmanuel")
			message.channel.send(iaid)
	}
}