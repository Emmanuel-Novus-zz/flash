module.exports = class GagnantpQuizz {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'gagnantquizz')
	}
	static action(message) {
		if (message.member.hasPermission("MANAGE_CHANNELS")){
		const Discord = require('discord.js');
		let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")

		if (message.member.hasPermission("MANAGE_CHANNELS")){
        if(!message.guild.channels.find("name", "🔗quizz")) return message.channel.send("**❌ | Channel 🔗quizz introuvable, effectuer la commande /systemquizz**")
        if(message.channel.name !== "🔗quizz") return message.channel.send("**❌ | Utilise le salon 🔗quizz pour écrire le nom du gagnant (sans le mentionner).")
        if(!thingToEcho) return message.channel.send("**❌ | Merci d'envoyer une questions**")
		var stopquizz = new Discord.RichEmbed()
				.setTitle("📢 Gagnant du Quizz")
				.addField("Le gagnant du quizz est:", thingToEcho)
				.setColor("0x000000")
				.setFooter("Flash | Touts droits réservés.")
			message.channel.send(stopquizz)
		}else {
			message.reply("Vous n'avez pas les permissions nécessaires.")
		}
	}
}
}