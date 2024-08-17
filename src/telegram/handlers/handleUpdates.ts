import { getEnv } from '../utils/envManager';
import { handleMessage } from './handleMessage';
import { handleEditedMessage } from './handleEditedMessage';
import { handleChannelPost } from './handleChannelPost';
import { handleEditedChannelPost } from './handleEditedChannelPost';
import { handleBusinessConnection } from './handleBusinessConnection';
import { handleBusinessMessage } from './handleBusinessMessage';
import { handleEditedBusinessMessage } from './handleEditedBusinessMessage';
import { handleDeletedBusinessMessages } from './handleDeletedBusinessMessages';
import { handleMessageReaction } from './handleMessageReaction';
import { handleMessageReactionCount } from './handleMessageReactionCount';
import { handleInlineQuery } from './handleInlineQuery';
import { handleChosenInlineResult } from './handleChosenInlineResult';
import { handleCallbackQuery } from './handleCallbackQuery';
import { handleShippingQuery } from './handleShippingQuery';
import { handlePreCheckoutQuery } from './handlePreCheckoutQuery';
import { handlePoll } from './handlePoll';
import { handlePollAnswer } from './handlePollAnswer';
import { handleMyChatMember } from './handleMyChatMember';
import { handleChatMember } from './handleChatMember';
import { handleChatJoinRequest } from './handleChatJoinRequest';
import { handleChatBoost } from './handleChatBoost';
import { handleRemovedChatBoost } from './handleRemovedChatBoost';

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
        await handleEditedMessage(update.edited_message);
    } else if (update.channel_post) {
        await handleChannelPost(update.channel_post);
    } else if (update.edited_channel_post) {
        await handleEditedChannelPost(update.edited_channel_post);
    } else if (update.business_connection) {
        await handleBusinessConnection(update.business_connection);
    } else if (update.business_message) {
        await handleBusinessMessage(update.business_message);
    } else if (update.edited_business_message) {
        await handleEditedBusinessMessage(update.edited_business_message);
    } else if (update.deleted_business_messages) {
        await handleDeletedBusinessMessages(update.deleted_business_messages);
    } else if (update.message_reaction) {
        await handleMessageReaction(update.message_reaction);
    } else if (update.message_reaction_count) {
        await handleMessageReactionCount(update.message_reaction_count);
    } else if (update.inline_query) {
        await handleInlineQuery(update.inline_query);
    } else if (update.chosen_inline_result) {
        await handleChosenInlineResult(update.chosen_inline_result);
    } else if (update.callback_query) {
        await handleCallbackQuery(update.callback_query);
    } else if (update.shipping_query) {
        await handleShippingQuery(update.shipping_query);
    } else if (update.pre_checkout_query) {
        await handlePreCheckoutQuery(update.pre_checkout_query);
    } else if (update.poll) {
        await handlePoll(update.poll);
    } else if (update.poll_answer) {
        await handlePollAnswer(update.poll_answer);
    } else if (update.my_chat_member) {
        await handleMyChatMember(update.my_chat_member);
    } else if (update.chat_member) {
        await handleChatMember(update.chat_member);
    } else if (update.chat_join_request) {
        await handleChatJoinRequest(update.chat_join_request);
    } else if (update.chat_boost) {
        await handleChatBoost(update.chat_boost);
    } else if (update.removed_chat_boost) {
        await handleRemovedChatBoost(update.removed_chat_boost);
    } else {
        console.log(update);
    }
}
