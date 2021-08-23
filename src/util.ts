class FUtils {
    public static existsSync(path: string | URL): boolean {
        try {
            Deno.statSync(path);
        } catch(err) {
            return false;
        }
        return true;
    }
}

export { FUtils };