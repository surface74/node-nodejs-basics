import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';
import {createHash} from 'node:crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const INPUT_FILE = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const readStream = createReadStream(INPUT_FILE).pipe(hash).setEncoding('hex');
    readStream.on('data', (chunk) => console.log(chunk));
};

await calculateHash();