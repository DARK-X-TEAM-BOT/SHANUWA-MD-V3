const {cmd , commands} = require('../command')

cmd({
    pattern: "shanuwa",
    desc: "wallpaper the bot",
    category: "main",
    react: "🎗️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮ 𝗦𝗛𝗔𝗡𝗨𝗪𝗔 𝗠𝗗 𝗪𝗔𝗟𝗟𝗣𝗘𝗣𝗔𝗥 ❯❯`
await conn.sendMessage(from,{image:{url: `https://bit.ly/3OoAnrr`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://bit.ly/3OoAnrr`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://bit.ly/3OoAnrr`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://bit.ly/3OoAnrr`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
