const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
          color: 0xD97634,
		  description: "Bot gelişimi: \n https://discord.gg/EKcmQKPmJ4 "
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'kedileri gösterir.',
  usage: 'istatistik'
};
