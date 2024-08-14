import { callApi } from './utils';

export namespace tg {
    /**
     * A simple method for testing your bot's authentication token. Requires no parameters.
     *
     * [getMe - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#getme)
     *
     * @returns >- basic information about the bot in form of a [User](https://core.telegram.org/bots/api#user) object.
     */
    export async function getMe(): Promise<tgTypes.User> {
        return await callApi('getMe');
    }

    /**
     * Use this method to log out from the cloud Bot API server before launching the bot locally.
     * You **must** log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates.
     * After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server
     * for 10 minutes. Requires no parameters.
     *
     * [logOut - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#logout)
     *
     * @returns >- true on success
     */
    export async function logOut(): Promise<boolean> {
        return await callApi('logOut');
    }

    /**
     * Use this method to close the bot instance before moving it from one local server to another.
     * You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart.
     * The method will return error 429 in the first 10 minutes after the bot is launched. Requires no parameters.
     *
     * [close - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#close)
     *
     * @returns >- true on success
     */
    export async function close(): Promise<boolean> {
        return await callApi('close');
    }

    /**
     * Use this method to send text messages.
     *
     * [sendMessage - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#sendmessage)
     *
     * @param chat_id >- Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
     * @param text >- Text of the message to be sent, 1-4096 characters after entities parsing
     * @param [business_connection_id] >- Unique identifier of the business connection on behalf of which the message will be sent
     * @param [message_thread_id] >- Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param [parse_mode] >- Mode for parsing entities in the message text.
     * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
     * @param [entities] >- A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
     * @param [link_preview_options] >- Link preview generation options for the message
     * @param [disable_notification] >- Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages).
     * Users will receive a notification with no sound.
     * @param [protect_content] >- Protects the contents of the sent message from forwarding and saving
     * @param [message_effect_id] >- Unique identifier of the message effect to be added to the message; for private chats only
     * @param [reply_parameters] >- Description of the message to reply to
     * @param [reply_markup]
     * >- Additional interface options. A JSON-serialized object for an
     * >  - [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards),
     * >  - [custom reply keyboard](https://core.telegram.org/bots/features#keyboards),
     * >  - instructions to remove a reply keyboard or to force a reply from the user
     * @returns >- On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
     */
    export async function sendMessage(
        chat_id: number | string,
        text: string,
        business_connection_id?: string,
        message_thread_id?: number,
        parse_mode?: string,
        entities?: tgTypes.MessageEntity[],
        link_preview_options?: tgTypes.LinkPreviewOptions,
        disable_notification?: boolean,
        protect_content?: boolean,
        message_effect_id?: string,
        reply_parameters?: tgTypes.ReplyParameters,
        reply_markup?: tgTypes.InlineKeyboardMarkup | tgTypes.ReplyKeyboardMarkup | tgTypes.ReplyKeyboardRemove | tgTypes.ForceReply
    ): Promise<tgTypes.Message> {
        return await callApi('sendMessage', {
            chat_id,
            text,
            business_connection_id,
            message_thread_id,
            parse_mode,
            entities: JSON.stringify(entities),
            link_preview_options,
            disable_notification,
            protect_content,
            message_effect_id,
            reply_parameters,
            reply_markup: JSON.stringify(reply_markup)
        });
    }

    /**
     * Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded.
     *
     * [forwardMessage - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#forwardmessage)
     *
     * @param chat_id >- Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
     * @param from_chat_id >- Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)
     * @param message_id >- Message identifier in the chat specified in from_chat_id
     * @param [message_thread_id] >- Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param [disable_notification] >- Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages).
     * Users will receive a notification with no sound.
     * @param [protect_content] >- Protects the contents of the forwarded message from forwarding and saving
     * @returns >- On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned
     */
    export async function forwardMessage(
        chat_id: number | string,
        from_chat_id: number | string,
        message_id: number,
        message_thread_id?: number,
        disable_notification?: boolean,
        protect_content?: boolean
    ): Promise<tgTypes.Message> {
        return await callApi('forwardMessage', {
            chat_id,
            from_chat_id,
            message_id,
            message_thread_id,
            disable_notification,
            protect_content
        });
    }

    /**
     * Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped.
     * Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages.
     *
     * [forwardMessages - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#forwardmessages)
     *
     * @param chat_id >- Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
     * @param from_chat_id >- Unique identifier for the chat where the original messages were sent (or channel username in the format `@channelusername`)
     * @param message_ids >- A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to forward.
     * The identifiers must be specified in a strictly increasing order.
     * @param [message_thread_id] >- Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param [disable_notification] >- Sends the messages [silently](https://telegram.org/blog/channels-2-0#silent-messages).
     * Users will receive a notification with no sound.
     * @param [protect_content] >- Protects the contents of the forwarded messages from forwarding and saving
     * @returns >- On success, an array of [MessageId](https://core.telegram.org/bots/api#messageid) of the sent messages is returned.
     */
    export async function forwardMessages(
        chat_id: number | string,
        from_chat_id: number | string,
        message_ids: number[],
        message_thread_id?: number,
        disable_notification?: boolean,
        protect_content?: boolean
    ): Promise<tgTypes.MessageId[]> {
        return await callApi('forwardMessages', {
            chat_id,
            from_chat_id,
            message_ids: JSON.stringify(message_ids),
            message_thread_id,
            disable_notification,
            protect_content
        });
    }

    /**
     * Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages,
     * giveaway winners messages, and invoice messages can't be copied.
     * A quiz [poll](https://core.telegram.org/bots/api#poll) can be copied only if the value of the field correct_option_id is known to the bot.
     * The method is analogous to the method [forwardMessage](https://core.telegram.org/bots/api#forwardmessage),
     * but the copied message doesn't have a link to the original message.
     *
     * [copyMessage - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#copymessage)
     *
     * @param chat_id >- Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
     * @param from_chat_id >- Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)
     * @param message_id >- Message identifier in the chat specified in from_chat_id
     * @param [message_thread_id] >- Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param [caption] >- New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
     * @param [parse_mode] >- Mode for parsing entities in the new caption.
     * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
     * @param [caption_entities] >- A JSON-serialized list of special entities that appear in the new caption,
     * which can be specified instead of parse_mode
     * @param [show_caption_above_media] >- Pass True, if the caption must be shown above the message media.
     * Ignored if a new caption isn't specified.
     * @param [disable_notification] >- Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages).
     * Users will receive a notification with no sound.
     * @param [protect_content] >- Protects the contents of the sent message from forwarding and saving
     * @param [reply_parameters] >- Description of the message to reply to
     * @param [reply_markup]
     * >- Additional interface options. A JSON-serialized object for an
     * >  - [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards),
     * >  - [custom reply keyboard](https://core.telegram.org/bots/features#keyboards),
     * >  - instructions to remove a reply keyboard or to force a reply from the user
     * @returns >- the [MessageId](https://core.telegram.org/bots/api#messageid) of the sent message on success.
     */
    export async function copyMessage(
        chat_id: number | string,
        from_chat_id: number | string,
        message_id: number,
        message_thread_id?: number,
        caption?: string,
        parse_mode?: string,
        caption_entities?: tgTypes.MessageEntity[],
        show_caption_above_media?: boolean,
        disable_notification?: boolean,
        protect_content?: boolean,
        reply_parameters?: tgTypes.ReplyParameters,
        reply_markup?: tgTypes.InlineKeyboardMarkup | tgTypes.ReplyKeyboardMarkup | tgTypes.ReplyKeyboardRemove | tgTypes.ForceReply
    ): Promise<tgTypes.MessageId> {
        return await callApi('copyMessage', {
            chat_id,
            from_chat_id,
            message_id,
            message_thread_id,
            caption,
            parse_mode,
            caption_entities,
            show_caption_above_media,
            disable_notification,
            protect_content,
            reply_parameters,
            reply_markup
        });
    }
}
