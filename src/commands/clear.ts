import { Discord } from "../deps.ts";

class Clear extends Discord.Command {
    name = 'clear';
    category = 'admin';

    usage = 'rClear <messages>';
    description = 'Delete last <messages> messages';

    guildOnly = true;

    execute(context: Discord.CommandContext) {
        if(context.rawArgs.length < 1) {
            const embed = new Discord.Embed()
            .setTitle('청소')
            .setDescription('채널을 청소하려면 청소할 메시지 개수를 입력하여야합니다!')
            .setColor('red');
            context.channel.send(embed);
            return;
        }

        if(context.channel instanceof Discord.GuildTextBasedChannel) {
            const n = Number(context.rawArgs[0]);

            console.log(n);

            if(n < 2 || n > 200) {
                const embed = new Discord.Embed()
                .setTitle('청소')
                .setDescription('2개 이상, 200개 이하의 메시지만 지울 수 있습니다!')
                .setColor('red');
                context.channel.send(embed);
                return;
            } 
            
            if(Number.isNaN(n)) {
                const embed = new Discord.Embed()
                .setTitle('청소')
                .setDescription(`${context.rawArgs[0]}은 숫자가 아닙니다.`)
                .setColor('red');
                context.channel.send(embed);
                return;
            }

            context.channel.bulkDelete(n);

            const embed = new Discord.Embed()
            .setTitle('청소')
            .setDescription(`${n}개의 메시지를 지웠습니다!`)
            .setColor('lightgreen');
            context.channel.send(embed);
        }
    }
}

export default Clear;