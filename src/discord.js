import csv from 'csvtojson'
import fs from 'fs'

/* Change this file path to csv file name */
const csvFilePath='discord_raw_chats/flashbots ethglobal.csv'

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    let finalJSON = {messages:[]}
    let finalString
    jsonObj.map(obj=>{
        const {Username, Content} = obj
        const str = `${obj?.Username} says ${obj?.Content}`
        // finalJSON.messages.push(
            // {"role": Username, "content": Content}
        // )
        // console.log(str);
        finalString = finalString + '\n' + str
    })
    console.log(finalString)
    // console.log(finalJSON)
    // fs.writeFileSync('discord_output/output.txt', finalString); 
    fs.writeFileSync('discord_output/chatgpt/flashbots.json', finalString); 
})


