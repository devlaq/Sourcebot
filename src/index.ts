import {
    CommandClient
} from './lib/deps.ts';

import {
    PrefixCommand
} from './commands/commands.ts';

const client = new CommandClient({
    prefix: 'r'
});

client.commands.add(PrefixCommand);

client.connect('TTTOOOKKKEEENNN');