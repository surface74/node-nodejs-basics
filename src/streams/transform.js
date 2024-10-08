import { pipeline, Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';
import { EOL } from 'node:os'

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const data = chunk.toString('utf8').split('').slice(0, -EOL.length);
            callback(null, data.reverse().join('') + EOL);
        }
    });

    pipeline(stdin, reverse, stdout, (err) => {
        if (err) {
            console.error(err);
        }
    });
};

await transform();