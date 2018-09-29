module.exports = class Quizz {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'quizz')
	}
	static action(message) {
		const Discord = require('discord.js');
		let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")

		if (message.member.hasPermission("MANAGE_CHANNELS")){
        if(!message.guild.channels.find("name", "🔗quizz")) return message.channel.send("**❌ | Channel 🔗quizz introuvable, effectuer la commande /systemquizz**")
        if(message.channel.name !== "🔗quizz") return message.channel.send("**❌ | Utilise le salon 🔗quizz pour poser une question")
        if(!thingToEcho) return message.channel.send("**❌ | Merci d'envoyer une questions**")
        	  var quizz = new Discord.RichEmbed()
    				.setDescription("🆕 Nouvelle question")
    				.addField("Détails:", thingToEcho)
    				.setColor("0xE2EFED")
    				.setFooter("Flash | Touts droits réservés.")
    				message.channel.send(quizz)
    			}else {
    				message.reply("Il semblerait que vous n'ayez pas les permissions")
    			}
	}
}