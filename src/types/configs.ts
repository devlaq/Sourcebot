import { Discord, LavaDeno } from "../deps.ts";

interface BotConfig {
    token: string;
    prefix: string | string[];
    owners: string[];
    commandDirectory: string;
    eventDirectory: string;
    statusDelay: number;
    statusMessage: string[];
    categories: Discord.CommandCategory[];
    lavalink: LavaDeno.ClusterOptions;
}

export type { BotConfig };