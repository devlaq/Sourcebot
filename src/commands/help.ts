import { Discord } from "../deps.ts";

class Help extends Discord.Command {
    name = 'help';
    aliases = ['?'];
    category = 'general';

    description = '도움말을 출력합니다.';
    usage = 'rHelp [category]';

    async execute(context: Discord.CommandContext) {
        const embed = new Discord.Embed({
            title: '도움말',
            description: '카테고리를 선택하여 도움말을 확인하세요.'
        })
        const select: Discord.MessageComponentData = {
            type: 'SELECT',
            customID: 'helpCategorySelect',
            placeholder: '카테고리 선택',
            options: [
                {
                    label: '일반',
                    value: 'general',
                    description: '일반 카테고리 도움말을 확인합니다.'
                },
                {
                    label: '관리',
                    value: 'admin',
                    description: '관리 카테고리 도움말을 확인합니다.'
                },
                {
                    label: '유틸리티',
                    value: 'utility',
                    description: '유틸리티 카테고리 도움말을 확인합니다.'
                },
                {
                    label: '아케이드',
                    value: 'arcade',
                    description: '아케이드 카테고리 도움말을 확인합니다.'
                },
                {
                    label: 'devtools',
                    value: 'devtools'
                }
            ]
        }
        const message = await context.channel.send({
            embed: embed,
            components: [
                {
                    type: 'ACTION_ROW',
                    components: [select]
                }
            ]
        });
        const [interaction] = await context.client.waitFor('interactionCreate', (interaction) => interaction.isMessageComponent() && interaction.message.id === message.id);

    }
}

export default Help;