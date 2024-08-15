import { setEnv } from './envManagar';
import { handleWebhook } from './handleUpdates';
import { tg } from './telegram/lib/methods';

// use `npm run cf-typegen` to regenerate `worker-configuration.d.ts`
export interface Env {
    SECRET: string;  // Telegram bot API secret
    TOKEN: string;   // Telegram bot API token
    // Add more environment variables here
}

const WEBHOOK: string = '/endpoint';
const REGISTER: string = '/registerWebhook';
const UNREGISTER: string = '/unRegisterWebhook';

export default {
    async fetch(request, env, ctx): Promise<Response> {
        setEnv(env);
        const url: URL = new URL(request.url);

        if (url.pathname === WEBHOOK) {
            return handleWebhook(request);
        } else if (url.pathname === REGISTER) {
            try {
                const result = await tg.setWebhook({
                    url: `${url.protocol}//${url.hostname}${WEBHOOK}`,
                });
                if (result) return new Response('Webhook registered.');
                else return new Response('Failed to register webhook.');
            } catch (error) {
                return new Response(`Error: ${error}`);
            }
        } else if (url.pathname === UNREGISTER) {
            try {
                const result = await tg.setWebhook({
                    url: '',
                });
                if (result) return new Response('Webhook unregistered.');
                else return new Response('Failed to unregister webhook.');
            } catch (error) {
                return new Response(`Error: ${error}`);
            }
        } else {
            return new Response('Not found', { status: 404 });
        }
    },
} satisfies ExportedHandler<Env>;
