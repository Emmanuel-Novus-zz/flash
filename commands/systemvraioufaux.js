module.exports = class SystemVraiOuFaux {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'systemvraioufaux')
	}
	static action(message) {
		   if (message.member.hasPermission("MANAGE_CHANNELS")){
		   	const Discord = require('discord.js');
		   	var system = new Discord.RichEmbed()
		   			.setTitle(":white_check_mark: Système activé")
		   			.setDescription("Le système de vrai ou faux a bien été activé avec succès.")
		   			.setColor("0x27EA00")
                    .setFooter("Flash | Touts droits réservés.")
                message.channel.send(system)
                message.channel.guild.createChannel("❔vraioufaux");
	}
}
}