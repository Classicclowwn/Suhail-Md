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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_35_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2LFxuICAgICAgICA1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc3LFxuICAgICAgICA4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgyLFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDYxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICA3NyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5LFxuICAgICAgICA5MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICA3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDYxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxVXB3aDNEYVFGQlhiMXV4WS9BUzNwa2FRbjh3M0tHNmZuSlBPRy9NUk80PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzd21LRVhEMlM2bXZCXzZ2OW5oR05BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU3NDY1MjU2LTQ4YTktNDE3MC04MjBkLTYwMTBjYzM0MWIzNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAyMjUsXG4gICAgICA1OCxcbiAgICAgIDg1LFxuICAgICAgMTcsXG4gICAgICAyMixcbiAgICAgIDExMyxcbiAgICAgIDEzOSxcbiAgICAgIDE5MSxcbiAgICAgIDIxNyxcbiAgICAgIDEyNixcbiAgICAgIDE5MyxcbiAgICAgIDIxMixcbiAgICAgIDE1MyxcbiAgICAgIDIzNixcbiAgICAgIDg4LFxuICAgICAgMTM1LFxuICAgICAgMjE0LFxuICAgICAgNzgsXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDc3LFxuICAgICAgNTksXG4gICAgICAxMTgsXG4gICAgICA2OSxcbiAgICAgIDY5LFxuICAgICAgMTIzLFxuICAgICAgMjQ2LFxuICAgICAgNSxcbiAgICAgIDE5NyxcbiAgICAgIDgyLFxuICAgICAgNzcsXG4gICAgICAyMDksXG4gICAgICAxNjIsXG4gICAgICA0NixcbiAgICAgIDE4MixcbiAgICAgIDE3NixcbiAgICAgIDEyNyxcbiAgICAgIDIwMCxcbiAgICAgIDIwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05tYnYzc1EvZHZKc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwielg4QjF6ZzZqTDdZS3NiNWNSdmVTTWg0T1FDUEFuOStJOFF2VXdaa2ZBWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhN3J5eDI0NGg5ZkFrVlB0ZVpPRVZHSEdxMGJEUnJJT1lCSXRaMEFncU0xRVNMWnhDOEVJTjRRV0E2K1VLYXE2Y2NDelNOYk00SmIxQkVYWlZLeFRBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrUnpCZGJDbFBNeEJROStVcHM5d1ZhRlRsSk1DVmRZemVHdmpSYlRqZWQxQStnUnp2cHhaQVdHSkxTU09DYnRCODVXYWJLaHB3RFlBcDRsbGlGODBEUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODE2MDUwMTQ6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDbGFzc2ljY2xvd24gZ3B0XCIsXG4gICAgXCJsaWRcIjogXCIxMDQ4OTYyNzE0OTUxOTk6MTdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDgxNjA1MDE0OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3NzUyOTdcbn0iCn0="  // PUT your SESSION_ID 


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
