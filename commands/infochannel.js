module.exports = class ChannelId {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'infochannel')
	}

	static action(message) {
		const Discord = require('discord.js');
		var infochannel = new Discord.RichEmbed()
				.setTitle("Informations actuel sur ce channel")
				.addField("Nom du channel :",  message.channel.name)
				.addField("ID du channel :",  message.channel.id)
				.addField("Date de création :",  message.channel.createdAt)
				.addField("Nombre de personnes pouvant voir ce channel : ", message.channel.memberCount)
				.setFooter('Flash | Touts droits réservés.')
				.setColor("0xff0000")
			message.channel.send(infochannel)
	}
}