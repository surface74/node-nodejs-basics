import { env } from 'node:process';

const PREFIX = 'RSS_';

const parseEnv = () => {
    const params = Object.entries(env).reduce(
        (acc, [key, value]) => {
            if (key.startsWith(PREFIX)) {
                acc.push(`${key}=${value}`);
            }
            return acc;
        }, [])
        .join('; ');

    console.log(params);
};

parseEnv();