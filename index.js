const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(request,response){response.send('Монитор активен. Локальный адрес:http://localhost:$(port}'); });
app.listen(port, () => console.log());
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.token_bot)
