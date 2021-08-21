import { Discord } from './lib/deps.ts';
import { EventManager } from "./lib/event.ts";

class Index {

    public client: Discord.CommandClient;
    
    public eventManager: EventManager;
    
    public constructor() {
        this.client = new Discord.CommandClient({
            prefix: 'r'
        });
        this.eventManager = new EventManager();
    }

    public registerEvents(path: string) {
        this.eventManager.loadEvents(this.client, path);
    }

    public registerCommands(path: string): number {
        let cnt = 0;
        console.log(path);
        for(const file of Deno.readDirSync(path)) {
            console.log(file.name);
			if(file.isFile && file.name.endsWith('.ts')) {
				import(`${path}/${file.name}`).then((module) => {
                    console.log(module);
                    this.client.commands.add(module.default);
                    cnt++;
                });
			}
		}
        return cnt;
    }

    public login(token: string) {
        this.client.connect(token, Discord.Intents.None).then(() => console.log(`Loggin success\nid: ${this.client.user?.id}, user: ${this.client.user?.tag}`));
    }

}

const index = new Index();
index.registerEvents('/home/devlaq/Develop/Sourcebot/src/events');
const commands = index.registerCommands('/home/devlaq/Develop/Sourcebot/src/commands');
index.login('ODY1MzkxMzc2ODQ4NzgxMzIz.YPDUhg.vgRNMLTAuyNdAkx7xk4AIhx--fg');

console.log(`${commands} commands`);