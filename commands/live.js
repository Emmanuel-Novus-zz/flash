module.exports = class Live {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'live')
	}
	static action(message) {
		const Discord = require('discord.js');
		let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
          if(!message.guild.channels.find("name", "📢live")) return message.channel.send("**❌ | Channel #📢live introuvable, effectuer la commande /systemlive*")
        if(message.channel.name !== "📢live") return message.channel.send("**❌ | Utilise le salon 📢live pour poser des questions.*")
		message.channel.send("@everyone INFORMATIONS LIVE 🔻")
		var live = new Discord.RichEmbed()
				.setTitle("📢 LIVE Youtube")
				.addField("Le lien du live est disponible ici:", thingToEcho)
				.setColor("0x00EFCF")
				.setFooter("Flash | Touts droits réservés.")
			message.channel.send(live)
	}
}