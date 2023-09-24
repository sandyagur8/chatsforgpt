import csv from 'csvtojson'
import fs from 'fs'

/* Change this file path to csv file name */
const filesArray=['celo0.csv', 'celo1.csv', 'celo2.csv']
const nameSplit= filesArray[0].split(".")
for(let i=0;i<filesArray.length;i++){
    const csvFilePath='discord_raw_chats/'+filesArray[i]
    console.log(csvFilePath)
    let finalString

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    let finalJSON = {messages:[]}
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
    // fs.writeFileSync('discord_output/chatgpt/Biconomy1.json', finalString); 
    fs.writeFileSync('./discord_output/'+nameSplit[0]+'.txt', String(finalString + "\n"),{flag:"a+"});
})
}
 



