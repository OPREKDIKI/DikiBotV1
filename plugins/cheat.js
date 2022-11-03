let handler = async (m, { conn, args }) => {
   if (!args[0]) return m.reply('Masukan Item Yang Mau Di Cheat !')
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        global.db.data.users[m.sender].${args[0]} = 10000000000
}
handler.command = /^(cheat)$/i
handler.tags = ['owner,premium']
handler.command = /^(cheat)$/i
handler.owner = false
handler.mods = true
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler
