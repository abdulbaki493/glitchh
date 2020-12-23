const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel
    .send(
      "Gif yükleniyor.. (eğer 5 saniye içinde gif gelmesse f!gif2 komudunu deneyiniz)"
    )
    .then(message => {
      var espriler = [
        "https://cdn.discordapp.com/avatars/433331479720886292/a_b66a2fe9303a9ff532acfdd37b6278fd.gif",
"https://cdn.discordapp.com/avatars/210454581660876802/a_ce34621acb512be67e9cdf2fbd61e15b.gif",
"https://cdn.discordapp.com/avatars/744601404831825973/a_5482554c9c2500831d0dd125ebf49d49.gif",
"https://cdn.discordapp.com/avatars/733924793987891270/a_9753aef85fdcc1fb513282e9d0b03a18.gif",
"https://cdn.discordapp.com/avatars/768547403070177351/a_1b6e6d82d38f1c5e217bdf89b1f01316.gif",
"https://cdn.discordapp.com/avatars/570326030758313986/a_d37b1608b141638c5d4868bdac692904.gif",
"https://cdn.discordapp.com/avatars/748954068663140503/a_0d5f93e8bc612d8301c7205bfe6596e2.gif",
"https://cdn.discordapp.com/avatars/744556606871568555/a_86f3e05564998fb34c21831965241fd8.gif",
"https://cdn.discordapp.com/avatars/750319201956265985/a_65f91f111b0ed72c4d0d539633357325.gif",
"https://cdn.discordapp.com/avatars/734857841768136806/a_30c32acdb78360da29ff83397f822383.gif",
"https://cdn.discordapp.com/avatars/789179667626197024/a_9a4e9dbf3f6b4cc66b52fbfb35b1ff5a.gif",
"https://cdn.discordapp.com/avatars/592072055994712081/a_92e3d329ea5dbcd6ebffeba5737281e3.gif",
"https://cdn.discordapp.com/avatars/611953202048270376/a_4d4ad9122dfa1c395bcdbbade0248e0c.gif",
"https://cdn.discordapp.com/avatars/791121584382672946/a_299cd31705c47117fedd96a0469a6b14.gif",
"https://cdn.discordapp.com/avatars/576117167209054239/a_1fb7d31a186434fc16731fc3964059b2.gif",
"https://cdn.discordapp.com/avatars/598267986922700800/a_4b44325a56c50b1bcb8751dc88387a20.gif",
"https://cdn.discordapp.com/avatars/407419226832371712/a_867f4dfef6f158ff3d1fd916cc33a55a.gif",
"https://cdn.discordapp.com/avatars/731197273228312596/a_780f392c2c09acd2245f5ff1f4d4f89e.gif",
"https://cdn.discordapp.com/avatars/712634078104387595/a_f9ac755b23e1479fce5344dbcb75449c.gif",
"https://cdn.discordapp.com/avatars/499954636904726529/a_770468db94208e065d27253af1b51a70.gif",
"https://cdn.discordapp.com/avatars/731448244114030642/a_574045ef573c05976d1a25cc253a0b12.gif",
"https://cdn.discordapp.com/avatars/567016794674561035/a_9385c447acea22d8ff2c603786a5548c.gif",
"https://cdn.discordapp.com/avatars/597147637799452672/a_d53ad5ca13325434599a878b9e62b675.gif",
"https://cdn.discordapp.com/avatars/753910058949148732/a_4358156930e1305500183671f61fef19.gif",
"https://cdn.discordapp.com/avatars/768419237487706122/a_c4ac7e302cf28c28c8d0fb54a3f092f1.gif",
"https://cdn.discordapp.com/avatars/733316689621680148/a_ce46422d8a95e93a3d13f9adbf960916.gif",
"https://cdn.discordapp.com/avatars/768576387496804394/a_4c56d75bbd7773a5a6b836690c931f77.gif",
"https://cdn.discordapp.com/avatars/406408636831760384/a_c44acefc5d4f1d5399667d73b268e8f0.gif",
"https://cdn.discordapp.com/avatars/754798896139600028/a_cd61d509886ef2705ba420c94deea860.gif",
"https://cdn.discordapp.com/avatars/764031486780375050/a_233164071876718d24df341a2ca6037d.gif",
        "https://cdn.discordapp.com/avatars/753746933838905425/a_8dc20ec5d07e50e3dadae9204b8483af.gif",
"https://cdn.discordapp.com/avatars/765271764430618645/a_93aff4aaa6edd738de3e3cca615d2215.gif",
"https://cdn.discordapp.com/avatars/349219504636821514/a_1b5caf099dede6ebce0eb0058a95e6db.gif",
"https://cdn.discordapp.com/avatars/490650678214131743/a_85070c6aab35b5f28429fcffa88e6968.gif",
"https://cdn.discordapp.com/avatars/698581257650700320/a_b2a0eab3ecd7475fee0d6ddf17699eff.gif",
"https://cdn.discordapp.com/avatars/722841023184896032/a_0edaf74f39bc3ba1b060623bed2a8d32.gif",
"https://cdn.discordapp.com/avatars/719368083025952769/a_2f9e00edc7aa94cc3184460af0d30a07.gif",
"https://cdn.discordapp.com/avatars/502161006596849684/a_fc9bb0ae3cfe57c7216b5d04c95a5246.gif",
"https://cdn.discordapp.com/avatars/559082803946323968/a_40c09c7972ca901f7024c00d67df9ecb.gif",
"https://cdn.discordapp.com/avatars/759803423523995688/a_199ae687e7ab40f5ca083e6a6818e0f8.gif",
"https://cdn.discordapp.com/avatars/620593308124839936/a_d0b53952c88f8f8e783bed26d505b586.gif",
"https://cdn.discordapp.com/avatars/754385366051455057/a_8e80d0660e0eed4a8de771ff2af36c5b.gif",
"https://cdn.discordapp.com/avatars/769975247726182400/a_1490ae277087cf55f0fcf2e42785ed25.gif",
"https://cdn.discordapp.com/avatars/585721986567634947/a_902c38b622f81e5889d563a084025c6f.gif",
"https://cdn.discordapp.com/avatars/782925346688860160/a_c1fbb2be1934aa4d5eb6a159eab262fd.gif",
"https://cdn.discordapp.com/avatars/690575239754547270/a_cc24789c5bac23cb2a8dea7e4a75363e.gif",
"https://cdn.discordapp.com/avatars/675708591683928077/a_0250a0204e785f96c63b540f141de3c8.gif",
"https://cdn.discordapp.com/avatars/786698850298494986/a_d1c107c635cbda35f1f60bb538723b8a.gif",
"https://cdn.discordapp.com/avatars/760114783990710282/a_be2d000217241b0a39ad84df8e629356.gif",
"https://cdn.discordapp.com/avatars/777893853520723978/a_9195a763b9b192fae33ede6624dafe79.gif"
      ];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
      message.edit(`${espri}`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gif"],
  permLevel: 0
};

exports.help = {
  name: "gif",
  description: "Rastgele gif",
  usage: "gif"
};
