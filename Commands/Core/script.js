const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "script",
    alias: ["repo","sc","sourcecode"],
    desc: "Say hello to bot.",
    react: "š",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('./Page/BG.jpg')
        let repoInfo = await axios.get('https://api.github.com/repos/FantoX001/Atlas-MD')
        let repo = repoInfo.data
        let txt = `      š§£ *į“ ÉŖŹį“É“É¢į“ į“Źį“į“į“ź±Źį“É“į“ į“į“'s Script* š§£\n\n*š Total Forks:* ${repo.forks_count}\n*ā­ Total Stars:* ${repo.stargazers_count}\n*š License:* ${repo.license.name}\n*š Repo Size:* ${(repo.size/1024).toFixed(2)} MB\n*š Last Updated:* ${repo.updated_at}\n\n*š Repo Link:* https://vihangatheekshana11111.on.drv.tw/VT1/\n\nā Dont forget to give a Star ā­ to the repo. It's made with restless harkwork by *Team ATLAS*. ā\n\n*Ā©ļø Team ATLAS- 2023*`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}
