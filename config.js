const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ CLASSICCLOWN²²¹-ᴍᴅ" 


global.devs = "2348163243259" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347081605014";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347081605014";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_00_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcwLFxuICAgICAgICA3LFxuICAgICAgICA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICA1MCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDcwLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDcwLFxuICAgICAgICA4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMixcbiAgICAgICAgMTkxLFxuICAgICAgICA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NixcbiAgICAgICAgMjU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxODksXG4gICAgICAgIDkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MixcbiAgICAgICAgODYsXG4gICAgICAgIDczLFxuICAgICAgICAxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkyLFxuIAgICAgICA4NixcbiAgICAgICAgODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQzLFxuICAgICAgICA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieXJiZC9OKzd3dFBrTHJkOE40bTNvODVpVk03M2RTRjVlRzJRcmcxZ2Uzdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiREFENjdoeGtRRkdPR3FibGl2MlNkd1wiLFxuICBcInBob25lSWRcIjogXCJjMjA2NzA3MS02ZTliLTQ3ZWUtYjJiMS01MGM3ZjQ3MzJjMWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMjI5LFxuICAgICAgNTUsXG4gICAgICA1NCxcbiAgICAgIDI0MyxcbiAgICAgIDIwNixcbiAgICAgIDkxLFxuICAgICAgMjAwLFxuICAgICAgMTEyLFxuICAgICAgMjMzLFxuICAgICAgMTg4LFxuICAgICAgMjksXG4gICAgICAyMDgsXG4gICAgICA3MCxcbiAgICAgIDI0MSxcbiAgICAgIDIyNyxcbiAgICAgIDI1LFxuICAgICAgMTcyLFxuICAgICAgMTk2LFxuICAgICAgMjAyXG4gICAgXVxuICB9LFuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICA1NyxcbiAgICAgIDkyLFxuICAgICAgMjE3LFxuICAgICAgMzMsXG4gICAgICAyMDQsXG4gICAgICAyMTQsXG4gICAgICAyMjUsXG4gICAgICAyNyxcbiAgICAgIDIxMSxcbiAgICAgIDIwMSxcbiAgICAgIDIxNixcbiAgICAgIDI1NCxcbiAgICAgIDExLFxuICAgICAgOTIsXG4gICAgICAxMjEsXG4gICAgICAxNDQsXG4gICAgICA2NyxcbiAgICAgIDE1MixcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmlidjNzUTJzdkpzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6WDhCMXpnNmpMN1lLc2I1Y1J2ZVNNaDRPUUNQQW45K0k4UXZVd1prZkFZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVxUC9VeHhuRnVkWkIzNUtpL0N0MzI2bjkrWXprTGZzSjZYb1N1bkQvWVVabERSeGVDWHBRbDlLN2w4VUtERXZGSFkrNE5XWVNpOXRHY1BNZ2tBOERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpRRnM0VCtOV2NheGdOOG1haS9NY0JKWkh6VkF4ek9hL3QrV2xuRGFETWdvNDloeCt0VWxMSnlzL01XYWJZNjc0V3FaemV2TlhVbDEyK0V3TWR3d0JRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4MTYwNTAxNDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNsYXNzaWNjbG93biBncHRcIixcbiAgICBcImxpZFwiOiBcIjEwNDg5NjI3MTQ5NTE5OToxNUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODE2MDUwMTQ6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODc3MzIxNVxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "powered by ogundun moyin" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "classic",
  packname: process.env.PACK_NAME || "clown",
  botname : process.env.BOT_NAME  || "CLASSICCLOWN BOT",
  ownername:process.env.OWNER_NAME|| "OGUNDUN MOYIN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
