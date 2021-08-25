import { Discord } from "../deps.ts";
import { Index, Listener } from "../index.ts";
import { Vars } from "../vars.ts";

class Status extends Listener {
    event: keyof Discord.ClientEvents = 'ready';
    once = false;

    listen(args: Discord.ClientEvents['ready']) {
        setInterval(this.update, Index.instance.config.data?.statusDelay as number);
    }
    update() {
        if(Vars.statusMessageIndex == (Index.instance.config.data?.statusMessage as string[]).length) Vars.statusMessageIndex = 0;
        const message = (Index.instance.config.data?.statusMessage as string[])[Vars.statusMessageIndex++];
        Index.instance.client.presence.setStatus('online').setActivity({
            name: message,
            type: 'CUSTOM_STATUS',
        })
        console.log(message);
    }
}

export default Status;