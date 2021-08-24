import { Discord } from "../deps.ts";

class Join extends Discord.Command {
    name = 'join';
    category = 'admin';

    execute(context: Discord.CommandContext) {
        const embed = new Discord.Embed()
        .setTitle('NOTIMPLEMENTED')
        .setColor('RED');
        context.channel.send(embed);
    }
}

export default Join;