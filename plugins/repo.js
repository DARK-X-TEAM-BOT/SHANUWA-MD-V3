const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*📍REPO LINK ❤️‍🔥👇*

🧚‍♀️◦දෙන්නෑ 😏🫴

*📍PLEASE SUBSCRIBE MY YOUTUBE CHANNEL ❤️‍🔥👇*

🧚‍♀️◦ Coming soon...

*📍PLEASE FOLLOW MY WHATSAPP CHANNEL❤️‍🔥👇*

🧚‍♀️◦ Coming soon...

*©🐼❤️‍🔥ッ*

`
await conn.sendMessage(from,{image:{url: `https://bit.ly/3OoAnrr`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
