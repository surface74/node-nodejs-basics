import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { createUnzip } from 'node:zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SOURCE_FILE = join(__dirname, 'files', 'archive.gz');
const DESTINATION_FILE = join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    const unzip = createUnzip();
    await pipeline(
        createReadStream(SOURCE_FILE),
        unzip,
        createWriteStream(DESTINATION_FILE),
        err => {
            if (err) {
                console.log(err.message)
            }
        });
};

await decompress();