class Logger {

    public handler: LogHandler;

    public constructor(handler?: LogHandler) {
        this.handler = handler || new DefaultLogHandler();    
    }

    public log(message: string, ...args: unknown[]) {

    }

    public tag(newTag?: string): string {
        if(newTag) this.handler.tag = newTag;
        return this.handler.tag;
    }

}

interface LogHandler {

    tag: string;

    log(message: string, ...args: unknown[]): void;

}

class DefaultLogHandler implements LogHandler {

    public tag: string;

    public constructor(tag: string) {
        this.tag = tag;
    }

    public log(message: string, ...args: unknown[]) {
        
    }

}

enum Level {
    debug,
    info,
    
}