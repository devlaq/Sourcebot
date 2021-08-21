import { Discord } from "./lib/deps.ts";

class GuildData {
    public client: Discord.Client;
    public snowflake: Discord.Snowflake;
    public data: object;

    public constructor(client: Discord.Client, snowflake: Discord.Snowflake, data: object) {
        this.client = client;
        this.snowflake = snowflake;
        this.data = data;
    }

    public async cache() {
        let a;
        await this.client.guilds.get(this.snowflake.id).then((g) => {
            a = g;
        })
        return a;
    }
}

class GuildDataManager {
    public guilds: Map<Discord.Snowflake, GuildData>;

    public constructor() {
        this.guilds = new Map();
    }

    public load(from: string | URL) {
        const strData = Deno.readTextFileSync(from);
        this.guilds = JSON.parse(strData);
    }

    public save(to: string | URL) {
        Deno.writeTextFileSync(to, JSON.stringify(this.guilds));
    }
}

export { GuildData, GuildDataManager };