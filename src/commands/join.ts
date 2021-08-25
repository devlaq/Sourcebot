import { Discord } from "../deps.ts";

class Join extends Discord.Command {
    name = 'join';
    category = 'admin';

    description = '유저가 서버에 참여했을 때 실행할 액션을 설정합니다.';
    usage = 'rJoin <add/remove/list> [name]';

    args=[]

    execute(context: Discord.CommandContext) {
        if(context.rawArgs.length == 0) {

        } else {

        }
    }
}

export default Join;