module.exports = class CreateEntreprise {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'create-entreprise')
	}
	static action(message) {
		const Discord = require('discord.js');
		  const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
        const adapter = new FileSync('db.json')
        const db = low(adapter)
   	let pages = ['This is page one!', 'Second page', 'Third', 'You can add pages', 'All you need to do is add another item in the array', '**Supports markdown and regular chat description properties**']; 
    let page = 1; 
   
    const embed = new Discord.RichEmbed()
      .setColor('0xF67B00')
      .setTitle("✅ Validation de la création de votre entreprise")
      .setDescription(message.author.username + ' , êtes vous sûr de créer une entreprise ?')
      .setFooter("Flash | Touts droits réservés.")
   
    message.channel.send(embed).then(msg => { 
     
      msg.react('❌').then( r => { 
        msg.react('✅') 
       
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id; 
       
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
       
        
        backwards.on('collect', r => { 
          if (page === 1) return; 
          page--; 
          embed.setTitle("❌ Création de l'entreprise échoué")
          embed.setDescription(message.author.username + ' a refusé de créer son entreprise.')
          embed.setFooter("Flash | Touts droits réservés.")
          msg.edit(embed) 
        })
       
        forwards.on('collect', r => { 
          if (page === pages.length) return; 
          page++; 
          embed.setTitle("✅ Vous disposez désormais votre propre entreprise")
          embed.setDescription(message.author.username + " est désormais directeur général d'une entreprise.")
          embed.setFooter("Flash | Touts droits réservés.")
          msg.edit(embed) 

	})})})}
}
