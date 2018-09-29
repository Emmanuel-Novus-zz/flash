module.exports = class Sondage {
  static match(message) {
    const Discord = require('discord.js');
    const settings = require('../config.json')
    const prefix = settings.prefix
    return message.content.startsWith(prefix + 'sondage')
  }

  static action(message) {
    const Discord = require('discord.js');
    if (message.member.hasPermission("MANAGE_MESSAGES")){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription(':bar_chart: Sondage')
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor("0xD9E9E")
                .setTimestamp()
            message.channel.send(embed)
            .then(function (message){
                message.react("✅")
                message.react("❌")
            }).catch(function(){

            });
            message.delete()
        }else{
            return message.reply("Tu n'as pas la permission.")
        }
    }
}