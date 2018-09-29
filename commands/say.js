module.exports = class Say {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'say')
  }

  static action(message) {
    const Discord = require('discord.js');
            if (message.member.hasPermission("MANAGE_MESSAGES")){

            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            const say = new Discord.RichEmbed()
                .setTitle(message.author.username +  " a dit:")
                .setDescription(thingToEcho)
                .setColor("0xff0000")
            message.channel.send(say)
    }
  }
}