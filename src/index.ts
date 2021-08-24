import { Config } from "./config.ts";
import { Discord } from "./deps.ts";
import { Vars } from "./vars.ts";

class Index {

    public config: Config;
    public client: Discord.CommandClient;

    public constructor(configPath: string | URL) {
        this.config = new Config(Vars.defaultConfig, configPath);
        this.loadConfig();

        this.client = new Discord.CommandClient({
            token: this.config.data?.token as string,
            prefix: this.config.data?.prefix as string,
            owners: this.config.data?.owners as string[],
            intents: Discord.Intents.None
        });
    }

    public loadConfig() {
        const result = this.config.load();
        if(result == 'loadFailed' || result == 'noDefault' || this.config.data == undefined) {
            console.log('Failed to load config...');
            console.log('Input valid default to load config successfully');
            Deno.exit();
        }
    }

    public loadCommands() {
        this.client.commands.loader.loadDirectory(this.config.data?.commandDirectory as string);
    }

    public addCategories() {
        if(!this.config.data) return;

        for(const i of this.config.data.categories as Discord.CommandCategory[]) {
            this.client.categories.add(i);
        }
    }

    public connect() {
        this.client.connect().then((c) => {
            console.log(`Connected to ${c.user?.tag}(${c.user?.id})`);
        });
    }

}

const index = new Index('./config.json');
index.loadCommands();
index.addCategories();
index.connect();