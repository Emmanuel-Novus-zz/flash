module.exports = class SystemLive {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'systemlive')
	}
	static action(message) {
		if (message.member.hasPermission("MANAGE_MESSAGES")){
		const Discord = require('discord.js');
		var system = new Discord.RichEmbed()
				.setTitle("Systeme activé")
				.setDescription(message.author.username + " viens d'activé le système de live.")
				.setFooter("Flash | Touts droits réservés.")
				message.channel.send(system)
				message.channel.guild.createChannel("📢live")
	}
}
}