import { Discord } from "../deps.ts";
import { Main, Listener } from "../core/main.ts";
import { Vars } from "../core/vars.ts";

class Status extends Listener {
    event: keyof Discord.ClientEvents = 'ready';
    once = false;

    listen(args: Discord.ClientEvents['ready']) {
        setInterval(this.update, Main.instance.config.data.statusDelay as number);
    }
    update() {
        if(Vars.statusMessageIndex == (Main.instance.config.data.statusMessage as string[]).length) Vars.statusMessageIndex = 0;
        const message = (Main.instance.config.data.statusMessage as string[])[Vars.statusMessageIndex++];
        Main.instance.client.setPresence({
            name: message,
            type: 'PLAYING'
        });
    }
}

export default Status;