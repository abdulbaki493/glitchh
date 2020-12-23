const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**Bot Sunucuya Eklendi',
  '**FastBot** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Bot Deneme aşamasındadır'
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame('f!yardım');
})
