import { getEnv } from '../utils/envManager';
import { handleMessage } from './handleMessage';
import { handleCallbackQuery } from './handleCallbackQuery';

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
        await handleMessage(update.message);
    } else if (update.edited_message) {
    } else if (update.channel_post) {
    } else if (update.edited_channel_post) {
    } else if (update.business_connection) {
    } else if (update.business_message) {
    } else if (update.edited_business_message) {
    } else if (update.deleted_business_messages) {
    } else if (update.message_reaction) {
    } else if (update.message_reaction_count) {
    } else if (update.inline_query) {
    } else if (update.chosen_inline_result) {
    } else if (update.callback_query) {
        await handleCallbackQuery(update.callback_query);
    } else if (update.shipping_query) {
    } else if (update.pre_checkout_query) {
    } else if (update.poll) {
    } else if (update.poll_answer) {
    } else if (update.my_chat_member) {
    } else if (update.chat_member) {
    } else if (update.chat_join_request) {
    } else if (update.chat_boost) {
    } else if (update.removed_chat_boost) {
    } else {
        console.log(update);
    }
}
