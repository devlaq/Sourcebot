import { Discord } from '../lib/deps.ts';

class PingCommand extends Discord.Command {
    name = '핑';
    aliases = ['레이턴시', 'ping', 'laytency'];
    execute(context: Discord.CommandContext) {
        context.channel.send(`${context.client.gateway.ping}ms`);
    }
}

export default PingCommand;