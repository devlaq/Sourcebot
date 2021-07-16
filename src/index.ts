import * as yargs from 'yargs';

import Files from './file';

import DiscordBot from './lib/Discord';

const token = yargs.argv['token'];

const client = new DiscordBot(token);

client.on('ready', () => {
    console.log(client.user);
})

client.on('message', (message) => {
    console.log(message);
})