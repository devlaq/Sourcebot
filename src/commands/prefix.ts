import {
    Command, CommandContext
} from '../lib/deps.ts';

class PrefixCommand extends Command {
    name = '접두사';
    aliases = ['prefix'];
    description = '이 서버의 봇 접두사를 설정합니다.';

    execute(context: CommandContext) {
        
    }
}

export { PrefixCommand };