interface StringFormatter {
    
    format(string: string, ...args: object[]): void;

}

class DefaultStringFormatter implements StringFormatter {

    public format(string: string, ...args: unknown[]) {
        let formatted = string;
        for(let i = 0; i < args.length; i++) {
            formatted = formatted.replace("{" + i + "}", args[i] as string);
        }
        return formatted;
    }

}

export type { StringFormatter };
export { DefaultStringFormatter };