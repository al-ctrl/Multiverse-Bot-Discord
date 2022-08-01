const client = require("../index.js");
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');



/*const row1 = new MessageActionRow()                      // OPTIONAL 
  
.addComponents(
new MessageButton()
.setLabel("Instagram")
.setStyle("LINK")
.setURL(``)
.setEmoji(`<:igigig:981882307831017502>`)
)

.addComponents(
new MessageButton()
.setLabel("Youtube")
.setStyle("LINK")
.setURL(``)
.setEmoji(`<:ytytyt:981882958036209674>`)
);*/

client.on('guildMemberAdd', async (member) => {
  const guild = client.guilds.cache.get(''); // ID Server Guild

  const embed = new MessageEmbed()
    .setTitle(member.user.tag)
    .setImage('')
    .setDescription(`
    **[WELCOME TO ......](link server)**
    **heiyoo**
    Baca Rules dulu di : <#> 
    Ambil role di : <#>

    **Enjoy and have fun**
────────────────────
`)
    .setFooter(`Member sekarang : ${guild.memberCount}!`)
    .setTimestamp();

  await member.guild.channels.cache.get('').send({ //ID channel welcome 
    content: `Hallo ${member}`,
    embeds: [embed]/*,
    components: [row1]*/
  })
})