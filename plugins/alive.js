const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "💁‍♂️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    alive: 'media/AUD-20240909-WA0003'
                    }
let des = `*💁‍♂️❣️ආයුබෝවන් ${pushname}*

*╔╭────────────╮╕*
*╭│I'm Alive Now👾  │─◎◎▷*
*╘╰────────────╯╜*

*SHANUW MD V4 ලගදිම එනවා 😚💗*

*WHATSAPP CHANNEL LINK 👇👇*

https://whatsapp.com/channel/0029ValzLhUBqbrFa8tMPg3U

*YOU TUBE CHANNEL LINK 👇👇*

https://www.youtube.com/@shanuwatech

*BOT REPO 👇👇*

COMING SOON...😚💗

©ʙᴇꜱᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
return await conn.sendMessage(from,{image: {url: `https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
