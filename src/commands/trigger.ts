import { Discord } from '../lib/deps.ts';

class TriggerCommand extends Discord.Command {
    name = '트리거';
    aliases = ['trigger'];
    description = '특정 조건에서 발동되는 트리거의 액션을 등록, 수정, 설정합니다.';

    execute(context: Discord.CommandContext) {
        context.channel.send('작업 미완료');
    }
}

export default TriggerCommand;