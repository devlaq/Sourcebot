import { Discord } from "../deps.ts";

class Eval extends Discord.Command {
    name = 'eval';
    ownerOnly = true;
    category = 'devtools';

    execute(context: Discord.CommandContext) {
        if(context.rawArgs.length < 1) {
            const embed = new Discord.Embed()
            .setTitle('코드 평가')
            .setDescription('코드를 원격으로 실행하려면 인수를 주어야합니다!')
            .setColor('RED');

            context.channel.send(embed);
        } else {
            const target = context.rawArgs.join(' ');
            try {
                const result = eval(target);
                const embed = new Discord.Embed()
                .setTitle('코드 평가')
                .setDescription(`코드 실행을 완료했습니다.\n\nResult:\n\`${result}\``)
                .setColor('GREEN');

                context.channel.send(embed);
            } catch(err) {
                const embed = new Discord.Embed()
                .setTitle('코드 평가')
                .setDescription(`코드 실행에 실패했거나 코드 실행 도중 에러가 발생했습니다.\n\nError:\n\`${err}\``)
                .setColor('RED');

                context.channel.send(embed);
            }
        }
    }
}

export default Eval;