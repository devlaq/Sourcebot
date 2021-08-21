

class Strings {
    public static format(str: string, ...args: string[]) {
        var _args = Array.prototype.slice.call(args, 1);
        return str.replace(/{(\d+)}/g, function(match, number) { 
            return typeof _args[number] != 'undefined' ? _args[number] : match;
        });
    }
}

export default Strings;