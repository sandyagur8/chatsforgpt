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