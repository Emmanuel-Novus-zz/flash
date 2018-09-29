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
      .setTitle("Listes des menus")
      .setDescription("🔵 Menu principal \n 🔷 Menu 2 \n 🔶 Menu 3 ")
      .setFooter("Flash | Commande en développement")
   
    message.channel.send(embed).then(msg => { 
     
      msg.react('🔵').then( r => { 
        msg.react('🔷') 
        msg.react('🔶')
       
        const menu1Filter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;
        const menu2Filter = (reaction, user) => reaction.emoji.name === '🔷' && user.id === message.author.id; 
        const menu3Filter = (reaction, user) => reaction.emoji.name === '🔶' && user.id === message.author.id; 
       
        const menu1 = msg.createReactionCollector(menu1Filter, { time: 60000 }); 
        const menu2 = msg.createReactionCollector(menu2Filter, { time: 60000 }); 
        const menu3 = msg.createReactionCollector(menu3Filter, { time: 60000 }); 
       
       menu1.on('collect', r => { 
          if (page === 1) return; 
          page--; 
          embed.setTitle("Listes des menus")
          embed.setDescription("🔵 Menu principal \n 🔷 Menu 2 \n 🔶 Menu 3 ")
          embed.setFooter("Flash | Commande en développement")
          msg.edit(embed) 
        })
       
        menu2.on('collect', r => { 
          if (page === pages.length) return; 
          page++; 
          embed.setTitle("MENU 2")
          embed.setDescription("Bienvenue dans le menu 2")
          embed.setFooter("Flash | Commande en développement")
          msg.edit(embed) 

           menu2.on('collect', r => { 
          if (page === 2) return; 
          page--; 
          embed.setTitle("Ceci est un test")
          embed.setDescription("Nous sommes l'embed n°2")
          embed.setFooter("Flash | Commande en développement")
          msg.edit(embed) 
        })
       
        menu3.on('collect', r => { 
          if (page === pages.length) return; 
          page++; 
          embed.setTitle("Menu 3")
          embed.setDescription("Bienvenue dans le menu 3")
          embed.setFooter("Flash | Commande en développement")
          msg.edit(embed) 
        })
        })})})} 
}


