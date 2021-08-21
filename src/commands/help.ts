import { Discord } from '../lib/deps.ts';
import Strings from '../lib/strings.ts';
import Vars from '../vars.ts';

class HelpCommand extends Discord.Command {
    name = '도움말';
    aliases = ['help'];
    execute(context: Discord.CommandContext) {
        const command = context.message.content.split(' ')[0];
        if(context.rawArgs.length < 1) {
            const embed = new Discord.Embed()
            .setTitle('도움말')
            .setDescription(`Sourcebot v${Vars.version} 도움말`)
            .addField(`${command} 일반`, '일반 카테고리 명령어 도움말을 출력합니다.');
            context.channel.send(embed);
        } else {

        }
        
    }
}

export default HelpCommand;