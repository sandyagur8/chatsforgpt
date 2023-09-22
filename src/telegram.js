

  const data = require('./telegram_raw_chats/result.json')
  const fs = require('fs') 

  const messages = data.messages
  let largerText = ''
  messages.map(x =>{
    // console.log(x.from)
    // console.log(x.text_entities)
    let stringset = ''
    x?.text_entities.map(y => {
      stringset = stringset + y.text
      // console.log(stringset)
      // console.log(y.text)
    })
    let str
    if (x?.from){
      str = `${x.from} says ${stringset}` 
      largerText = largerText + str 
    }

    // console.log(str)
    // largerText = largerText + '\n' + str 
    console.log(largerText)
    fs.writeFileSync('telegram_output/output.txt', largerText); 
  })





