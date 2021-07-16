import * as Discord from 'discord.js';

class DiscordBot extends Discord.Client {
    private isLogined: boolean;

    public status(newStatus: Discord.PresenceStatusData) {
        if (this.isLogined) this.user.setStatus(newStatus);
        else throw('Error code 10001: Client is not logined');
    }

    constructor(token: Discord.Snowflake) {
        super();
        this.validateToken(token);
        console.log('Validated token and Started a bot');
        this.isLogined = true;
    }

    private async validateToken(token: Discord.Snowflake): Promise<boolean> {
        try {
            return (typeof await this.login(token) === 'string');
        } catch {
            throw('Error code 10000: Invalid token');
        }
    }
}

export default DiscordBot;