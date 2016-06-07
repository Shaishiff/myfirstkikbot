'use strict';

let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');

// Configure the bot API endpoint, details for your bot
let bot = new Bot({
    username: 'shaisbot',
    apiKey: '274f113b-2abd-44ec-9193-d49181a36a55',
    baseUrl: 'https://beepboophq.com/proxy/56fc42b2ce9746f09b241e0c471914ec/incoming'
});

bot.updateBotConfiguration();

bot.onTextMessage((message) => {
    console.log("Got message: " + message.body);
    message.reply(message.body);
});

function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

// Set up your server and start listening
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 8080);
