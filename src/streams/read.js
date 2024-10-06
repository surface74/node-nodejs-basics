import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE_TO_READ = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    createReadStream(FILE_TO_READ).pipe(stdout);
};

await read();
