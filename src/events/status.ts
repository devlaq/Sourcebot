import { Discord } from "../deps.ts";
import { Listener } from "../index.ts";

class Status extends Listener {
    event: keyof Discord.ClientEvents = 'ready';
    once = false;
    listen(args: Discord.ClientEvents['ready']) {

    }
}

export default Status;