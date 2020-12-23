const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "FastBot",
              icon_url: "https://i.hizliresim.com/TTGktf.jpg"
            },
			    "thumbnail": {
				 "url": "https://i.hizliresim.com/TTGktf.jpg"
			},
            title: "FastBot v0.2.8",
            url: "https://www.google.com/url?q=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D777491135852707840%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscord.gg%252FbHCFw7v5Bd%26scope%3Dbot&sa=D&sntz=1&usg=AFQjCNGK55JN-Kw5H6_ro9t2O2bO4oh6Bg",
            description: "FastBot komutları",
            fields: [
				{
                name: "Gif komutları",
				inline: true,
                value: "**f!gif - Rastgele gif atar**\n**f!gif2 f!gif3 - botun pingini azaltmak için**\n**f!sürüm - güncel sürümü gösterir**\n**f!yapımcım - botun kurcucusunu gösterir**\n**f!Davet - botun davet linki**\n**f!site - Fast Team sitesini gösterir**\n**f!sunucu - Fast Team original discord sunucusu**\n**f!istatistik - bot gelişimi**\n"
              },
              {
                name: "Güncel Sürüm",
                value: "v0.2.8"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "https://i.hizliresim.com/TTGktf.jpg",
              text: "FastBot 2020 0.2.8"
            }
          }
        });  
	    message.react("👍")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y', 'yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardim',
  description: 'Tüm komutları gösterir.',
  usage: 'yardim [komut]'
};
