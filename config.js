const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "your session id",
ALIVE_IMG: process.env.ALIVE_IMG || "https://bit.ly/3OoAnrr",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖Hello im alive now",
SUDO_NB: process.env.SUDO_NB || "94774609569",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

