import { Config } from "./config.ts";
import { Discord } from "./deps.ts";
import { Vars } from "./vars.ts";

const config = new Config(Vars.defaultConfig, './config.json');
const result = config.load();
if(result == 'loadFailed' || result == 'noDefault' || config.data == undefined) {
    console.log('Failed to load config...');
    console.log('Input valid default to load config successfully');
    Deno.exit(2);
}

const client = new Discord.CommandClient({
    token: config.data.token as string,
    prefix: 'r',
    owners: [
        '872282485097111572'
    ],
    intents: Discord.Intents.None
});

client.connect();