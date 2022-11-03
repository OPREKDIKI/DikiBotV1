let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        if (!args[0]) return m.reply('Masukan Item Yang Mau Di Cheat !')
        conn.reply(m.chat, `*Succes !*`, m)
        global.db.data.users[m.sender].${args[0]} = Infinity
        
}
handler.help = ['cheat']
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
