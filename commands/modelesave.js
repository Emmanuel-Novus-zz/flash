module.exports = class Tableau {
    static match(message) {
        const Discord = require('discord.js');
        const settings = require('../config.json')
        const prefix = settings.prefix
        return message.content.startsWith(prefix + 'tableau')
    }
    static action(message) {
    const Discord = require('discord.js');
   let pages = ['This is page one!', 'Second page', 'Third', 'You can add pages', 'All you need to do is add another item in the array', '**Supports markdown and regular chat description properties**']; 
    let page = 1; 
   
    const embed = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setTitle("Ceci est un test")
      .setDescription("Nous sommes l'embed n°1")
      .setFooter("Flash | Commande en développement")
   
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
          embed.setTitle("Ceci est un test")
          embed.setDescription("Nous sommes l'embed n°1")
          embed.setFooter("Flash | Commande en développement")
          msg.edit(embed) 
        })
       
        forwards.on('collect', r => { 
          if (page === pages.length) return; 
          page++; 
          embed.setTitle("Ceci est un test")
          embed.setDescription("Nous sommes l'embed n°2")
          embed.setFooter("Flash | Commande en développement")
          msg.edit(embed) 

                  backwards.on('collect', r => { 
          if (page === 2) return; 
          page--; 
          embed.setTitle("Ceci est un test")
          embed.setDescription("Nous sommes l'embed n°2")
          embed.setFooter("Flash | Commande en développement")
          msg.edit(embed) 
        })
       
        forwards.on('collect', r => { 
          if (page === pages.length) return; 
          page++; 
          embed.setTitle("Ceci est un test")
          embed.setDescription("Nous sommes l'embed n°3")
          embed.setFooter("Flash | Commande en développement")
          msg.edit(embed) 
        })
        })})})} 


}


