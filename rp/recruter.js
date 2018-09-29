module.exports = class Recruter {
    static match(message) {
        const Discord = require('discord.js');
        const settings = require('../config.json')
        const prefix = settings.prefix
        return message.content.startsWith(prefix + 'recruter')
    }
    static action(message) {
        const Discord = require('discord.js');
        const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
        const adapter = new FileSync('db.json')
        const db = low(adapter)
        db.defaults({xp:[], money:[],pc: [], employes: []}).write()
        var msgauthor = message.author.id
        var servauthor = message.guild.id

         if (!db.get("employes").find({ user: msgauthor, serveur: servauthor }).value()) 
              db.get("employes").push({ user: msgauthor, serveur: servauthor,  employes: 1 }).write()
        var useremployesdb = db.get("employes").filter({ user: msgauthor, serveur: servauthor,  }).find('employes').value()
        var useremployes = Object.values(useremployesdb)
        db.get("employes").find({ user: msgauthor, serveur: servauthor }).assign({ user: msgauthor, serveur: servauthor, employes: useremployes[2] + 1 }).write()    
        let recruter = new Discord.RichEmbed()
                .setTitle("✅ Nouveau employé dans l'entreprise de " + message.author.username)
                .setDescription("Un nouveau employé viens de rejoindre l'entreprise.")
                .setFooter("Flash| Touts droits réservés.")
        message.channel.send(recruter)
    }
}