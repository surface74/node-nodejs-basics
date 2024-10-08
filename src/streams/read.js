import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { EOL } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE_TO_READ = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    createReadStream(FILE_TO_READ).on('data', chunk => stdout.write(chunk + EOL));
};

await read();
