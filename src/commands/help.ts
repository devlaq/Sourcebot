import { Discord } from "../deps.ts";

class Help extends Discord.Command {
    name = 'help';
    aliases = ['?'];
    category = 'general';

    description = '도움말을 출력합니다.';
    usage = 'rHelp [category]';

    execute(context: Discord.CommandContext) {
        if(context.rawArgs.length < 1) {
            const command = context.message.content.split(' ')[0];
            const embed = new Discord.Embed()
            .setTitle('도움말')
            .addField(`${command} 일반`, '일반 사용자용 명령어를 출력합니다.')
            .addField(`${command} 관리`, '서버 관리자용 명령어를 출력합니다.')
            .addField(`${command} 유틸리티`, '유틸리티 명령어를 출력합니다.')
            .addField(`${command} 아케이드`, '아케이드 명령어를 출력합니다.')
            .addField(`${command} devtools`, '개발자용 명령어를 출력합니다.');
            context.channel.send(embed);
        } else if(context.rawArgs.length > 0) {
            let categoryName: string;
            switch(context.rawArgs[0]) {
                case 'general':
                case '일반': 
                    categoryName = 'general';
                    break;
                case 'moderate':
                case 'admin':
                case '관리':
                    categoryName = 'admin';
                    break;
                case 'utilities':
                case 'utils':
                case 'util':
                case '유틸리티': 
                    categoryName = 'utils';
                    break;
                case 'arcade':
                case '아케이드': 
                    categoryName = 'arcade';
                    break;
                case 'devtools': 
                    categoryName = 'devtools';
                    break;
                default:
                    categoryName = context.rawArgs[0];
            }

            const category = context.client.categories.get(categoryName);
            if(!category) {
                const embed = new Discord.Embed()
                .setTitle('도움말')
                .setDescription(`카테고리 '${categoryName}'을(를) 찾을 수 없습니다.`)
                .setColor('RED');
                context.channel.send(embed);
            } else {
                const embed = new Discord.Embed()
                .setTitle(`도움말 - ${categoryName}`)
                .setDescription(`카테고리 ${categoryName}의 명령어들과 그에 대한 설명을 출력합니다.`)
                .setColor('pink');
                for(const i of context.client.commands.category(categoryName)) {
                    console.log('test');
                    const command = i[1];
                    embed.addField(`명령어: ${command.name}`, `설명: ${command.description}\n사용법: ${command.usage}`);
                }
                context.channel.send(embed);
            }
        }
    }
}

export default Help;