import { Discord } from "../deps.ts";

class Embed extends Discord.Command {
    name = 'embed';
    category = 'utils';

    execute(context: Discord.CommandContext) {
        if(context.rawArgs.length < 2) {
            const embed = new Discord.Embed()
            .setTitle('Embed 생성')
            .setDescription('Embed를 생성하려면 title, description가 인수로 주어져야 합니다.')
            .setColor('RED');

            context.channel.send(embed);
        } else {

        }
    }
}

export default Embed;