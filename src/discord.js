const csv = require('csvtojson')
const fs = require('fs') 

/* Change this file path to csv file name */
const csvFilePath='discord_raw_chats/Apecoin ethglobal.csv'

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    let finalJSON = {messages:[]}
    jsonObj.map(obj=>{
        const {Username, Content} = obj
        // const str = `${obj?.Username} says ${obj?.Content}`
        finalJSON.messages.push(
            {"role": Username, "content": Content}
        )
        // console.log(str);
        // finalString = finalString + '\n' + str
    })
    // console.log(finalString)
    console.log(finalJSON)
    // fs.writeFileSync('discord_output/output.txt', finalString); 
    fs.writeFileSync('discord_output/chatgpt/output.json', JSON.stringify(finalJSON)); 
})


