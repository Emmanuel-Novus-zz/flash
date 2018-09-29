module.exports = class ServList {
  static match(message) {
	const Discord = require('discord.js');
	const bot = new Discord.Client();
    const settings = require('../config.json')
    const token = settings.token
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'serverlist')
  }

  static action(message) {
  		const Discord = require('discord.js');
        const bot = new Discord.Client();
        message.channel.send(bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`));
}
}