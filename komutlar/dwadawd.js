const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel
    .send(
      "Güncel Sürüm..."
    )
    .then(message => {
      var espriler = [
        "0.2.8"
      ];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
      message.edit(`${espri}`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sürüm"],
  permLevel: 0
};

exports.help = {
  name: "sürüm",
  description: "Rastgele gif",
  usage: "sürüm"
};
