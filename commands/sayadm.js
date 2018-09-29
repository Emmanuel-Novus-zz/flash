module.exports = class SayADM {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'sayadm')
  }

  static action(message) {
    const Discord = require('discord.js');
            if (message.member.hasPermission("MANAGE_MESSAGES")){

            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            message.channel.send(thingToEcho)
    }
  }
}