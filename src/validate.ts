import * as Discord from 'discord.js';

class Validate {

    public static validateToken(token: string): boolean {
        let isValid = true;
        const client = new Discord.Client();
        client.login(token).catch(() => isValid = false);
        client.destroy();
        return isValid;
    }

}

export default Validate;