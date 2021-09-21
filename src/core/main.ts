import { Config } from "../util/config/config.ts";
import { Discord, Path } from "../deps.ts";
import { Vars } from "./vars.ts";

class Main {

    public config: Config<typeof Vars.defaultBotConfig>;
    public client: Discord.CommandClient;
    public listeners: Listener[] = [];

    public static instance: Main;

    public constructor(configPath: string | URL) {
        Main.instance = this;
        this.config = new Config(Vars.defaultBotConfig, configPath);
        this.loadConfig();


        this.client = new Discord.CommandClient({
            token: this.config.data.token,
            prefix: this.config.data.prefix,
            owners: this.config.data.owners,
            intents: Discord.Intents.None
        });
    }

    public loadConfig() {
        const result = this.config.load();
        if(result == 'loadFailed'  || this.config.data == undefined) {
            console.log('Failed to load config...');
            console.log('Input valid default to load config successfully');
            Deno.exit();
        }
    }

    public async loadCommands() {
        await this.client.commands.loader.loadDirectory(this.config.data?.commandDirectory);
    }

    public async loadEvents() {
        for(const i of Deno.readDirSync(this.config.data?.eventDirectory as string)) {
            if(i.name.endsWith('.ts')) {
                const mod = await import(`file:///${Path.join(Deno.cwd(), this.config.data?.eventDirectory, i.name)}`);
                const listener = new mod.default() as Listener;
                this.listeners.push(listener);
                if(listener.once) {
                    this.client.once(listener.event, (...args) => this.listenEvent(listener, listener.onError, args as object[]));
                } else {
                    this.client.on(listener.event, (...args) => this.listenEvent(listener, listener.onError, args as object[]));
                }
            }
        }
    }

    public listenEvent(listener: Listener, onError: (error: Error) => void, args: object[]) {
		try {
			listener.listen(args as Discord.ClientEvents[keyof Discord.ClientEvents]);
		} catch(e) {
			onError(e);
		}
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

class Listener {
    public event: keyof Discord.ClientEvents = 'ready'
    public once = false;
    public onError(): any {}
    public listen(args: Discord.ClientEvents[keyof Discord.ClientEvents]): any {}
}

const index = new Main('./config.json');

index.loadCommands();
index.loadEvents();
index.addCategories();
index.connect();



export { Main, Listener };