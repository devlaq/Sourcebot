import { Discord } from "../deps.ts";
import { Listener } from "../core/main.ts";

class CommandGuildOnly extends Listener {
    event: keyof Discord.ClientEvents = 'commandGuildOnly';
    once = false;
    listen(args: Discord.ClientEvents['commandGuildOnly']) {
        const context = args[0];
        const embed = new Discord.Embed()
        .setTitle('Access Denied')
        .setDescription(`${context.author.mention}, 이 명령어는 서버에서만 사용 가능한 명령어입니다.`)
        .setColor('RED');
        context.channel.send(embed);
        context.message.type
    }
}

export default CommandGuildOnly;