import { workerData, parentPort } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (Math.random() > 0.66) {
        throw new Error();
    }
    if (parentPort) {
        parentPort.postMessage(nthFibonacci(workerData));
    }
};

sendResult();