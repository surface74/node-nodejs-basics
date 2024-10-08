import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';
import {stdout} from 'node:process';
import {createHash} from 'node:crypto';
import { EOL } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const INPUT_FILE = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');

    createReadStream(INPUT_FILE).pipe(hash).setEncoding('hex')
        .on('data', chunk => stdout.write(chunk + EOL));
};

await calculateHash();