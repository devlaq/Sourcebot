import { Discord } from "../deps.ts";
import { Listener } from "../index.ts";

class CommandOwnerOnly extends Listener {
    event: keyof Discord.ClientEvents = 'commandOwnerOnly';
    once = false;
    listen(args: Discord.ClientEvents['commandOwnerOnly']) {
        const context = args[0];
        const embed = new Discord.Embed()
        .setTitle('Access Denied')
        .setDescription(`${context.author.mention}, 이 명령어는 개발자만 사용 가능한 명령어입니다.`)
        .setColor('RED');
        context.channel.send(embed);
    }
}

export default CommandOwnerOnly;