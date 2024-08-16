import { Env } from '../../index';

let env: Env;

export function setEnv(envVar: Env) {
    env = envVar;
}

export function getEnv() {
    if (!env) {
        throw new Error('Environment variable not set');
    }
    return env;
}
