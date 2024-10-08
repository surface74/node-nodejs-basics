import { fileURLToPath } from 'node:url';
import { join, dirname, parse } from 'node:path';
import { readdir } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SOURCE = join(__dirname, 'files');
const ERR_MESSAGE = 'FS operation failed';

const list = async () => {
    try {
        const entities = await readdir(SOURCE, { withFileTypes: true });
        const files = entities
            .filter(entity => entity.isFile())
            .map(file => parse(file.name).name);

        console.log(files);
    } catch (error) {
        throw new Error(`${ERR_MESSAGE}`);
    }
};

await list();