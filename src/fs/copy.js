import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { copyFile, mkdir, readdir } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SOURCE_FOLDER = join(__dirname, 'files');
const DESTINATION_FOLDER = join(__dirname, 'files_copy');
const ERR_MESSAGE = 'FS operation failed';

const copy = async (source = SOURCE_FOLDER, destination = DESTINATION_FOLDER) => {
    try {
        await mkdir(destination, { recursive: false });

        const entities = await readdir(source, { withFileTypes: true });

        await Promise.all(entities.map(entity => {
            if (entity.isDirectory()) {
                copy(join(source, entity.name), join(destination, entity.name));
            } else {
                copyFile(join(source, entity.name), join(destination, entity.name));
            }
        }));
    } catch (error) {
        throw new Error(`${ERR_MESSAGE}`);
    }
};

await copy();
