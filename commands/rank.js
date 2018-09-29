module.exports = class Rank {
    static match(message) {
        const Discord = require('discord.js');
        const settings = require('../config.json')
        const prefix = settings.prefix
        return message.content.startsWith(prefix + 'rank')
    }
    static action(message) {
        const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
        const adapter = new FileSync('db.json')
        const db = low(adapter)
        if(message.author.bot) return
        var msgauthor = message.author.id

            var msgauthor = message.author.id
            var servauthor = message.guild.id

    if (!db.get("xp").find({ user: msgauthor, serveur: servauthor }).value()) {
        db.get("xp").push({ user: msgauthor, serveur: servauthor, xp: 1, level: 1 }).write()
    } else {
        var userxpdb = db.get("xp").filter({ user: msgauthor, serveur: servauthor }).find('xp').value()
        var userxp = Object.values(userxpdb)

function lvl(lvlvar) {
let niveaufin = 0
if(lvlvar === 1) {niveaufin = 230}
if(lvlvar === 2) {niveaufin = 325}
if(lvlvar === 3) {niveaufin = 415}
if(lvlvar === 4) {niveaufin = 600}
if(lvlvar === 5) {niveaufin = 735}
return niveaufin
}

var lvlla = 0

if(userxp[2] > 230 && userxp[3] < 2) {message.reply("Tu est désormais passé au level 2"); var lvlla = 1}
if(userxp[2] > 325 && userxp[3] < 3) {message.reply("Tu est désormais passé au level 3"); var lvlla = 1}
if(userxp[2] > 415 && userxp[3] < 4) {message.reply("Tu est désormais passé au level 4"); var lvlla = 1}
if(userxp[2] > 600 && userxp[3] < 5) {message.reply("Tu est désormais passé au level 5"); var lvlla = 1}
if(userxp[2] > 735 && userxp[3] < 6) {message.reply("Tu est désormais passé au level 6"); var lvlla = 1}
        db.get("xp").find({ user: msgauthor, serveur: servauthor }).assign({ user: msgauthor, serveur: servauthor, xp: userxp[2] += 8, level: userxp[3]+lvl }).write()
        message.channel.send('Votre XP est actuellement de : ' + userxp[2] + '/' + lvl(userxp[3]) + ' XP')
    }
}
}