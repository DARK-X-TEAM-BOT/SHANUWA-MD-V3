const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "about",

    desc: "To get the bot informations.",

    react: "ℹ️",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋HELLO BROTHER   ${pushname}*
                    
 𝙄𝙈 𝙎𝙃𝘼𝙉𝙐𝙒𝘼 𝙈𝘿 𝘽𝙀𝙎𝙏 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝘽𝙊𝙏
 
❐ ᴏᴡɴᴇʀ : ꜱʜᴀɴᴜᴡᴀ ɪᴅ
❐ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : 94774609569
❐ʙᴏᴛ ʀᴇᴘᴏ : ෆක්
           
© ʙᴇꜱᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ 


return await conn.sendMessage(from,{image: {url:https://i.ibb.co/THZ7HJX/IMG-20240913-WA0042.jpg`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})




