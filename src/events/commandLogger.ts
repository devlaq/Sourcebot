import { Listener } from "../lib/event.ts";


class CommandLoggerListener extends Listener {
    
    eventName = 'ready';

    public call() {
        
    }

}

export default CommandLoggerListener;