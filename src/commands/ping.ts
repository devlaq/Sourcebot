import { Discord } from "../deps.ts";

class Ping extends Discord.Command {
    name = 'ping';
    category = 'utils';

    execute(context: Discord.CommandContext) {
        const embed = new Discord.Embed()
        .setTitle('Ping')
        .addField('WebSocket(인터넷)', `\`${context.client.gateway.ping}ms\``, true)
        .addField('Latency(반응속도)', `\`${Date.now() - context.message.createdTimestamp.getTime()}ms\``, true);
        context.channel.send(embed);
    }
}

export default Ping;
