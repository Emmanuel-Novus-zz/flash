module.exports = class InfoEntreprise {
    static match(message) {
        const Discord = require('discord.js');
        const settings = require('../config.json')
        const prefix = settings.prefix
        return message.content.startsWith(prefix + 'infoentreprise')
    }
    static action(message) {
        const Discord = require('discord.js');
        const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
        const adapter = new FileSync('db.json')
        const db = low(adapter)

        var msgauthor = message.author.id
        var servauthor = message.guild.id

        // MONEY
        if (!db.get("money").find({ user: msgauthor, serveur: servauthor }).value()) return
        var usermoneydb = db.get("money").filter({ user: msgauthor, serveur: servauthor  }).find('money').value()
        var usermoney = Object.values(usermoneydb)
        // PC
        if (!db.get("pc").find({ user: msgauthor, serveur: servauthor }).value()) 
              db.get("pc").push({ user: msgauthor, serveur: servauthor,  pc: 1 }).write()
        var userpcdb = db.get("pc").filter({ user: msgauthor, serveur: servauthor,  }).find('pc').value()
        var userpc = Object.values(userpcdb)
        // Employés normaux
        if (!db.get("employes").find({ user: msgauthor, serveur: servauthor }).value()) 
              db.get("employes").push({ user: msgauthor, serveur: servauthor,  employes: 1 }).write()
        var useremployesdb = db.get("employes").filter({ user: msgauthor, serveur: servauthor,  }).find('employes').value()
        var useremployes = Object.values(useremployesdb)
        // Employés administratifs
        if (!db.get("employesadministration").find({ user: msgauthor, serveur: servauthor }).value()) 
              db.get("employesadministration").push({ user: msgauthor, serveur: servauthor,  employesadministration: 1 }).write()
        var useremployesadministrationdb = db.get("employesadministration").filter({ user: msgauthor, serveur: servauthor,  }).find('employesadministration').value()
        var useremployesadministration = Object.values(useremployesadministrationdb)

        const info = new Discord.RichEmbed()
                .setTitle("🌐 Informations sur l'entreprise de " + message.author.username)
                .addField("💳 Argent actuel : ", usermoney[2] + '€')
                .addField("📌 Créateur de l'entreprise : ", message.author.username)
                .addField("📎 Statut de certification de l'entreprise : ", "Non certifié :x:")
                .addField("💻 Nombre d'ordinateur dans l'entreprise : ", userpc[2] - 1)
                .addField("👤 Nombre d'employés dans l'entreprise : ", useremployes[2] - 1)
                .addField("👥 Nombre d'employés administratifs dans l'entreprise : ", useremployesadministration[2] - 1)
                .setFooter("Flash | Touts droits réservés.")
                .setColor("0xF67B00")
            message.channel.send(info)
        }
}