import { argv } from 'node:process';

const parseArgs = () => {
    const params = [];
    for (let i = 2; i < argv.length - 1; i += 2) {
        params.push(`${argv[i].slice(2)} is ${argv[i + 1]}`);
    }
    console.log(params.join(', '));
};

parseArgs();