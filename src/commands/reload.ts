import { Discord } from "../deps.ts";

class Restart extends Discord.Command {
    name = 'restart';
    ownerOnly = true;

    execute(context: Discord.CommandContext) {
        const embed = new Discord.Embed()
        .setTitle('Restart')
        .setDescription('봇 프로세스를 다시 시작합니다.\n시간이 오래 걸릴수도 있습니다.');
        context.channel.send(embed);
        Deno.exit(0);
    }
}

export default Restart;