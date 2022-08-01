/*module.exports = {
        name: "purge",
        aliases: ["delete", "clear", 'prune'],
        category: "moderation",
        description: "Menghapus pesan",
        usage: "delete [jumlah pesan]",
        accessableby: "Administrator",
    run: async (client, message, args) => {
        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply(`Kamu tidak mempunyai permission **ADMINISTRATOR** untuk menggunakan command!`)
        if (isNaN(args[0]))
            return message.channel.send('**Harap masukan jumlah pesan yang ingin di hapus!**');

        if (args[0] > 100)
            return message.channel.send("**Jumlah pesan yang bisa dihapus adalah dibawah 100!**");

        if (args[0] < 1)
            return message.channel.send("**Jumlah pesan yang bisa dihapus adalah dibawah 1!**");

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Berhasil menghapus \`${messages.size}/${args[0]}\` Pesab**`).then(msg => msg.delete({ timeout: 2000 }))).catch(() => null)
    }
}
*/