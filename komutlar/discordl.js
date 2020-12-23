const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: "FastTeam original discord sunucusu",
    url: "https://discord.gg/AY8JweJjTh",
    description: "Tıkla",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['link'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu',
  description: 'sponsorları gösterir.',
  usage: 'sunucu'
};
