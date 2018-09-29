module.exports = class LogsON {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'logs-on')
	}
	static action(message) {
		const Discord = require('discord.js');
	if (message.member.hasPermission("MANAGE_CHANNELS")){
		var logson = new Discord.RichEmbed()
				.setTitle(":white_check_mark: Système de logs activés avec succès")
				.setDescription("Le système pour voir les logs a bien été activé.")
				.setColor("0x27EA00")
				.setTimestamp()
			message.channel.send(logson)
		    message.channel.guild.createChannel("logs-flash")
	}
}
}