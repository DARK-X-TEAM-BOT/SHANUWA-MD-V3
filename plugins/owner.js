const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "💁‍♂️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*



*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ꜱʜᴀɴᴜᴡᴀ ɪᴅ*
*⚡ɴᴜᴍʙᴇʀ* -: 94774609569*

*©ʙᴇꜱᴛ ᴡʜᴀᴛꜱᴀᴘʟ ʙᴏᴛ*
`
await conn.sendMessage(from,{image:{url: `https://bit.ly/3OoAnrr`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
