const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku } = require("../../Database/dataschema.js");

module.exports = { 

    name: "owner", 
    desc: "To view the list of current Mods", 
    alias: ["modlist","mods","mod"],
    category: "Core", 
    usage: "owner", 
    react: "🏅", 
    start: async (
      Miku, 
      m, 
      { text, prefix, mentionByTag, pushName, isCreator,owner,includes,modStatus} 
    ) => { 

        try { 
        
            var modlist = await mku.find({addedMods: "true"});
            var modlistString = "";
            var ownerList = global.owner;
            modlist.forEach(mod => {
              modlistString += `\n@${mod.id.split("@")[0]}\n`
            });
            var mention = await modlist.map(mod => mod.id);
            let xy = modlist.map(mod => mod.id);
            let yz = ownerList.map(owner => owner+"@s.whatsapp.net");
            let xyz = xy.concat(yz);

            ment = [ownerList.map(owner => owner+"@s.whatsapp.net"), mention];
            let textM = `             🧣  *【ᴠɪʜᴀɴɢᴀ ᴛʜᴇᴇᴋꜱʜᴀɴᴀ ᴍᴅ】 Mods*  🧣\n\n`;

            if(ownerList.length == 0){
              textM = "*No Mods Added !*";
            }

            for (var i = 0; i < ownerList.length; i++) {
              textM += `\n〽️ @$94775597507\n`
            }

            if(modlistString != ""){
              for (var i = 0; i < modlist.length; i++) {
                
              }
            } 
            
            if(modlistString != "" || ownerList.length != 0){
               textM += `\n\n📛 *Don't Spam them to avoid Blocking !*\n\n🎀 For any help, type *${prefix}support* and ask in group.\n\n*💫 Thanks for using 【ᴠɪʜᴀɴɢᴀ ᴛʜᴇᴇᴋꜱʜᴀɴᴀ ᴍᴅ】. 💫*\n`
            }
            
            return Miku.sendMessage( 
              m.from, 
              { text: textM, mentions: xyz }, 
              { quoted: m } 
            );

          } catch (err) { 
            console.log(err);
            return Miku.sendMessage(m.from, { text: `An internal error occurred while fetching the mod list.` }, { quoted: m });
          } 
        }, 
    }
