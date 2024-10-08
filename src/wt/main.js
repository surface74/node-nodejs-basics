import { cpus } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WORKER_MODULE = join(__dirname, 'worker.js');

const performCalculations = async () => {
    const workers = new Array(cpus().length).fill(10)
        .map((item, index) => startWorker(item + index));
    Promise.all(workers)
        .then(result => { console.log(result); });
};

function startWorker(data) {
    return new Promise((resolve) => {
        const worker = new Worker(WORKER_MODULE, { workerData: data });
        worker.on('message', data => resolve({ status: 'resolved', data: data }));
        worker.on('error', () => resolve({ status: 'error', data: null }));
    })
}

await performCalculations();