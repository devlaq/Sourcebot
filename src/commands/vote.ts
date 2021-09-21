import { Discord } from "../deps.ts";

class Vote extends Discord.Command {
    name = 'vote';
    aliases = ['투표'];
    category = 'utils';

    usage = 'rVote <create/status/end> <name> [display_name] [end_at]';
    description = 'Create, check, end vote';

    execute(context: Discord.CommandContext) {
        
    }
}

export default Vote;