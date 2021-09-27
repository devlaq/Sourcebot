import { Discord } from "../deps.ts";
import { Listener } from "../core/main.ts";
import { Vars } from "../core/vars.ts";

class DeletedMessageSave extends Listener {
    event: keyof Discord.ClientEvents = 'messageDelete';
    once = false;
    listen(args: Discord.ClientEvents['messageDelete']) {
        const message = args[0];
        Vars.deletedMessages.set(message.channel.id, message);
    }
}

export default DeletedMessageSave;