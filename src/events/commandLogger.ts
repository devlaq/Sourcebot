import { Discord } from "../lib/deps.ts";
import { Listener } from "../lib/event.ts";


class CommandLoggerListener extends Listener {
    
    eventName: keyof Discord.ClientEvents = 'commandUsed';

    public onError(err: Error) {
        console.log(err);
    }

    public call(args: Discord.ClientEvents['commandUsed']) {
        const context = args[0];
        console.log(`user '${context.author.tag}' (${context.author.id}) used command '${context.name}' in channel '${context.channel instanceof Discord.GuildTextChannel ? context.channel.name : 'DM'}' (${context.channel.id}) ${context.guild ? `on server '${context.guild.name}' (${context.guild.id})` : ''}`)
    }

}

export default CommandLoggerListener;