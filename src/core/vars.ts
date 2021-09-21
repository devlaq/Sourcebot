import { BotConfig } from "../types/configs.ts";

class Vars {
    
    public static reloads: number[] = [];

    public static defaultBotConfig: BotConfig = {
        token: 'Put your token here',
        prefix: 'examplePrefix',
        owners: ['your id here'],
        commandDirectory: 'command directory here',
        eventDirectory: 'event directory here',
        statusDelay: 500,
        statusMessage: ['hello', 'world', 'hello', 'bot'],
        categories: [
            {
                name: 'example',
                ownerOnly: false
            }
        ],
        lavalink: {
            nodes: [
                {
                    id: "asdf",
                    host: "hello.audio.server",
                    port: 1234,
                    password: "PasSword"
                }
            ],
            sendGatewayPayload: (id, paylod) => { return; }
        }
    }

    public static statusMessageIndex = 0;

}

export { Vars };