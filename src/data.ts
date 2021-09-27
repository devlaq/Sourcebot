import { Discord, Path } from "./deps.ts";

interface Data {
    id: any;
    data: object;
}

class SnowflakeData implements Data {
    public id: Discord.Snowflake;
    public data: Record<string, unknown>;

    public constructor(id: Discord.Snowflake, data: Record<string, unknown>) {
        this.id = id;
        this.data = data;
    }
}

interface DataManager {
    data: any;
}

interface FileDataManager extends DataManager {
    path: URL;

    
}

class SnowflakeDataManager implements FileDataManager {
    public path: URL;
    public data: Map<Discord.Snowflake, Data>;

    public constructor(path: URL) {
        this.path = path;
        this.data = new Map();
    }

    public loadAll() {
        
    }

    public load(path: URL) {
        
    }
}