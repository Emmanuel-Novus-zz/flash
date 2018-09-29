module.exports = class ChannelId {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'idchannel')
	}

	static action(message) {
		const Discord = require('discord.js');
		var idchannel = new Discord.RichEmbed()
				.setTitle("ID du channel:" +   message.channel.name)
				.addField("L'ID du channel est :",  message.channel.id)
				.setFooter('Flash | Touts droits réservés.')
				.setColor("0xff0000")
			message.channel.send(idchannel)
	}
}