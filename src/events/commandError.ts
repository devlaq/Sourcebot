import { Discord } from "../deps.ts";
import { Listener } from "../core/main.ts";

class CommandGuildOnly extends Listener {
    event: keyof Discord.ClientEvents = 'commandError';
    once = false;
    listen(args: Discord.ClientEvents['commandError']) {
        const context = args[0];
        const error = args[1];
        const embed = new Discord.Embed()
        .setTitle('명령 실행 실패')
        .setDescription(`명령어 실행 도중 에러가 발생했습니다.\nError: \n\`${error}\`\n개발자에게 문의하세요.`)
        .setColor('RED');
        context.channel.send(embed);
        context.message.type
    }
}

export default CommandGuildOnly;