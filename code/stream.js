module.exports = class Stream {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		return message.content.startsWith('code/stream');
	}
	static action(message) {
		const Discord = require('discord.js');
		let pages = ['This is page one!', 'Second page', 'Third', 'You can add pages', 'All you need to do is add another item in the array', '**Supports markdown and regular chat description properties**']; 
    	let page = 1; 
   
    const embed = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setTitle("Bienvenue dans l'espace de formation")
      .setDescription("Demande : Code de Stream")
      .setFooter("Flash | Touts droits réservés.")
   
    message.channel.send(embed).then(msg => { 
     
      msg.react('⏪').then( r => { 
        msg.react('⏩') 
       
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
       
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
       
        
        backwards.on('collect', r => { 
          if (page === 1) return; 
          page--; 
          const embed = new Discord.RichEmbed()
      		.setTitle("Bienvenue dans l'espace de formation")
     		.setDescription("Demande : Code de Stream")
      		.setFooter("Flash | Touts droits réservés.")
          msg.edit(embed) 
        })
       
        forwards.on('collect', r => { 
          if (page === pages.length) return; 
          page++; 
          const embed = new Discord.RichEmbed()
          	.setTitle("Voici sans plus attendre le code:")
          	.setDescription("**Disponible dès maintenant sur HasteBin : https://hastebin.com/ejezaxogej.lua**")
          	.setFooter("Flash | Développé par Emmanuel.")
          msg.edit(embed) 

                  backwards.on('collect', r => { 
          if (page === 2) return; 
          page--; 
          const embed = new Discord.RichEmbed()
          	.setTitle("Voici sans plus attendre le code:")
          	.setDescription("**Disponible dès maintenant sur HasteBin : https://hastebin.com/ejezaxogej.lua**")
          	.setFooter("Flash | Développé par Emmanuel.")
          msg.edit(embed) 
        })
        })})})} 


}
