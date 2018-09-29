module.exports = class GivePoints {
	static match(message) {
		const Discord = require('discord.js');
		const settings = require('../config.json')
		const prefix = settings.prefix
		return message.content.startsWith(prefix + 'givepoints')
	}
	static action(message) {
		const Discord = require('discord.js');
		
	}
}