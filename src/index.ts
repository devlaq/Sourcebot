import { Config } from "./config.ts";
import { Discord } from "./deps.ts";
import { Vars } from "./vars.ts";

const client = new Discord.CommandClient({
    prefix: 'r',
    owners: [
        '872282485097111572'
    ]
});

const config = new Config(Vars.defaultConfig, './config.json');
const result = config.load();
console.log(result);
console.log(config.data);