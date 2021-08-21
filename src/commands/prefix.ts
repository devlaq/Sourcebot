import { Discord } from '../lib/deps.ts';

class PrefixCommand extends Discord.Command {
    name = '접두사';
    aliases = ['prefix'];
    description = '이 서버의 봇 접두사를 설정합니다.';

    execute(context: Discord.CommandContext) {
        
    }
}

export default PrefixCommand;