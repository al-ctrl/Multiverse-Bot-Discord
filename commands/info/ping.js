const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'ping',
    category : 'info',
    description : 'Menampilkan Ping',
    run : async(client, message, args) => {
        const msg = await message.channel.send(`š Mengitung...`)
        const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setDescription(`ā” Ping = ${client.ws.ping}ms!\nš Latensi = ${Math.floor(msg.createdAt - message.createdAt)}ms!`)
            await message.reply({ embeds: [embed] })
            msg.delete()
    }
}