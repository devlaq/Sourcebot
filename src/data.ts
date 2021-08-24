import { Discord, Path } from "./deps.ts";

class Data {
    public id: Discord.Snowflake;
    public data: Record<string, unknown>;

    public constructor(id: Discord.Snowflake, data: Record<string, unknown>) {
        this.id = id;
        this.data = data;
    }
}

class SnowflakeDataManager {
    public path: URL;
    public guilds: Map<Discord.Snowflake, Data>;

    public constructor(path: URL) {
        this.path = path;
        this.guilds = new Map();
    }

    public loadAll() {
        
    }

    public load(path: URL) {
        
    }
}