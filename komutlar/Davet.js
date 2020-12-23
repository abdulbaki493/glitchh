const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel
    .send(
      "Davet Linki"
    )
    .then(message => {
      var espriler = [
        "https://www.google.com/url?q=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D777491135852707840%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscord.gg%252FbHCFw7v5Bd%26scope%3Dbot&sa=D&sntz=1&usg=AFQjCNGK55JN-Kw5H6_ro9t2O2bO4oh6Bg"
      ];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
      message.edit(`${espri}`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Rastgele gif",
  usage: "davet"
};
