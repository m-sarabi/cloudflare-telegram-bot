import { setEnv } from './envManagar';
import { setWebhook, unsetWebhook, handleWebhook } from './telegram/webhook';

// use `npm run cf-typegen` to regenerate `worker-configuration.d.ts`
export interface Env {
    SECRET: string;  // Telegram bot API secret
    TOKEN: string;   // Telegram bot API token
    // Add more environment variables here
}

let botUsername;

export default {
    async fetch(request, env, ctx): Promise<Response> {
        setEnv(env);
        const WEBHOOK: string = '/endpoint';
        const url: URL = new URL(request.url);

        if (url.pathname === WEBHOOK) {
            return handleWebhook(request);
        } else if (url.pathname === '/registerWebhook') {
            return setWebhook(url, WEBHOOK);
        } else if (url.pathname === '/unRegisterWebhook') {
            return unsetWebhook();
        } else {
            return new Response('Not found', { status: 404 });
        }
    }
} satisfies ExportedHandler<Env>;
