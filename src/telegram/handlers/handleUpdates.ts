import { getEnv } from '../utils/envManager';

export async function handleWebhook(request: Request): Promise<Response> {
    if (request.headers.get('X-Telegram-Bot-Api-Secret-Token') !== getEnv().SECRET) {
        return new Response('Unauthorized', { status: 403 });
    }
    const update: tgTypes.Update = await request.json();
    await onUpdate(update);

    return new Response(JSON.stringify(update, null, 2));
}

async function onUpdate(update: tgTypes.Update) {
    if (update.message) {
        // handle messages
    } else if (update.edited_message) {
        // handle edited messages
    }
    // handle other update types
}
