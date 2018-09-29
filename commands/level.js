module.exports = class Levels {
    static match(message) {
        const Discord = require('discord.js');
        const settings = require('../config.json')
        const prefix = settings.prefix
        return message.content.startsWith(prefix + 'levels')
    }
    static action(message) {
        const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
         const adapter = new FileSync('db.json')
        const db = low(adapter)
        if(message.author.bot) return
        var msgauthor = message.author.id

            var msgauthor = message.author.id

if (!db.get("xp").find({ user: msgauthor }).value()) {
        db.get("xp").push({ user: msgauthor, xp: 1, level: 1 }).write()
    } else {
        var userxpdb = db.get("xp").filter({ user: msgauthor }).find('xp').value()
        var userxp = Object.values(userxpdb)

function lvl(lvlvar) {
let niveaufin = 0
if(lvlvar === 1) {niveaufin = 230}
if(lvlvar === 2) {niveaufin = 430}
return niveaufin
}

var lvlla = 0

        db.get("xp").find({ user: msgauthor }).assign({ user: msgauthor, xp: userxp[1] += 8, level: userxp[2]+lvlla }).write()
        message.channel.send('Vous êtes actuellement au level : ' + userxp[2])
    }
}
}