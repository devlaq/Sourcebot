import { Discord } from '../lib/deps.ts';

class InfoCommand extends Discord.Command {
    name = '정보';
    aliases = ['info'];
    execute(context: Discord.CommandContext) {
        const embed = new Discord.Embed({
            title: '봇 정보',
            fields: [
                {
                    name: `개발자`,
                    value: `검은색#1905 (856864849154015253)`
                }
            ]
        });
        context.channel.send(embed);
    }
}

export default InfoCommand;