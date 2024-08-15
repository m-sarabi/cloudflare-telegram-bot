import { callApi } from './utils';

export namespace tg {
    /**
     * Use this method to edit text and [game](https://core.telegram.org/bots/api#games) messages.
     * Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited
     * within **48 hours** from the time they were sent.
     *
     * [editMessageText - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#editmessagetext)
     *
     * @param text `Required`
     * >- New text of the message, 1-4096 characters after entities parsing
     * @param [business_connection_id] `Optional`
     * >- Unique identifier of the business connection on behalf of which the message to be edited was sent
     * @param [chat_id] `Optional`
     * >- Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel
     * (in the format `@channelusername`)
     * @param [message_id] `Optional`
     * >- Required if inline_message_id is not specified. Identifier of the message to edit
     * @param [inline_message_id] `Optional`
     * >- Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param [parse_mode] `Optional`
     * >- Mode for parsing entities in the message text.
     * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
     * @param [entities] `Optional`
     * >- A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode
     * @param [link_preview_options] `Optional`
     * >- Link preview generation options for the message
     * @param [reply_markup] `Optional`
     * >- A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).
     * @returns >- On success, if the edited message is not an inline message,
     * the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise true is returned.
     */
    export async function editMessageText(
        {
            text,
            business_connection_id,
            chat_id,
            message_id,
            inline_message_id,
            parse_mode,
            entities,
            link_preview_options,
            reply_markup,
        }: {
            text: string;
            business_connection_id?: string;
            chat_id?: number | string;
            message_id?: number;
            inline_message_id?: string;
            parse_mode?: string;
            entities?: tgTypes.MessageEntity[];
            link_preview_options?: tgTypes.LinkPreviewOptions;
            reply_markup?: tgTypes.InlineKeyboardMarkup;
        }): Promise<tgTypes.Message | boolean> {
        return await callApi('editMessageText', {
            text,
            business_connection_id,
            chat_id,
            message_id,
            inline_message_id,
            parse_mode,
            entities: JSON.stringify(entities),
            link_preview_options: JSON.stringify(link_preview_options),
            reply_markup: JSON.stringify(reply_markup),
        });
    }

    /**
     * Use this method to edit captions of messages. Note that business messages that were not sent by the bot and do not contain an
     * inline keyboard can only be edited within **48 hours** from the time they were sent.
     *
     * [editMessageCaption - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#editmessagecaption)
     *
     * @param [business_connection_id] `Optional`
     * >- Unique identifier of the business connection on behalf of which the message to be edited was sent
     * @param [chat_id] `Optional`
     * >- Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel
     * (in the format `@channelusername`)
     * @param [message_id] `Optional`
     * >- Required if inline_message_id is not specified. Identifier of the message to edit
     * @param [inline_message_id] `Optional`
     * >- Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param [caption] `Optional`
     * >- New caption of the message, 0-1024 characters after entities parsing
     * @param [parse_mode] `Optional`
     * >- Mode for parsing entities in the message caption.
     * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
     * @param [caption_entities] `Optional`
     * >- A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param [show_caption_above_media] `Optional`
     * >- Pass true, if the caption must be shown above the message media. Supported only for animation, photo and video messages.
     * @param [reply_markup] `Optional`
     * >- A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).
     * @returns >- On success, if the edited message is not an inline message,
     * the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise true is returned.
     */
    export async function editMessageCaption(
        {
            business_connection_id,
            chat_id,
            message_id,
            inline_message_id,
            caption,
            parse_mode,
            caption_entities,
            show_caption_above_media,
            reply_markup,
        }: {
            business_connection_id?: string;
            chat_id?: number | string;
            message_id?: number;
            inline_message_id?: string;
            caption?: string;
            parse_mode?: string;
            caption_entities?: tgTypes.MessageEntity[];
            show_caption_above_media?: boolean;
            reply_markup?: tgTypes.InlineKeyboardMarkup;
        }): Promise<tgTypes.Message | boolean> {
        return await callApi('editMessageCaption', {
            business_connection_id,
            chat_id,
            message_id,
            inline_message_id,
            caption,
            parse_mode,
            caption_entities: JSON.stringify(caption_entities),
            show_caption_above_media,
            reply_markup: JSON.stringify(reply_markup),
        });
    }

    /**
     * Use this method to edit animation, audio, document, photo, or video messages.
     * If a message is part of a message album, then it can be edited only to an audio for audio albums,
     * only to a document for document albums and to a photo or a video otherwise.
     * When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id
     * or specify a URL.
     * Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited
     * within **48 hours** from the time they were sent.
     *
     * [editMessageMedia - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#editmessagemedia)
     *
     * @param media `Required`
     * >- A JSON-serialized object for a new media content of the message
     * @param [business_connection_id] `Optional`
     * >- Unique identifier of the business connection on behalf of which the message to be edited was sent
     * @param [chat_id] `Optional`
     * >- Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel
     * (in the format `@channelusername`)
     * @param [message_id] `Optional`
     * >- Required if inline_message_id is not specified. Identifier of the message to edit
     * @param [inline_message_id] `Optional`
     * >- Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param [reply_markup] `Optional`
     * >- A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).
     * @returns >- On success, if the edited message is not an inline message,
     * the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise true is returned.
     */
    export async function editMessageMedia(
        {
            media,
            business_connection_id,
            chat_id,
            message_id,
            inline_message_id,
            reply_markup,
        }: {
            media: tgTypes.InputMedia;
            business_connection_id?: string;
            chat_id?: number | string;
            message_id?: number;
            inline_message_id?: string;
            reply_markup?: tgTypes.InlineKeyboardMarkup;
        }): Promise<tgTypes.Message | boolean> {
        return await callApi('editMessageMedia', {
            media: JSON.stringify(media),
            business_connection_id,
            chat_id,
            message_id,
            inline_message_id,
            reply_markup: JSON.stringify(reply_markup),
        });
    }

    /**
     * Use this method to edit live location messages. A location can be edited until its live_period expires
     * or editing is explicitly disabled by a call to [stopMessageLiveLocation](https://core.telegram.org/bots/api#stopmessagelivelocation).
     *
     * [editMessageLiveLocation - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#editmessagelivelocation)
     *
     * @param latitude `Required`
     * >- Latitude of new location
     * @param longitude `Required`
     * >- Longitude of new location
     * @param [business_connection_id] `Optional`
     * >- Unique identifier of the business connection on behalf of which the message to be edited was sent
     * @param [chat_id] `Optional`
     * >- Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel
     * (in the format `@channelusername`)
     * @param [message_id] `Optional`
     * >- Required if inline_message_id is not specified. Identifier of the message to edit
     * @param [inline_message_id] `Optional`
     * >- Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param [live_period] `Optional`
     * >- New period in seconds during which the location can be updated, starting from the message send date.
     * If 0x7FFFFFFF is specified, then the location can be updated forever.
     * Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date
     * must remain within the next 90 days. If not specified, then live_period remains unchanged
     * @param [horizontal_accuracy] `Optional`
     * >- The radius of uncertainty for the location, measured in meters; 0-1500
     * @param [heading] `Optional`
     * >- Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
     * @param [proximity_alert_radius] `Optional`
     * >- The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
     * @param [reply_markup] `Optional`
     * >- A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).
     * @returns >- On success, if the edited message is not an inline message,
     * the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise true is returned.
     */
    export async function editMessageLiveLocation(
        {
            latitude,
            longitude,
            business_connection_id,
            chat_id,
            message_id,
            inline_message_id,
            live_period,
            horizontal_accuracy,
            heading,
            proximity_alert_radius,
            reply_markup,
        }: {
            latitude: number;
            longitude: number;
            business_connection_id?: string;
            chat_id?: number | string;
            message_id?: number;
            inline_message_id?: string;
            live_period?: number;
            horizontal_accuracy?: number;
            heading?: number;
            proximity_alert_radius?: number;
            reply_markup?: tgTypes.InlineKeyboardMarkup;
        }): Promise<tgTypes.Message | boolean> {
        return await callApi('editMessageLiveLocation', {
            latitude,
            longitude,
            business_connection_id,
            chat_id,
            message_id,
            inline_message_id,
            live_period,
            horizontal_accuracy,
            heading,
            proximity_alert_radius,
            reply_markup: JSON.stringify(reply_markup),
        });
    }

    /**
     * Use this method to stop updating a live location message before live_period expires.
     *
     * [stopMessageLiveLocation - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#stopmessagelivelocation)
     *
     * @param [business_connection_id] `Optional`
     * >- Unique identifier of the business connection on behalf of which the message to be edited was sent
     * @param [chat_id] `Optional`
     * >- Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel
     * (in the format `@channelusername`)
     * @param [message_id] `Optional`
     * >- Required if inline_message_id is not specified. Identifier of the message with live location to stop
     * @param [inline_message_id] `Optional`
     * >- Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param [reply_markup] `Optional`
     * >- A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).
     * @returns >- On success, if the message is not an inline message,
     * the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise true is returned.
     */
    export async function stopMessageLiveLocation(
        {
            business_connection_id,
            chat_id,
            message_id,
            inline_message_id,
            reply_markup,
        }: {
            business_connection_id?: string;
            chat_id?: number | string;
            message_id?: number;
            inline_message_id?: string;
            reply_markup?: tgTypes.InlineKeyboardMarkup;
        }): Promise<tgTypes.Message | boolean> {
        return await callApi('stopMessageLiveLocation', {
            business_connection_id,
            chat_id,
            message_id,
            inline_message_id,
            reply_markup: JSON.stringify(reply_markup),
        });
    }
}
