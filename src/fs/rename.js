import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { rename as renameFs, stat } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SOURCE_FILE = join(__dirname, 'files', 'wrongFilename.txt');
const DESTINATION_FILE = join(__dirname, 'files', 'properFilename.md');
const ERR_MESSAGE = 'FS operation failed';

const rename = async () => {
    try {
        await stat(DESTINATION_FILE);
    } catch (error) {
        try {
            await renameFs(SOURCE_FILE, DESTINATION_FILE);
        } catch (error) {
            throw new Error(`${ERR_MESSAGE}`);
        }
        return;
    }
    throw new Error(`${ERR_MESSAGE}`);
};

await rename();