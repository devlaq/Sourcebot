import fs from 'fs';

class Files {

    public static exists(path: string): boolean {
        try {
            fs.accessSync(path);
            return true;
        } catch {
            return false;
        }
    }

}

export default Files;