const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
          color: 0xD97634,
		  description: "https://FastTeamDc.tr.gg\n Yedek link: https://FastTeam.sitesi.tv"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['site'],
  permLevel: 0
};

exports.help = {
  name: 'site',
  description: 'kedileri gösterir.',
  usage: 'site'
};
