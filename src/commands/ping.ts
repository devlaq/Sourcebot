import {
    Command, CommandContext
} from '../lib/deps.ts';

class Ping extends Command {
    name = '핑';
    aliases = ['레이턴시', 'ping', 'laytency'];
    execute(context: CommandContext) {
        context.channel.send(`${context.client.ping}ms`);
    }
}

export { Ping };