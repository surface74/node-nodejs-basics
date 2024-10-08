import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { writeFile } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE_NAME = join(__dirname, 'files', 'fresh.txt');
const FILE_CONTENT = 'I am fresh and young';
const ERR_MESSAGE = 'FS operation failed';

export const create = async () => {
    try {
        await writeFile(FILE_NAME, FILE_CONTENT, { flag: 'wx' });
    } catch (error) {
        throw new Error(`${ERR_MESSAGE}`);
    }
};

await create();