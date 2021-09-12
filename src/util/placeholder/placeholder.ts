class Placeholder {
    
    //static holders. low priority.
    public static global = new Map<string, string>();

    //local holders. high priority.
    public local = new Map<string, string>();

    /**
     * register holder to static holders. overwriten when key is exists.
     * @param key key of holder
     * @param value value of holder
     */
    public static registerGlobal(key: string, value: string) {
        this.global.set(key, value);
    }

    
    /**
     * register holder to local holders. overwriten when key is exists.
     * @param key key of holder
     * @param value value of holder
     */
    public register(key: string, value: string) {
        this.local.set(key, value);
    }

    /**
     * apply placeholders to string. global holders only.
     * @param str string to apply placeholder
     */
    public static applyGlobal(str: string) {

    }

    /**
     * 
     * @param str string to apply placeholder
     */
    public static applyLocal(str: string) {

    }

}

interface PlaceholderHandler {
    handle(string: string): string;
}

class PlaceholderFormatter {
    
}