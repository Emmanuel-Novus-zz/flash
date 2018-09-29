const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const settings = require('./config.json')
let prefix = settings.prefix

// Commandes //
const help = require('./commands/help.js');
const clear = require('./commands/clear.js');
const ping = require('./commands/ping.js');
const heure = require('./commands/heure.js');
const date = require('./commands/date.js');
const myavatar = require('./commands/myavatar.js');
const infodiscord = require('./commands/infodiscord.js');
const maj = require('./commands/maj.js');
const lancerredem = require('./commands/lancer-redem.js');
const stopredem = require('./commands/stop-redem.js');
const bienvenue = require('./commands/bienvenue.js');
const ajouter = require('./commands/ajouter.js');
const prefixe = require('./commands/prefix.js');
const say = require('./commands/say.js');
const sondage = require('./commands/sondage.js');
const alerte = require('./commands/alerte.js');
const wdlivraison = require('./commands/wd-livraison.js');
const serveurdiscord = require('./commands/serveurdiscord.js');
const remerciment = require('./commands/remerciment');
const ban = require('./commands/ban.js');
const kick = require('./commands/kick.js');
const mute = require('./commands/mute.js');
const warn = require('./commands/warn.js');
const msgglobal = require('./commands/msg-global.js');
const annoncedev = require('./commands/annonce-dev.js');
const myid = require('./commands/myid.js');
const channelid = require('./commands/channelid.js');
const infochannel = require('./commands/infochannel.js');
const vraioufaux = require('./commands/vraioufaux.js');
const logson = require('./commands/logs-on.js');
const lancementquizz = require('./commands/lancementquizz.js');
const quizz = require('./commands/quizz.js');
const stopquizz = require('./commands/stopquizz.js');
const gagnantquizz = require('./commands/gagnantquizz.js');
const huitball = require('./commands/8ball.js');
const unwarn = require('./commands/unwarn.js');
const trello = require('./commands/trello.js');
const sayadm = require('./commands/sayadm.js');
const systemlive = require('./commands/systemlive.js');
const live = require('./commands/live.js');
const giverole = require('./commands/give-role.js');
const newrole = require('./commands/newrole.js');
const removerole = require('./commands/removerole.js');
const rank = require('./commands/rank.js');
const tableau = require('./commands/tableau.js');
const level = require('./commands/level.js');

// Intéliggence artificielle (IA)
const iaheure = require('./ia/ia-heure.js');
const iadate = require('./ia/ia-date.js');
const iaid = require('./ia/ia-id.js');

// Systèmes : commandes //
const systembienvenue = require('./commands/systembienvenue.js');
const systemvraioufaux = require('./commands/systemvraioufaux.js');
const systemquizz = require('./commands/systemquizz.js');
const systemwarn = require('./commands/systemwarn.js');
const system8ball = require('./commands/system8ball.js');

client.login(TOKEN);                                             

db.defaults({xp:[], money:[],pc: [], employes: [], employesadministration:[]}).write()

client.on('ready', function () {
    console.log(`${client.user.username}  starting...`);
    console.log(`Serving ${client.guilds.size} guilds.`);
    console.log(`${client.users.size} users`);
    console.log('Développé par Emmanuel - Touts droits réservés.')

     client.user.setActivity("/help", {
        type: "STREAMING",
        url: "http://twitch.tv/client"
      });
    }, 8000);
   setTimeout(function() {
      setInterval(function() {
        client.user.setActivity(
          `/help | ${client.guilds.size} servers `,
          { type: "STREAMING", url: "http://twitch.tv/client" }
        );
      }, 8000);
    }, 8000);

// Commandes //
client.on('message', function (message) {
    if (ping.match(message)) {
    return ping.action(message)
  }
    if (help.match(message)) {
      return help.action(message)
    }
    if (clear.match(message)) {
      return clear.action(message)
    }
    if (heure.match(message)) {
      return heure.action(message)
    }
    if (date.match(message)) {
      return date.action(message)
    }
    if (myavatar.match(message)) {
      return myavatar.action(message)
    }
    if (infodiscord.match(message)) {
      return infodiscord.action(message)
    }
    if (maj.match(message)) {
      return maj.action(message)
    }
    if (bienvenue.match(message)) {
      message.delete()
      return bienvenue.action(message)
    }
    if (systembienvenue.match(message)) {
      return systembienvenue.action(message)
    }
    if (ajouter.match(message)) {
      return ajouter.action(message)
    }
    if (prefixe.match(message)) {
      return prefixe.action(message)
    }
    if (wdlivraison.match(message)) {
      message.delete()
      return wdlivraison.action(message)
    }
    if (serveurdiscord.match(message)) {
      return serveurdiscord.action(message)
    }
    if (remerciment.match(message)) {
      return remerciment.action(message)
    }
    if (ban.match(message)) {
      return ban.action(message)
    }
    if (kick.match(message)) {
      return kick.action(message)
    }
    if (mute.match(message)) {
      return mute.action(message)
    }
    if (warn.match(message)) {
      return warn.action(message)
    }
    if (msgglobal.match(message)) {
      return msgglobal.action(message)
    }
    if (annoncedev.match(message)) {
      return annoncedev.action(message)
    }
    if (myid.match(message)) {
      return myid.action(message)
    }
    if (channelid.match(message)) {
      return channelid.action(message)
    }
    if (infochannel.match(message)) {
      return infochannel.action(message)
    }
    if (systemvraioufaux.match(message)) {
      return systemvraioufaux.action(message)
    }
    if (vraioufaux.match(message)) {
      message.delete()
      return vraioufaux.action(message)
    }
    if (logson.match(message)) {
      message.delete()
      return logson.action(message)
    }
    if (systemquizz.match(message)) {
      message.delete()
      return systemquizz.action(message)
    }
    if (lancementquizz.match(message)) {
      message.delete()
      return lancementquizz.action(message)
    }
    if (quizz.match(message)) {
      message.delete()
      return quizz.action(message)
    }
    if (stopquizz.match(message)) {
      message.delete()
      return stopquizz.action(message)
    }
    if (gagnantquizz.match(message)) {
      message.delete()
      return gagnantquizz.action(message)
    }
    if (huitball.match(message)) {
      return huitball.action(message)
    }
    if (unwarn.match(message)) {
      return unwarn.action(message)
    }
    if (systemwarn.match(message)) {
      return systemwarn.action(message)
    }
    if (system8ball.match(message)) {
      return system8ball.action(message)
    }
    if (trello.match(message)) {
      return trello.action(message)
    }
    if (sayadm.match(message)) {
      return sayadm.action(message)
    }
    if (systemlive.match(message)) {
      return systemlive.action(message)
    }
    if (live.match(message)) {
      return live.action(message)
    }
    if (giverole.match(message)) {
      return giverole.action(message)
    }
    if (newrole.match(message)) {
      return newrole.action(message)
    }
    if (removerole.match(message)) {
      return removerole.action(message)
    }
    if (rank.match(message)) {
      return rank.action(message)
    }
    if (tableau.match(message)) {
      return tableau.action(message)
    }
    if (level.match(message)) {
      return level.action(message)
    }
})

// Redémarrage
client.on('message', function (message) {
if (lancerredem.match(message)) {
        message.delete()
      return lancerredem.action(message)
    }
    if (stopredem.match(message)) {
      message.delete()
      return stopredem.action(message)
    }
    if (alerte.match(message)) {
      message.delete()
      return alerte.action(message)
    }
 })

// Souhaite la bienvenue à un membre qui rejoint un serveur.
client.on("guildMemberAdd", member => {
   const bvn = member.guild.channels.find(m => m.name === "bienvenue-welcome");
    if (!bvn) return;
    const embed = new Discord.RichEmbed()
      .setColor('#009114')
      .setTitle("Welcome / Bienvenue")
      .addField("Un nouvel utilisateur vient d'arriver", `Il s'agit de [${member.user.tag}](https://discordapp.com/)`, true)
      .setFooter("Flash | Touts droits réservés.")
      .setTimestamp()
bvn.send({embed})
})

client.on("guildMemberRemove", member => {
    const logs = member.guild.channels.find(m => m.name === "bienvenue-welcome");
    if (!logs) return;
const embed = new Discord.RichEmbed()
.setColor('#FE6F01')
.setAuthor(member.user.tag, member.user.avatarURL)
.setTitle("Un utilisateur nous a quitté")
.addField("Il s'agit de", `[${member.user.tag}](https://discordapp.com/)`, true)
.addField(`Nombre de membres après le départ de __${member.user.tag}__`, member.guild.memberCount)
.setFooter(`ID : ${member.user.id} | Flash`)
.setTimestamp()
logs.send({embed})
});

// Commandes spéciales
client.on('message', message => {
    if (say.match(message)) {
      message.delete()
      return say.action(message)
    }
    if (sondage.match(message)) {
      return sondage.action(message)
    }
  })

// Commande servlist
client.on('message', message => {
    if (message.content === prefix + "servlist") {
        message.channel.send(client.guilds.map(r => r.name + ` | **${r.memberCount}** membres`));
    }
});

// Intéliggence artificielle (IA)
client.on('message', message => {
  if (iaheure.match(message)) {
    return iaheure.action(message)
  }
  if (iadate.match(message)) {
    return iadate.action(message)
  }
  if (iaid.match(message)) {
    return iaid.action(message)
  }
})

// Commande EnLigne
client.on('message', message => {
  if (message.content === prefix + 'enligne'){;
      const sicon = client.user.displayAvatarURL
      var enligne = new Discord.RichEmbed()

              .setTitle("Informations sur le temps en ligne de Flash :")
              .addField("En ligne depuis:" , (Math.round(client.uptime / (1000 * 60 * 60))) + ' heures  ' + (Math.round(client.uptime / (1000 * 60)) % 60) + ' minutes ' + (Math.round(client.uptime / 1000) % 60) + ' secondes')
              .setColor("#389aea")
              .setFooter("Flash | Touts droits réserves")
              message.channel.send(enligne).catch(async(err) => {console.log(err)});
      }
    })

client.on('message', message => {

    var msgauthor = message.author.id
    var servauthor = message.guild.id

    if(message.author.bot) return
    if (!db.get("xp").find({ user: msgauthor, serveur: servauthor }).value()) {
        db.get("xp").push({ user: msgauthor, serveur: servauthor, xp: 1, level: 1 }).write()
        var userxpdb = db.get("xp").filter({ user: msgauthor, serveur: servauthor }).find('xp').value()
        var userxp = Object.values(userxpdb)
var lvl = 0

if(userxp[2] > 230 && userxp[3] < 2) {message.channel.send("Tu est désormais passé au level 2"); var lvl = 1}
if(userxp[2] > 325 && userxp[3] < 3) {message.channel.send("Tu est désormais passé au level 3"); var lvl = 1}
if(userxp[2] > 415 && userxp[3] < 4) {message.reply("Tu est désormais passé au level 4"); var lvl = 1}
if(userxp[2] > 600 && userxp[3] < 5) {message.reply("Tu est désormais passé au level 5"); var lvl = 1}
if(userxp[2] > 735 && userxp[3] < 6) {message.reply("Tu est désormais passé au level 6"); var lvl = 1}
        db.get("xp").find({ user: msgauthor, serveur: servauthor }).assign({ user: msgauthor, serveur: servauthor, xp: userxp[2] += 8, level: userxp[3]+lvl }).write()

     
    }
} )

// Système RP
const createentreprise = require('./rp/create-entreprise.js');
const money = require('./rp/money.js');
const infoentreprise = require('./rp/infoentreprise.js');

client.on('message', function (message) {
  if (createentreprise.match(message)) {
    return createentreprise.action(message)
  }
  if (money.match(message)) {
    return money.action(message)
  }
  if (infoentreprise.match(message)) {
    return infoentreprise.action(message)
  }

})

client.on('message', message => {

    var msgauthor = message.author.id
    var servauthor = message.guild.id

 if (!db.get("money").find({ user: msgauthor, serveur: servauthor }).value()) {
        db.get("money").push({ user: msgauthor, serveur: servauthor,  money: 100 }).write()
      } else {
        var usermoneydb = db.get("money").filter({ user: msgauthor, serveur: servauthor,  }).find('money').value()
        var usermoney = Object.values(usermoneydb)
        db.get("money").find({ user: msgauthor, serveur: servauthor }).assign({ user: msgauthor, serveur: servauthor, money: usermoney[2] += 1 }).write()    
    }
} )

client.on('message', message => {

    var msgauthor = message.author.id
    var servauthor = message.guild.id

 if (!db.get("money").find({ user: msgauthor, serveur: servauthor }).value()) {
        db.get("money").push({ user: msgauthor, serveur: servauthor,  money: 100 }).write()
      } else {
        var usermoneydb = db.get("money").filter({ user: msgauthor, serveur: servauthor,  }).find('money').value()
        var usermoney = Object.values(usermoneydb)
        db.get("money").find({ user: msgauthor, serveur: servauthor }).assign({ user: msgauthor, serveur: servauthor, money: usermoney[2] += 1 }).write()    
    }
} )

client.on('message', message => {
if (message.content == prefix + 'commander') {

    var msgauthor = message.author.id
    var servauthor = message.guild.id

 if (!db.get("pc").find({ user: msgauthor, serveur: servauthor }).value()) {
  db.get("pc").push({ user: msgauthor, serveur: servauthor,  pc: 1 }).write()
      } else {
        var userpcdb = db.get("pc").filter({ user: msgauthor, serveur: servauthor,  }).find('pc').value()
        var userpc = Object.values(userpcdb)
        db.get("pc").find({ user: msgauthor, serveur: servauthor }).assign({ user: msgauthor, serveur: servauthor, pc: userpc[2] += 1 }).write()    
        const succes = new Discord.RichEmbed()
            .setTitle("📌 Commande effectué")
            .setDescription("Vous venez de commander 1 ordinateur pour votre société.")
            .setFooter("Flash | Touts droits réservés.")
            .setColor("0xF67B00")
            message.channel.send(succes)
} 
}
})

client.on('message', message => {
if (message.content == prefix + 'recruter') {

    var msgauthor = message.author.id
    var servauthor = message.guild.id

 if (!db.get("employes").find({ user: msgauthor, serveur: servauthor }).value()) {
  db.get("employes").push({ user: msgauthor, serveur: servauthor,  employes: 1 }).write()
      } else {
        var useremployesdb = db.get("employes").filter({ user: msgauthor, serveur: servauthor,  }).find('employes').value()
        var useremployes = Object.values(useremployesdb)
        db.get("employes").find({ user: msgauthor, serveur: servauthor }).assign({ user: msgauthor, serveur: servauthor, employes: useremployes[2] += 1 }).write()    
        const recruter = new Discord.RichEmbed()
                .setTitle("✅ Nouveau employé dans l'entreprise de " + message.author.username)
                .setDescription("Un nouveau employé viens de rejoindre l'entreprise.")
                .setFooter("Flash| Touts droits réservés.")
        message.channel.send(recruter)
} 
}
})

client.on('message', message => {
if (message.content == prefix + 'recruter-administration') {

    var msgauthor = message.author.id
    var servauthor = message.guild.id

 if (!db.get("employesadministration").find({ user: msgauthor, serveur: servauthor }).value()) {
  db.get("employesadministration").push({ user: msgauthor, serveur: servauthor,  employesadministration: 1 }).write()
      } else {
        var useremployesadministrationdb = db.get("employesadministration").filter({ user: msgauthor, serveur: servauthor,  }).find('employesadministration').value()
        var useremployesadministration = Object.values(useremployesadministrationdb)
        db.get("employesadministration").find({ user: msgauthor, serveur: servauthor }).assign({ user: msgauthor, serveur: servauthor, employesadministration: useremployesadministration[2] += 1 }).write()    
        const recruter = new Discord.RichEmbed()
                .setTitle("✅ Nouveau employé dans l'entreprise de " + message.author.username)
                .setDescription("Un nouveau employé est arrivé dans l'administration de l'entreprise.")
                .setFooter("Flash| Touts droits réservés.")
        message.channel.send(recruter)
} 
}
})

// Espace formation - code

const codestream = require('./code/stream.js');

client.on('message', message => {
  if (codestream.match(message)) {
    return codestream.action(message)
  }
})

