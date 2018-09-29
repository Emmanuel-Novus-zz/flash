module.exports = class VraiOuFaux {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + "vraioufaux")
	}

	static action(message) {
		const Discord = require('discord.js');
		let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        if(!message.guild.channels.find("name", "❔vraioufaux")) return message.channel.send("**❌ | Channel #❔vraioufaux introuvable, effectuer la commande /systemvraioufaux**")
        if(message.channel.name !== "❔vraioufaux") return message.channel.send("**❌ | Utilise le salon ❔vraioufaux pour faire des vrai ou faux.**")
        if(!thingToEcho) return message.channel.send("**❌ | Merci d'envoyer un message.**")

        var vraioufaux = new Discord.RichEmbed()
    				.setDescription(":question: VRAI OU FAUX ?")
    				.addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
    				.setColor("0xE2EFED")
    				.setTimestamp()
        message.delete();
            message.channel.send(vraioufaux)
                                .then(function (message){
                    message.react("✅")
                    message.react("❌")
                    }).catch(function(){

                    });
}
}