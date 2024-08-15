import { getEnv } from '../envManagar';
import { apiUrl, response } from './lib/utils';
import { tg } from './lib/methods';

export async function setWebhook(url: URL, suffix: string) {
    const webhookUrl = `${url.protocol}//${url.hostname}${suffix}`;
    const response: response = await (await (fetch(apiUrl('setWebhook', {
        url: webhookUrl,
        secret_token: getEnv().SECRET
    })))).json();

    return new Response(JSON.stringify(response, null, 2));
}

export async function unsetWebhook() {
    const response: response = await (await (fetch(apiUrl('setWebhook', { url: '' })))).json();
    return new Response(JSON.stringify(response, null, 2));
}

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
        const message = update.message;
        let result;
        if (message.text === 'reaction') {
            const botInto = await tg.getMe();
            const reaction: tgTypes.ReactionTypeEmoji = { type: 'emoji', emoji: '🫡' };
            result = await tg.setMessageReaction({
                chat_id: message.chat.id,
                message_id: message.message_id,
                reaction: [reaction]
            });
            console.log(botInto.username);
        } else if (message.text === 'location') {
            result = await tg.sendLocation({
                chat_id: message.chat.id,
                latitude: 35.525660354512965,
                longitude: 51.17193735279942
            });
        } else if (message.text === 'message') {
            result = await tg.sendMessage({
                chat_id: message.chat.id,
                text: 'message back to you!'
            });
        } else if (message.text === 'type') {
            result = await tg.sendChatAction({
                chat_id: message.chat.id,
                action: 'typing'
            });
        } else if (message.text === 'venue') {
            result = await tg.sendVenue({
                chat_id: message.chat.id,
                latitude: 35.525660354512965,
                longitude: 51.17193735279942,
                title: 'Funzen Co.',
                address: 'گلستان، خیابان قبادی، کوچه بنفشه یک، ساختمان یاس',
                foursquare_id: '63be6904847c3692a84b9b91'
            });
        }
        result && console.log(result);
    }
}
