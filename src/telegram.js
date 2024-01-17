

  import  data from './telegram_raw_chats/result.json'  assert { type: 'json' };
  import fs from 'fs'
  import { readFile } from 'fs/promises';

async function loadData() {
  const rawData = await readFile('./telegram_raw_chats/result.json', 'utf-8');
  const data = JSON.parse(rawData);
  // use data here
  return data;
}
const Newdata = await loadData()
  const messages = Newdata.messages
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
    console.log("largerText Generated")
    fs.writeFileSync('telegram_output/output.txt', largerText); 
  })





