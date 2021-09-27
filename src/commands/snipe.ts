import { Vars } from "../core/vars.ts";
import { Discord } from "../deps.ts";

class Snipe extends Discord.Command {
    name = 'snipe';
    category = 'admin';

    async execute(context: Discord.CommandContext) {
        const message = Vars.deletedMessages.get(context.channel.id);
        if(!message) {
            const embed = new Discord.Embed()
            .setTitle('Snipe')
            .setColor('red')
            .setDescription('이 채널에서 최근 지워진 메시지가 없습니다.');
            await context.channel.send(embed);
            return;
        }

        const embed = new Discord.Embed()
        .setTitle('Snipe')
        .setColor('lightgreen')
        .setDescription(message.content + `\n\nCreated by ${message.author.username} at ${message.createdTimestamp}`)
        .setFooter(context.author.username, context.author.avatarURL())
        if(message.attachments) embed.setImage(message.attachments[0]);
        if(message.embeds) {
            embed.setDescription(embed.description + `\n\n+ ${message.embeds.length} Embeds`);
        }
        await context.channel.send(embed);
    }
}

export default Snipe;