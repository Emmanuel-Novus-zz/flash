module.exports = class ServeurDiscord {
	static match(message) {
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'serveurdiscord')
	}

	static action(message) {
			const Discord = require('discord.js');
				var serveurdiscord = new Discord.RichEmbed()
									.setTitle(":arrow_forward: Quel est mon serveur discord officiel ?")
									.setDescription("Mon serveur discord officiel est le suivant : https://discord.gg/wJDfxNT")
									.setColor("0x40A497")
									.setFooter("Flash | Touts droits réservés")
				message.channel.sendEmbed(serveurdiscord)
	}
}
