module.exports = class GiveRole {
    static match(message) {
        const Discord = require('discord.js');
        const settings = require('../config.json')
        const prefix = settings.prefix
        return message.content.startsWith(prefix + 'removerole')
    }
    static action(message) {
        const Discord = require('discord.js');
        if (message.member.hasPermission("MANAGE_MESSAGES")){
        let args = message.content.split(" ");
        let thingToEcho = args.slice(2).join(" ")
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur")
        }
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Il te faut la permission pour pouvoir donner un rôle..")
        let member = message.mentions.members.first();
        if(!member) return message.channel.send('Veuillez mentionner un utilisateur(s).');
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas la permission de gérer les rôles.");
        let channels = message.guild.channels.array()
        member.removeRole(thingToEcho.replace("<@&","").replace(">",""))
        message.channel.send('Le rôle de ' + member.displayName + ' a bien été mis à jour :white_check_mark:')
        }
    }
}