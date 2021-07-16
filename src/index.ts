import * as fs from 'fs';
import * as readline from 'readline';
import * as yargs from 'yargs';

import Files from './file';
import Validate from './validate';
import Client from './client';

const token = yargs.argv['token'];

// Token validate START
if(token) {
    console.log(`Validating token...`);
    if(!Validate.validateToken(token)) {
        console.log(`Error 10001, Invalid token '${token}'`);
        process.exit(10001);
    }
    console.log(`Valid token check`);
} else {
    console.log(`Error 10000, No token entered`);
    process.exit(10000);
}

console.log(`Starting bot...`);

// Token validate END

const client = new Client();
client.login(token);

client.discord.on('ready', () => {
    console.log(client.discord.user);
})

client.discord.on('message', (message) => {
    console.log(message);
})