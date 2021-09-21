class Logger {
    public handler: LogHandler;
}

interface LogHandler {

    tag: string;

    log(message: string): void;

}

class DefaultLogHandler implements LogHandler {
    

    public log(message: string) {
        
    }

}