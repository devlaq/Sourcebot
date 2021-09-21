import { Discord } from "../deps.ts";
import { Vars } from "../core/vars.ts";

class Uptime extends Discord.Command {
    name = 'uptime';
    category = 'utils';

    usage = 'rUptime';
    description = 'Display uptime of bot';

    execute(context: Discord.CommandContext) {
        let totalSeconds = (context.client.uptime / 1000);
        const days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);

        const embed = new Discord.Embed()
        .setTitle('Uptime')
        .addField('업타임', `\`${days}일 ${hours}시간 ${minutes}분 ${seconds}초 (전체 ${totalSeconds}seconds / ${context.client.uptime}ms)\``)
        .addField('마지막 리로드', `\`${Vars.reloads.length == 0 ? '리로드 없음' : Vars.reloads[Vars.reloads.length]}\``)
        .addField('시작 후 리로드', `\`${Vars.reloads.length}\``);
        context.channel.send(embed);
    }
}

export default Uptime;