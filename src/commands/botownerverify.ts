import { Discord } from "../deps.ts";

class SAIBZXBQ extends Discord.Command {
    name = 'hellothisisverification';
    category = 'utils';

    execute(context: Discord.CommandContext) {
        context.channel.send('검은색#7725');
    }
}

export default SAIBZXBQ;