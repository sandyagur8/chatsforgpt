import fetch from 'node-fetch';

import {Client, GatewayIntentBits} from 'discord.js';
// const fetch = require('node-fetch');

//https://discord.com/api/oauth2/authorize?client_id=1155173679530000504&permissions=0&scope=bot%20applications.commands


const API='ask_a06581a51c9d5941e8d437e4eb192f08'
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
        'airstack':"fda31316-aec0-40d0-9ee8-3186da7d200d",
        'aave':"a0609864-35e2-4018-913e-2c50b12bab66",
        '1inch':"1a333551-88a8-4694-954e-e5e36174e22c",
        'flashbots':"c03e29c0-660d-40c4-9723-21c475136599",
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

        console.log(message.content)
        console.log()

        const response = await fetch(`https://api.askyourpdf.com/v1/chat/${protocolMap[protocol]}?stream=false`, {method: 'POST', 
        headers:{
            'x-api-key':'ask_8292bec378a0d56791276a35feb878b5',
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

client.login('MTE1NTE3MzY3OTUzMDAwMDUwNA.Gu0uET.g5LofNHbDrNFXrUE_5o40fYPGHluj_QJvTLGR4')