import { getEnv } from './envManager';
import * as handlers from '../handlers';

export async function handleWebhook(request: Request): Promise<Response> {
    if (request.headers.get('X-Telegram-Bot-Api-Secret-Token') !== getEnv().SECRET) {
        return new Response('Unauthorized', { status: 403 });
    }
    const update: tgTypes.Update = await request.json();
    await onUpdate(update);

    return new Response(JSON.stringify(update, null, 2));
}

const updateHandlers: Map<keyof tgTypes.Update, (update: any) => Promise<void>> = new Map([
    ['message', (update) => handlers.handleMessage(update as tgTypes.Message)],
    ['edited_message', (update) => handlers.handleEditedMessage(update as tgTypes.Message)],
    ['channel_post', (update) => handlers.handleChannelPost(update as tgTypes.Message)],
    ['edited_channel_post', (update) => handlers.handleEditedChannelPost(update as tgTypes.Message)],
    ['business_connection', (update) => handlers.handleBusinessConnection(update as tgTypes.BusinessConnection)],
    ['business_message', (update) => handlers.handleBusinessMessage(update as tgTypes.Message)],
    ['edited_business_message', (update) => handlers.handleEditedBusinessMessage(update as tgTypes.Message)],
    ['deleted_business_messages', (update) => handlers.handleDeletedBusinessMessages(update as tgTypes.BusinessMessagesDeleted)],
    ['message_reaction', (update) => handlers.handleMessageReaction(update as tgTypes.MessageReactionUpdated)],
    ['message_reaction_count', (update) => handlers.handleMessageReactionCount(update as tgTypes.MessageReactionCountUpdated)],
    ['inline_query', (update) => handlers.handleInlineQuery(update as tgTypes.InlineQuery)],
    ['chosen_inline_result', (update) => handlers.handleChosenInlineResult(update as tgTypes.ChosenInlineResult)],
    ['callback_query', (update) => handlers.handleCallbackQuery(update as tgTypes.CallbackQuery)],
    ['shipping_query', (update) => handlers.handleShippingQuery(update as tgTypes.ShippingQuery)],
    ['pre_checkout_query', (update) => handlers.handlePreCheckoutQuery(update as tgTypes.PreCheckoutQuery)],
    ['poll', (update) => handlers.handlePoll(update as tgTypes.Poll)],
    ['poll_answer', (update) => handlers.handlePollAnswer(update as tgTypes.PollAnswer)],
    ['my_chat_member', (update) => handlers.handleMyChatMember(update as tgTypes.ChatMemberUpdated)],
    ['chat_member', (update) => handlers.handleChatMember(update as tgTypes.ChatMemberUpdated)],
    ['chat_join_request', (update) => handlers.handleChatJoinRequest(update as tgTypes.ChatJoinRequest)],
    ['chat_boost', (update) => handlers.handleChatBoost(update as tgTypes.ChatBoostUpdated)],
    ['removed_chat_boost', (update) => handlers.handleRemovedChatBoost(update as tgTypes.ChatBoostRemoved)],
]);

async function onUpdate(update: tgTypes.Update) {
    try {
        for (const [key, handler] of updateHandlers) {
            if (update[key]) {
                await handler(update[key]);
                break;
            }
        }
    } catch (error) {
        console.error('Error handling update:', error);
    }
}
