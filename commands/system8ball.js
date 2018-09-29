module.exports = class System8ball {
	static match(message){
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'system8ball')
	}
	static action(message) {
			const Discord = require('discord.js');
			var system = new Discord.RichEmbed()
				.setTitle(":white_check_mark: Le système 8ball a bien été activé")
				.setDescription(message.author.username + " viens d'activé avec succès le système de 8ball.")
				.setColor("0x27EA00")
				.setFooter("Flash | Touts droits réservés")
			message.channel.send(system)
			message.channel.guild.createChannel("🎱8ball");
	}
}