import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE_TO_WRITE = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    stdin.pipe(createWriteStream(FILE_TO_WRITE));
};

await write();