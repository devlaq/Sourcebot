import { Discord } from "../deps.ts";

class Reaction extends Discord.Command {
    name = 'reaction';
    usage = 'rReaction <message_id> <emoji/check> <role/message/nick>'
    category = 'admin';
    guildOnly = true;

    async execute(context: Discord.CommandContext) {
        if(context.rawArgs.length < 2) {
            const embed = new Discord.Embed()
            .setTitle('Reaction')
            .setDescription('트리거를 생성하려면 message_id, option1, option2가 필요합니다.')
            .setColor('RED');
            context.channel.send(embed);
        } else {
            const message = await context.channel.messages.get(context.rawArgs[0]);
            const option1 = context.rawArgs[1];
            
            if(!message) {
                const embed = new Discord.Embed()
                .setTitle('Reaction')
                .setDescription('message_id가 올바르지 않습니다. (1번째 인수)')
                .setColor('RED');
            } else {
                if(option1 == 'check') {
                    
                }
            }
        }
    }
}

export default Reaction;