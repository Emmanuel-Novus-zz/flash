module.exports = class LancementQuizz {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'lancementquizz')
	}

	static action(message) {
		const Discord = require('discord.js');
		if (message.member.hasPermission("MANAGE_CHANNELS")){
        if(!message.guild.channels.find("name", "🔗quizz")) return message.channel.send("**❌ | Channel 🔗quizz introuvable, effectuer la commande /systemquizz**")
        if(message.channel.name !== "🔗quizz") return message.channel.send("**❌ | Utilise le salon 🔗quizz pour lancer un quizz")
		var lancementquizz = new Discord.RichEmbed()
				.setTitle("⌚️ Lancement d'un quizz")
				.setDescription("Un membre de l'équipe va lancer un quizz d'ici quelques secondes/minutes, préparez-vous.")
				.setColor("0x096559")
				.setFooter("Flash | Touts droits réservés.")
			message.channel.send(lancementquizz)
	}
	}
}