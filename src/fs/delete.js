import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { rm } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE_TO_REMOVE = join(__dirname, 'files', 'fileToRemove.txt');
const ERR_MESSAGE = 'FS operation failed';

const remove = async () => {
    try {
        await rm(FILE_TO_REMOVE);
    } catch (error) {
        throw new Error(`${ERR_MESSAGE}`);
    }
};

await remove();