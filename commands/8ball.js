module.exports = class HUITBALL {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + '8ball')
	}
	static action(message) {
		const Discord = require('discord.js');
		  let argsed = message.content.split(" ").slice(1);
           let tte = argsed.join(" ")
             if(!message.guild.channels.find("name", "🎱8ball")) return message.channel.send("**❌ | Channel #🎱8ball introuvable, effectuer la commande /system8ball**")
        if(message.channel.name !== "🎱8ball") return message.channel.send("**❌ | Utilise le salon 🎱8ball pour poser des questions.*")
           if (!tte){
               return message.reply("Merci de poser une question. :8ball:")};

                        var replys8 = [
                            '#F407FC', 
                            '#034EEF',
                            '#09F4D1',
                            '#09F14E',
                            '#E7EF07',
                            '#F5A718',
                            '#FB4B06',
                            '#FB2702',
                            '#F6F4F3',
                            '#201F1F'
                        ];
                    
                        let reponse8 = (replys8[Math.floor(Math.random() * replys8.length)])
    
               var replys = [
               "Oui.",
               "Non.",
               "Je ne sais pas.",
               "Peut-être.",
               "Probablement."
               ];
           
               let reponse = (replys[Math.floor(Math.random() * replys.length)])
               var ballembed = new Discord.RichEmbed()
               .setDescription(":8ball: 8ball")
               .addField("Question", tte)
               .addField("Réponse", reponse)
               .setColor(reponse8)
           message.channel.send(ballembed)
	}
}