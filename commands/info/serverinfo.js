const { MessageEmbed } = require("discord.js")

module.exports = {
        name: "serverinfo",
        description: "Menampilkan info server!",
        usage: " ",
        category: "info",
        accessableby: "everyone",
        aliases: ["sinfo"],
    run: async (client, message, args) => {
        let owner = [];
        await client.user.fetch(message.guild.ownerID).then(o => owner.push(o.tag))
        try {
            let embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Info Server")
                .setThumbnail(message.guild.iconURL())
                .setAuthor(`${message.guild.name} Info`, message.guild.iconURL())
                .addField("**Nama Guild**", `${message.guild.name}`, true)
                .addField("**Owner Guild**", `${owner}`, true)
                .addField("**ID**", `${message.guild.id}`)
                .addField("**Dibuat pada**", `${message.guild.createdAt}`)
                .addField("**Members**", `${message.guild.memberCount}`, true)
                .addField("**Roles**", `${message.guild.roles.cache.size}`, true)
            message.reply ({ embeds: [embed] })
        }
        catch {
            return message.channel.send('Ada yang salah!')
        }
    }
}
