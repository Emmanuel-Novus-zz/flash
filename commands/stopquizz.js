module.exports = class StopQuizz {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'stopquizz')
	}
	static action(message) {
		if (message.member.hasPermission("MANAGE_CHANNELS")){
		const Discord = require('discord.js');
		var stopquizz = new Discord.RichEmbed()
				.setTitle("🔴 Fin du quizz")
				.setDescription("Le quizz est désormais terminé.")
				.setColor("0xF42100")
				.setFooter("Flash | Touts droits réservés.")
			message.channel.send(stopquizz)
		}else {
			message.reply("Vous n'avez pas les permissions nécessaires.")
		}
	}
}