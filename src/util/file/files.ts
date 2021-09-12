class Files {
    public static existsSync(path: string | URL): boolean {
        try {
            Deno.statSync(path);
        } catch(_ignored) {
            return false;
        }
        return true;
    }
}

export { Files };