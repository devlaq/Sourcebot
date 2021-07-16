import * as Discord from 'discord.js';

class Client {

    public discord: Discord.Client;

        public constructor() {
        this.discord = new Discord.Client();
    }

    public login(token: string) {
        this.discord.login(token);
    }

    public status(newStatus: Discord.PresenceStatusData) {
        this.discord.user.setStatus(newStatus);
    }

}

export default Client;