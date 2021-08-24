import { Discord } from "../deps.ts";

class Bot extends Discord.Command {
    name = 'bot';
    category = 'general';

    execute(context: Discord.CommandContext) {
        const embed = new Discord.Embed()
        .setTitle('Bot 정보')
        .addField('개발자', '검은색#7225(872282485097111572)')
        .addField('Source Code', 'https://github.com/devlaq/Sourcebot')
        .addField('라이선스', 'GPL 3.0');
        context.channel.send(embed);
    }
}

export default Bot;