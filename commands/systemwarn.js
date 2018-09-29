module.exports = class SystemWarn {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'systemwarn')
	}
	static action(message) {
		 if (message.member.hasPermission("MANAGE_ROLES")){
		const Discord = require('discord.js');
		message.guild.createRole({
          name: "Avertissement",
          color:"#F50716",
})
		var system = new Discord.RichEmbed()
				.setTitle("✅ Système activé")
				.setDescription(message.author.username + " viens d'activé le système d'avertissement avec succès.")
				.setColor("0x27EA00")
				.setFooter("Développé par Emmanuel | Touts droits réservés.")
		message.channel.send(system)
	}
}
}