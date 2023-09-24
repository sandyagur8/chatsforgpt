import fetch from 'node-fetch';

import {Client, GatewayIntentBits} from 'discord.js';
// const fetch = require('node-fetch');

//https://discord.com/api/oauth2/authorize?client_id=1155173679530000504&permissions=0&scope=bot%20applications.commands


const API='ask_7fe16e5cf8af0c0674c65d36e2e6f157'
// const url = `https://api.askyourpdf.com/v1/chat/${protocolMap[protocol]}?stream=false`

const client = new Client({
    intents: [ GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,]
})

client.on('ready', ()=>{
    console.log('the bot is ready')
    client.guilds.cache.forEach( (guild) => {
        console.log(`${guild.name} | ${guild.memberCount} | ${guild.id}`)
        })
})




client.on('messageCreate', async (message)=>{
    const protocolMap = {
        'airstack':"3664a72e-1d2e-43ef-b762-fda092942a7c",
        'aave':"b5f56216-4b98-43bd-b5cf-02cc0b330031",
        '1inch':"f829e92e-92de-4c1a-8f43-1f072046b86b",
        'flashbots':"e5247c99-3f85-4336-bbf9-bc062fc3fed7",
        'uma':"b6932206-364d-4db1-84f2-7bdb6189bc1d",
        'near':'4d11bbfb-6f88-4a91-9505-d95d535e39d3',
        'tba':'c0e788b0-55d3-4dc2-8e38-abdf8086437f',
        'hyperlane':'65c67eb1-a336-4218-b500-cae85163db7c',
        'graph':'1fc10d26-b5e7-49d7-9a42-35fed8ad3c22',
        'neon':'47c9a119-1528-4d0d-9506-8cdef27673ac',
        'base':'8f0a47bb-d472-4eb1-a922-d6bc6aba0a2d',
        'celo':'14810c18-07f4-41ca-9acb-ea2e42d6cb82',
        'axelar':'8e4bd513-74e7-432f-8ccc-d1708f68cc57',
        'arbitrum':'45099d5d-f999-4eb3-ab10-5e631ab4586c',
        'cartesi':'51c066db-7d27-4267-afc9-dfd66e18ce0b',
        'safe':'95e55ff0-f3fe-4b7c-9240-320e93ac7c3e',
        'biconomy':'70fd3b41-2938-48a9-bb19-0eda26172846',
        'starknet':'7c5d2ff1-7eb5-4042-8198-24ecaf9d045f',
        'uniswap':'24aaf55f-cd80-428c-bbbc-bafd5196b8b7'

    }


    if (message.author.bot) return;
    console.log(message.guildId)
    if (message.content.includes('#technical')) {

        let protocol = ''
        if (message.content.includes('#airstack')){
            protocol='airstack'
        }

        if (message.content.includes('#aave')){
            protocol='aave'
        }

        if (message.content.includes('#1inch')){
            protocol='1inch'
        }

        if (message.content.includes('#flashbots')){
            protocol='flashbots'
        }

        if (message.content.includes('#uma')){
            protocol='uma'
        }

        if (message.content.includes('#near')){
            protocol='near'
        }

        if (message.content.includes('#tba')){
            protocol='tba'
        }

        if (message.content.includes('#hyperlane')){
            protocol='hyperlane'
        }

        if (message.content.includes('#graph')){
            protocol='graph'
        }

        if (message.content.includes('#neon')){
            protocol='neon'
        }

        if (message.content.includes('#base')){
            protocol='base'
        }

        if (message.content.includes('#celo')){
            protocol='celo'
        }

        if (message.content.includes('#axelar')){
            protocol='axelar'
        }

        if (message.content.includes('#arbitrum')){
            protocol='arbitrum'
        }

        if (message.content.includes('#cartesi')){
            protocol='cartesi'
        }

        if (message.content.includes('#safe')){
            protocol='safe'
        }

        if (message.content.includes('#biconomy')){
            protocol='biconomy'
        }

        if (message.content.includes('#starknet')){
            protocol='starknet'
        }

        if (message.content.includes('#uniswap')){
            protocol='uniswap'
        }


        console.log(message.content)
        console.log()

        const response = await fetch(`https://api.askyourpdf.com/v1/chat/${protocolMap[protocol]}?stream=false`, {method: 'POST', 
        headers:{
            'x-api-key':'ask_7fe16e5cf8af0c0674c65d36e2e6f157',
            'Content-Type':"application/json",
        },
        body:
        JSON.stringify([{ 
        "sender": "User",
        "message": message.content
        }])

       });
        const data = await response.json();   

        console.log(data)
        message.reply(data?.answer?.message)
    }
})

client.login('MTE1NTE3MzY3OTUzMDAwMDUwNA.GSGI2K.1eG0pUgxTyBWJFNQi3J3oeg0GdkVdP2heuOF0w')