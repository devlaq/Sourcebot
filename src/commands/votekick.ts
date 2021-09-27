import { Discord } from "../deps.ts";

class VoteKick extends Discord.Command {
    name = 'votekick';
    category = 'utils';

    execute(context: Discord.CommandContext) {
        const embed = new Discord.Embed()
        .setTitle('추방 투표')
        .addField('WebSocket(인터넷)', `\`${context.client.gateway.ping}ms\``, true)
        .addField('Latency(반응속도)', `\`${new Date().getTime() - context.message.createdTimestamp.getTime()}ms\``, true);
        context.channel.send(embed);
        console.log(`Datenow: ${new Date().getTime()}, Timestamp: ${context.message.createdTimestamp.getTime()}`)
    }
}

export default VoteKick;