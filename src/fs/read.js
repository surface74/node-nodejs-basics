import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { readFile } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SOURCE_FILE = join(__dirname, 'files', 'fileToRead.txt');
const ERR_MESSAGE = 'FS operation failed';

const read = async () => {
    try {
        const content = await readFile(SOURCE_FILE, { encoding: 'utf8' });
        console.log(content);
    } catch (error) {
        throw new Error(`${ERR_MESSAGE}`);
    }
};

await read();