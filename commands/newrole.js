module.exports = class NewRole {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'newrole')
	}
	static action(message) {
		const Discord = require('discord.js');
		if (message.member.hasPermission("MANAGE_MESSAGES")){
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
	    message.guild.createRole({
         name: thingToEcho,
		})
		var newrole = new Discord.RichEmbed()
				.setTitle("Role créer avec succès !")
				.addField("Voici le nom du rôle créer :", thingToEcho)
				.setFooter("Flash | Touts droits réservés.")
		message.channel.send(newrole)
	}
}
}