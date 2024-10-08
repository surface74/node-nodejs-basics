import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { createGzip } from 'node:zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SOURCE_FILE = join(__dirname, 'files', 'fileToCompress.txt');
const DESTINATION_FILE = join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const gzip = createGzip();
    await pipeline(
        createReadStream(SOURCE_FILE),
        gzip,
        createWriteStream(DESTINATION_FILE),
        err => {
            if (err) {
                console.log(err.message)
            }
        });
};

await compress();