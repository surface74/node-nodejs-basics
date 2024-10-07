import { fork } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const CHILD_PROCESS_FILE = join(dirname(fileURLToPath(import.meta.url)), 'files', 'script.js');


const spawnChildProcess = async (args) => {
    fork(CHILD_PROCESS_FILE, args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] });
};

spawnChildProcess( ['Hi', 'there!']);