module.exports = class Help {
    static match(message) {
        const Discord = require('discord.js');
        const settings = require('../config.json')
        const prefix = settings.prefix
        return message.content.startsWith(prefix + 'help')
    }
    static action(message) {
    const Discord = require('discord.js');
   let pages = ['This is page one!', 'Second page', 'Third', 'You can add pages', 'All you need to do is add another item in the array', '**Supports markdown and regular chat description properties**']; 
    let page = 1; 
   
    const embed = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setTitle("Listes des commandes")
      .setDescription(" 📑 Menu principal des commandes \n 🚨 Listes des commandes de modération \n ⭐ Listes des commandes des administrateurs \n 🔰 Commandes systèmes \n 📋 Commandes Informations Utiles \n 🌍 Commandes utiles \n 🌐 Commande quizz \n 📂 RP - Commande entreprise")
      .setFooter("Flash | Touts droits réservés.")
   
    message.channel.send(embed).then(msg => { 
     
      msg.react('📑').then( r => { 
        msg.react('🚨') 
        msg.react('⭐')
        msg.react('🔰')
        msg.react('📋')
        msg.react('🌍')
        msg.react('🌐')
        msg.react('📂')

       
        const mprincipalFilter = (reaction, user) => reaction.emoji.name === '📑' && user.id === message.author.id;
        const modoFilter = (reaction, user) => reaction.emoji.name === '🚨' && user.id === message.author.id; 
        const admFilter = (reaction, user) => reaction.emoji.name === '⭐' && user.id === message.author.id; 
        const systemFilter = (reaction, user) => reaction.emoji.name === '🔰' && user.id === message.author.id;
        const infoutileFilter = (reaction, user) => reaction.emoji.name === '📋' && user.id === message.author.id;  
        const utilitaireFilter = (reaction, user) => reaction.emoji.name === '🌍' && user.id === message.author.id; 
        const quizzFilter = (reaction, user) => reaction.emoji.name === '🌐' && user.id === message.author.id; 
        const entrepriseFilter = (reaction, user) => reaction.emoji.name === '📂' && user.id === message.author.id; 
       
       
        const mprincipal = msg.createReactionCollector(mprincipalFilter, { time: 60000 }); 
        const modo = msg.createReactionCollector(modoFilter, { time: 60000 }); 
        const adm = msg.createReactionCollector(admFilter, { time: 60000 }); 
        const system = msg.createReactionCollector(systemFilter, { time: 60000 }); 
        const infoutile = msg.createReactionCollector(infoutileFilter, { time: 60000 }); 
        const utilitaire = msg.createReactionCollector(utilitaireFilter, { time: 60000 }); 
        const quizz = msg.createReactionCollector(quizzFilter, { time: 60000 });
        const entreprise = msg.createReactionCollector(entrepriseFilter, { time: 60000 });  
       
        mprincipal.on('collect', r => { 
          if (page === 1) return; 
          page--; 
          var mprincipal = new Discord.RichEmbed()
          .setTitle("Listes des commandes")
          .setDescription("📑 Menu principal des commandes \n 🚨 Listes des commandes de modération \n ⭐ Listes des commandes des administrateurs \n 🔰 Commandes systèmes \n 📋 Commandes Informations Utiles \n 🌍 Commandes utiles \n 🌐 Commande quizz \n 📂 RP - Commande entreprise")
          .setFooter("Flash | Touts droits réservés.")
          msg.edit(mprincipal) 
        })
       
        modo.on('collect', r => { 
          if (page === pages.length) return; 
          page++; 
          var modo = new Discord.RichEmbed()
          .setTitle("🚨 Listes des commandes de modération")
          .addField("/clear", "*Permet de vider un channel précis.*")
          .addField("/ban", "*Permet de bannir un membre*")
          .addField("/kick", "*Permet de kick un membre.*")
          .addField("/mute", "*Permet de mute un membre (Créer le rôle Muted).*")
          .addField("/warn", "*Permet d'ajouter un avertissement à un membre.*")
          .addField("/unwarn", "*Permet d'enlever un avertissement à un membre.*")
          .setFooter("Flash | Touts droits réservés.")
          msg.edit(modo)
})
         modo.on('collect', r => { 
          if (page === 2) return; 
          page--; 
          var modo = new Discord.RichEmbed()
          .setTitle("🚨 Listes des commandes de modération")
          .addField("/clear", "*Permet de vider un channel précis.*")
          .addField("/ban", "*Permet de bannir un membre*")
          .addField("/kick", "*Permet de kick un membre.*")
          .addField("/mute", "*Permet de mute un membre (Créer le rôle Muted).*")
          .addField("/warn", "*Permet d'ajouter un avertissement à un membre.*")
          .addField("/unwarn", "*Permet d'enlever un avertissement à un membre.*")
          .setFooter("Flash | Touts droits réservés.")
          msg.edit(modo) 
        })
       
        adm.on('collect', r => { 
          if (page === pages.length) return; 
          page++; 
          var adm = new Discord.RichEmbed()
          .setTitle("⭐ Listes des commandes des administrateurs")
          .addField("/say", "*Permet de faire parler Flash.*")
          .addField("/sondage", "*Permet d'effectuer un sondage dans un channel précis.*")
          .addField("/live", "*Permet d'avertir au membre que vous faites un live (Faire /systemlive).*")
          .addField("/sayadm", "*Permet de faire parler Flash.*")
          .setFooter("Flash | Touts droits réservés.")
          msg.edit(adm)  
})
         adm.on('collect', r => { 
          if (page === 3) return; 
          page--; 
          var adm = new Discord.RichEmbed()
            .setTitle("⭐ Listes des commandes des administrateurs")
            .addField("/say", "*Permet de faire parler Flash.*")
            .addField("/sondage", "*Permet d'effectuer un sondage dans un channel précis.*")
            .addField("/live", "*Permet d'avertir au membre que vous faites un live (Faire /systemlive).*")
            .addField("/sayadm", "*Permet de faire parler Flash.*")
            .setFooter("Flash | Touts droits réservés.")
          msg.edit(adm)  
        })
       
        system.on('collect', r => { 
          if (page === pages.length) return; 
          page++; 
          var system = new Discord.RichEmbed()
            .setTitle("🔰 Commandes systèmes")
            .addField("/systembienvenue", "*Permet d'activer le système de bienvenue sur votre serveur.*")
            .addField("/systemvraioufaux", "*Permet d'activer le système de vrai ou faux sur votre serveur.*")
            .addField("/systemquizz", "*Permet d'activer le système de quizz sur votre serveur.*")
            .addField("/systemwarn", "*Permet d'activer le système d'avertissement sur votre serveur.*")
            .addField("/system8ball", "*Permet d'activer le système de 8ball sur votre serveur.*")
            .addField("/systemlive", "*Permet d'activer le système de live sur votre serveur.*")
            .setFooter("Flash | Touts droits réservés.")
          msg.edit(system)  
})
          system.on('collect', r => { 
          if (page === 4) return; 
          page--; 
          var system = new Discord.RichEmbed()
            .setTitle("🔰 Commandes systèmes")
            .addField("/systembienvenue", "*Permet d'activer le système de bienvenue sur votre serveur.*")
            .addField("/systemvraioufaux", "*Permet d'activer le système de vrai ou faux sur votre serveur.*")
            .addField("/systemquizz", "*Permet d'activer le système de quizz sur votre serveur.*")
            .addField("/systemwarn", "*Permet d'activer le système d'avertissement sur votre serveur.*")
            .addField("/system8ball", "*Permet d'activer le système de 8ball sur votre serveur.*")
            .addField("/systemlive", "*Permet d'activer le système de live sur votre serveur.*")
            .setFooter("Flash | Touts droits réservés.")
          msg.edit(system)   
        })
       
        infoutile.on('collect', r => { 
          if (page === pages.length) return; 
          page++; 
          var infoutile = new Discord.RichEmbed()
            .setTitle("📋 Commandes Informations Utiles")
            .addField("/date", "*Permet de savoir la date d'aujourd'hui.*")
            .addField("/heure", "*Permet de savoir l'heure actuelle.*")
            .addField("/ping", "*Permet de voir le temps de latence entre Flash et le serveur.*")
            .addField("/ajouter", "*Permet d'obtenir le lien pour ajouter Flash sur votre serveur.*")
            .addField("/prefix", "*Permet de savoir le préfixe des commandes de Flash.*")
            .addField("/servlist", "*Permet d'avoir la liste de tout les serveurs où se trouve Flash.*")
            .addField("/myid", "*Permet de savoir son ID de compte discord.*")
            .addField("/enligne", "*Permet de savoir depuis combien de temps Flash est en ligne.*")
            .addField("/trello", "*Permet de suivre l'avancement de Flash via Trello.*")
            .setFooter("Flash | Touts droits réservés.")
          msg.edit(infoutile)  
})
          infoutile.on('collect', r => { 
          if (page === 5) return; 
          page--; 
          var infoutile = new Discord.RichEmbed()
            .setTitle("📋 Commandes Informations Utiles")
            .addField("/date", "*Permet de savoir la date d'aujourd'hui.*")
            .addField("/heure", "*Permet de savoir l'heure actuelle.*")
            .addField("/ping", "*Permet de voir le temps de latence entre Flash et le serveur.*")
            .addField("/ajouter", "*Permet d'obtenir le lien pour ajouter Flash sur votre serveur.*")
            .addField("/prefix", "*Permet de savoir le préfixe des commandes de Flash.*")
            .addField("/servlist", "*Permet d'avoir la liste de tout les serveurs où se trouve Flash.*")
            .addField("/myid", "*Permet de savoir son ID de compte discord.*")
            .addField("/enligne", "*Permet de savoir depuis combien de temps Flash est en ligne.*")
            .addField("/trello", "*Permet de suivre l'avancement de Flash via Trello.*")
            .setFooter("Flash | Touts droits réservés.")
          msg.edit(infoutile)   
        })
       
    utilitaire.on('collect', r => { 
          if (page === pages.length) return; 
          page++; 
          var utilitaire = new Discord.RichEmbed()
            .setTitle("🌍 Commandes utiles")
            .addField("/myavatar", "*Permet d'avoir le lien de son avatar sur Discord.*")
            .addField("/infodiscord", "*Permet d'avoir des informations sur le serveur où vous êtes.*")
            .addField("/infobot", "*Permet d'avoir des informations sur Flash*")
            .addField("/serveurdiscord", "*Permet d'avoir le lien du serveur officiel de Flash.*")
            .addField("/bienvenue", "*Permet de souhaiter la bienvenue.*")
            .addField("/infochannel", "*Permet d'avoir des informations sur le channel où vous avez effectué la commande.*")
            .addField("/idchannel", "*Permet d'avoir l'ID du channel où vous avez fait la commande.*")
            .addField("/8ball", "*Permet de poser des questions à Flash (il répond aléatoirement).*")
            .setFooter("Flash | Touts droits réservés.")
          msg.edit(utilitaire)  
})
           utilitaire.on('collect', r => { 
          if (page === 6) return; 
          page--; 
          var utilitaire = new Discord.RichEmbed()
            .setTitle("🌍 Commandes utiles")
            .addField("/myavatar", "*Permet d'avoir le lien de son avatar sur Discord.*")
            .addField("/infodiscord", "*Permet d'avoir des informations sur le serveur où vous êtes.*")
            .addField("/infobot", "*Permet d'avoir des informations sur Flash*")
            .addField("/serveurdiscord", "*Permet d'avoir le lien du serveur officiel de Flash.*")
            .addField("/bienvenue", "*Permet de souhaiter la bienvenue.*")
            .addField("/infochannel", "*Permet d'avoir des informations sur le channel où vous avez effectué la commande.*")
            .addField("/idchannel", "*Permet d'avoir l'ID du channel où vous avez fait la commande.*")
            .addField("/8ball", "*Permet de poser des questions à Flash (il répond aléatoirement).*")
            .setFooter("Flash | Touts droits réservés.")
          msg.edit(utilitaire)   
        })
       
    quizz.on('collect', r => { 
          if (page === pages.length) return; 
          page++; 
          var quizz = new Discord.RichEmbed()
            .setTitle("🌐 Commande Quizz")
            .addField("/lancementquizz", "*Permet de lancer un quizz (faire /systemquizz pour l'activer).*")
            .addField("/quizz", "*Permet de poser une question en rapport avec le quizz.*")
            .addField("/stopquizz", "*Permet de stopper totalement le quizz.*")
            .addField("/gagnantquizz", "*Permet de dire le gagnant du quizz.*")
            .setFooter("Flash | Touts droits réservés.")
          msg.edit(quizz)
})
quizz.on('collect', r => { 
          if (page === 7) return; 
          page--; 
          var quizz = new Discord.RichEmbed()
            .setTitle("🌐 Commande Quizz")
            .addField("/lancementquizz", "*Permet de lancer un quizz (faire /systemquizz pour l'activer).*")
            .addField("/quizz", "*Permet de poser une question en rapport avec le quizz.*")
            .addField("/stopquizz", "*Permet de stopper totalement le quizz.*")
            .addField("/gagnantquizz", "*Permet de dire le gagnant du quizz.*")
            .setFooter("Flash | Touts droits réservés.")
          msg.edit(quizz)   
        })

entreprise.on('collect', r => { 
          if (page === pages.length) return; 
          page++; 
          var entreprise = new Discord.RichEmbed()
            .setTitle("📂 RP - Commande entreprise")
            .addField("/create-entreprise", "*Permet de créer son entreprise.*")
            .addField("/recruter", "*Permet de recruter un employé dans votre entreprise.*")
            .addField("/money", "*Permet de voir le solde bancaire de votre entreprise.*")
            .addField("/infoentreprise", "*Permet d'avoir des informations sur votre entreprise.*")
            .addField("/commander", "*Permet de commander des ordinateurs dans votre entreprise.*")
            .addField("/recruter-administration", "*Permet de recruter des employés dans votre administration.*")
            .setFooter("Flash | Touts droits réservés.")
          msg.edit(entreprise)
})
entreprise.on('collect', r => { 
          if (page === 8) return; 
          page--; 
          var entreprise = new Discord.RichEmbed()
            .setTitle("📂 RP - Commande entreprise")
            .addField("/create-entreprise", "*Permet de créer son entreprise.*")
            .addField("/recruter", "*Permet de recruter un employé dans votre entreprise.*")
            .addField("/money", "*Permet de voir le solde bancaire de votre entreprise.*")
            .addField("/infoentreprise", "*Permet d'avoir des informations sur votre entreprise.*")
            .addField("/commander", "*Permet de commander des ordinateurs dans votre entreprise.*")
            .addField("/recruter-administration", "*Permet de recruter des employés dans votre administration.*")
          msg.edit(entreprise)   
        })
})})}
}
