import { Discord } from "../deps.ts";

class Eval extends Discord.Command {
    name = 'eval';
    ownerOnly = true;
    category = 'devtools';

    description = '코드 평가를 실행합니다. (위험함)';
    usage = 'rEval <code>';

    execute(context: Discord.CommandContext) {
        if(context.rawArgs.length < 1) {
            const embed = new Discord.Embed()
            .setTitle('코드 평가 실패')
            .setDescription('코드를 원격으로 실행하려면 인수를 주어야합니다!')
            .setColor('red');

            context.channel.send(embed);
        } else {
            const target = context.rawArgs.join(' ');
            try {
                let result = eval(target);
                const embed = new Discord.Embed()
                .setTitle('코드 평가 성공')
                .setDescription(`코드 실행을 완료했습니다.\n\nResult:\n\`${result}\``)
                .setColor('lightgreen');

                context.channel.send(embed);
            } catch(err) {
                const embed = new Discord.Embed()
                .setTitle('코드 평가 실패')
                .setDescription(`코드 실행에 실패했거나 코드 실행 도중 에러가 발생했습니다.\n\nError:\n\`${err}\``)
                .setColor('red');

                context.channel.send(embed);
            }
        }
    }
}

export default Eval;