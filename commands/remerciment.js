module.exports = class Remerciment {
		static match(message) {
			const Discord = require('discord.js');
			const settings = require('../config.json')
			const prefix = settings.prefix
			return message.content.startsWith(prefix + 'remerciment')
		}

		static action(message) {
			const Discord = require('discord.js');
			var remerciment = new Discord.RichEmbed()
					.setTitle(":briefcase: Remerciment")
					.setDescription("Un grand merci à Awokz, Noody.")
					.setColor("0x000000")
					.setFooter("Flash | Touts droits réservés.")
				message.channel.sendEmbed(remerciment)
		}
}