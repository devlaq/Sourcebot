import { FUtils } from "./util.ts";

class Config {

    public data: Record<string, unknown> | undefined;
    public def: Record<string, unknown> | undefined;
    public file: string | URL;

    /**
     * @param def default config data
     * @param file file to save and load
     */
    public constructor(def: Record<string, unknown> | undefined, file: string | URL) {
        this.data = undefined;
        this.def = def;
        this.file = file;
    }

    /**
     * Loads data from file and overrides data
     * @param useDef if file not exists or invalid json, use def to create file and load
     * @returns Is load success
     */
    public load(): 'loadSuccess' | 'loadFailed' | 'usedDefault' | 'noDefault' {
        if(!this.def) return 'noDefault';

        let createDef = false;
        if(FUtils.existsSync(this.file)) {
            const loadedDataString = Deno.readTextFileSync(this.file);
            try {
                this.data = JSON.parse(loadedDataString);
                return 'loadSuccess';
            } catch {
                createDef = true;
            }
        } else {
            createDef = true;
        }

        if(this.def && createDef) {
            try {
                Deno.writeTextFileSync(this.file, JSON.stringify(this.def, null, 4));
                this.data = this.def;
                return 'usedDefault';
            } catch {
                return 'loadFailed';
            }
        }

        return 'loadFailed';
    }

    /**
     * Saves data to file
     */
    public saveData(): 'saveSuccess' | 'saveFailed' | 'noData' {
        if(!this.data) return 'noData';

        try {
            Deno.writeTextFileSync(this.file, JSON.stringify(this.data, null, 4));
            return 'saveFailed';
        } catch {
            return 'saveFailed';
        }
    }
}

export { Config };