import { callApi } from '../utils/apiManager';

export namespace tg {
    /**
     * Use this method to send static .WEBP, [animated](https://telegram.org/blog/animated-stickers) .TGS,
     * or [video](https://telegram.org/blog/video-stickers-better-reactions) .WEBM stickers.
     *
     * [sendSticker - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#sendsticker)
     *
     * @param chat_id `Required`
     * >- Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
     * @param sticker `Required`
     * >- Sticker to send. Pass a file_id as string to send a file that exists on the Telegram servers (recommended),
     * pass an HTTP URL as a string for Telegram to get a .WEBP sticker from the Internet,
     * or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data.
     * [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files).
     * Video and animated stickers can't be sent via an HTTP URL.
     * @param [business_connection_id] `Optional`
     * >- Unique identifier of the business connection on behalf of which the message will be sent
     * @param [message_thread_id] `Optional`
     * >- Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param [emoji] `Optional`
     * >- Emoji associated with the sticker; only for just uploaded stickers
     * @param [disable_notification] `Optional`
     * >- Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages).
     * Users will receive a notification with no sound.
     * @param [protect_content] `Optional`
     * >- Protects the contents of the sent message from forwarding and saving
     * @param [message_effect_id] `Optional`
     * >- Unique identifier of the message effect to be added to the message; for private chats only
     * @param [reply_parameters] `Optional`
     * >- Description of the message to reply to
     * @param [reply_markup] `Optional`
     * >- Additional interface options. A JSON-serialized object for an
     * >  - [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards),
     * >  - [custom reply keyboard](https://core.telegram.org/bots/features#keyboards),
     * >  - instructions to remove a reply keyboard or to force a reply from the user
     * @returns >- On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
     */
    export async function sendSticker(
        {
            chat_id,
            sticker,
            business_connection_id,
            message_thread_id,
            emoji,
            disable_notification,
            protect_content,
            message_effect_id,
            reply_parameters,
            reply_markup,
        }: {
            chat_id: number | string;
            sticker: tgTypes.InputFile | string;
            business_connection_id?: string;
            message_thread_id?: number;
            emoji?: string;
            disable_notification?: boolean;
            protect_content?: boolean;
            message_effect_id?: string;
            reply_parameters?: tgTypes.ReplyParameters;
            reply_markup?: tgTypes.InlineKeyboardMarkup | tgTypes.ReplyKeyboardMarkup | tgTypes.ReplyKeyboardRemove | tgTypes.ForceReply;
        }): Promise<tgTypes.Message> {
        return await callApi('sendSticker', {
            chat_id,
            sticker: JSON.stringify(sticker),
            business_connection_id,
            message_thread_id,
            emoji,
            disable_notification,
            protect_content,
            message_effect_id,
            reply_parameters: JSON.stringify(reply_parameters),
            reply_markup: JSON.stringify(reply_markup),
        });
    }

    /**
     * Use this method to get a sticker set.
     *
     * [getStickerSet - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#getstickerset)
     *
     * @param name `Required`
     * >- Name of the sticker set
     * @returns >- On success, a [StickerSet](https://core.telegram.org/bots/api#stickerset) object is returned.
     */
    export async function getStickerSet(
        {
            name,
        }: {
            name: string;
        }): Promise<tgTypes.StickerSet> {
        return await callApi('getStickerSet', {
            name,
        });
    }

    /**
     * Use this method to get information about custom emoji stickers by their identifiers.
     *
     * [getCustomEmojiStickers - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#getcustomemojistickers)
     *
     * @param custom_emoji_ids `Required`
     * >- A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.
     * @returns >- an Array of [Sticker](https://core.telegram.org/bots/api#sticker) objects.
     */
    export async function getCustomEmojiStickers(
        {
            custom_emoji_ids,
        }: {
            custom_emoji_ids: string[];
        }): Promise<tgTypes.Sticker[]> {
        return await callApi('getCustomEmojiStickers', {
            custom_emoji_ids: JSON.stringify(custom_emoji_ids),
        });
    }

    /**
     * Use this method to upload a file with a sticker for later use in the
     * [createNewStickerSet](https://core.telegram.org/bots/api#createnewstickerset),
     * [addStickerToSet](https://core.telegram.org/bots/api#addstickertoset),
     * or [replaceStickerInSet](https://core.telegram.org/bots/api#replacestickerinset) methods (the file can be used multiple times).
     *
     * [uploadStickerFile - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#uploadstickerfile)
     *
     * @param user_id `Required`
     * >- User identifier of sticker file owner
     * @param sticker `Required`
     * >- A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format.
     * See https://core.telegram.org/stickers for technical requirements.
     * [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)
     * @param sticker_format `Required`
     * >- Format of the sticker, must be one of “static”, “animated”, “video”
     * @returns >- the uploaded [File](https://core.telegram.org/bots/api#file) on success.
     */
    export async function uploadStickerFile(
        {
            user_id,
            sticker,
            sticker_format,
        }: {
            user_id: number;
            sticker: tgTypes.InputFile;
            sticker_format: string;
        }): Promise<tgTypes.File> {
        return await callApi('uploadStickerFile', {
            user_id,
            sticker: JSON.stringify(sticker),
            sticker_format,
        });
    }

    /**
     * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created.
     *
     * [createNewStickerSet - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#createnewstickerset)
     *
     * @param user_id `Required`
     * >- User identifier of created sticker set owner
     * @param name `Required`
     * >- Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals).
     * Can contain only English letters, digits and underscores.
     * Must begin with a letter, can't contain consecutive underscores and must end in "_by_". is case insensitive. 1-64 characters.
     * @param title `Required`
     * >- Sticker set title, 1-64 characters
     * @param stickers `Required`
     * >- A JSON-serialized list of 1-50 initial stickers to be added to the sticker set
     * @param [sticker_type] `Optional`
     * >- Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created.
     * @param [needs_repainting] `Optional`
     * >- Pass true if stickers in the sticker set must be repainted to the color of text when used in messages,
     * the accent color if used as emoji status, white on chat photos, or another appropriate color based on context;
     * for custom emoji sticker sets only
     * @returns >- true on success.
     */
    export async function createNewStickerSet(
        {
            user_id,
            name,
            title,
            stickers,
            sticker_type,
            needs_repainting,
        }: {
            user_id: number;
            name: string;
            title: string;
            stickers: tgTypes.InputSticker[];
            sticker_type?: string;
            needs_repainting?: boolean;
        }): Promise<boolean> {
        return await callApi('createNewStickerSet', {
            user_id,
            name,
            title,
            stickers: JSON.stringify(stickers),
            sticker_type,
            needs_repainting,
        });
    }

    /**
     * Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers.
     * Other sticker sets can have up to 120 stickers.
     *
     * [addStickerToSet - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#addstickertoset)
     *
     * @param user_id `Required`
     * >- User identifier of sticker set owner
     * @param name `Required`
     * >- Sticker set name
     * @param sticker `Required`
     * >- A JSON-serialized object with information about the added sticker.
     * If exactly the same sticker had already been added to the set, then the set isn't changed.
     * @returns >- true on success.
     */
    export async function addStickerToSet(
        {
            user_id,
            name,
            sticker,
        }: {
            user_id: number;
            name: string;
            sticker: tgTypes.InputSticker;
        }): Promise<boolean> {
        return await callApi('addStickerToSet', {
            user_id,
            name,
            sticker: JSON.stringify(sticker),
        });
    }

    /**
     * Use this method to move a sticker in a set created by the bot to a specific position.
     *
     * [setStickerPositionInSet - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#setstickerpositioninset)
     *
     * @param sticker `Required`
     * >- File identifier of the sticker
     * @param position `Required`
     * >- New sticker position in the set, zero-based
     * @returns >- true on success.
     */
    export async function setStickerPositionInSet(
        {
            sticker,
            position,
        }: {
            sticker: string;
            position: number;
        }): Promise<boolean> {
        return await callApi('setStickerPositionInSet', {
            sticker,
            position,
        });
    }

    /**
     * Use this method to delete a sticker from a set created by the bot.
     *
     * [deleteStickerFromSet - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#deletestickerfromset)
     *
     * @param sticker `Required`
     * >- File identifier of the sticker
     * @returns >- true on success.
     */
    export async function deleteStickerFromSet(
        {
            sticker,
        }: {
            sticker: string;
        }): Promise<boolean> {
        return await callApi('deleteStickerFromSet', {
            sticker,
        });
    }

    /**
     * Use this method to replace an existing sticker in a sticker set with a new one.
     * The method is equivalent to calling [deleteStickerFromSet](https://core.telegram.org/bots/api#deletestickerfromset),
     * then [addStickerToSet](https://core.telegram.org/bots/api#addstickertoset),
     * then [setStickerPositionInSet](https://core.telegram.org/bots/api#setstickerpositioninset).
     *
     * [replaceStickerInSet - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#replacestickerinset)
     *
     * @param user_id `Required`
     * >- User identifier of the sticker set owner
     * @param name `Required`
     * >- Sticker set name
     * @param old_sticker `Required`
     * >- File identifier of the replaced sticker
     * @param sticker `Required`
     * >- A JSON-serialized object with information about the added sticker.
     * If exactly the same sticker had already been added to the set, then the set remains unchanged.
     * @returns >- true on success.
     */
    export async function replaceStickerInSet(
        {
            user_id,
            name,
            old_sticker,
            sticker,
        }: {
            user_id: number;
            name: string;
            old_sticker: string;
            sticker: tgTypes.InputSticker;
        }): Promise<boolean> {
        return await callApi('replaceStickerInSet', {
            user_id,
            name,
            old_sticker,
            sticker: JSON.stringify(sticker),
        });
    }

    /**
     * Use this method to change the list of emoji assigned to a regular or custom emoji sticker.
     * The sticker must belong to a sticker set created by the bot.
     *
     * [setStickerEmojiList - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#setstickeremojilist)
     *
     * @param sticker `Required`
     * >- File identifier of the sticker
     * @param emoji_list `Required`
     * >- A JSON-serialized list of 1-20 emoji associated with the sticker
     * @returns >- true on success.
     */
    export async function setStickerEmojiList(
        {
            sticker,
            emoji_list,
        }: {
            sticker: string;
            emoji_list: string[];
        }): Promise<boolean> {
        return await callApi('setStickerEmojiList', {
            sticker,
            emoji_list: JSON.stringify(emoji_list),
        });
    }

    /**
     * Use this method to change search keywords assigned to a regular or custom emoji sticker.
     * The sticker must belong to a sticker set created by the bot.
     *
     * [setStickerKeywords - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#setstickerkeywords)
     *
     * @param sticker `Required`
     * >- File identifier of the sticker
     * @param [keywords] `Optional`
     * >- A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters
     * @returns >- true on success.
     */
    export async function setStickerKeywords(
        {
            sticker,
            keywords,
        }: {
            sticker: string;
            keywords?: string[];
        }): Promise<boolean> {
        return await callApi('setStickerKeywords', {
            sticker,
            keywords: JSON.stringify(keywords),
        });
    }

    /**
     * Use this method to change the [mask position](https://core.telegram.org/bots/api#maskposition) of a mask sticker.
     * The sticker must belong to a sticker set that was created by the bot.
     *
     * [setStickerMaskPosition - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#setstickermaskposition)
     *
     * @param sticker `Required`
     * >- File identifier of the sticker
     * @param [mask_position] `Optional`
     * >- A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.
     * @returns >- true on success.
     */
    export async function setStickerMaskPosition(
        {
            sticker,
            mask_position,
        }: {
            sticker: string;
            mask_position?: tgTypes.MaskPosition;
        }): Promise<boolean> {
        return await callApi('setStickerMaskPosition', {
            sticker,
            mask_position: JSON.stringify(mask_position),
        });
    }

    /**
     * Use this method to set the title of a created sticker set.
     *
     * [setStickerSetTitle - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#setstickersettitle)
     *
     * @param name `Required`
     * >- Sticker set name
     * @param title `Required`
     * >- Sticker set title, 1-64 characters
     * @returns >- true on success.
     */
    export async function setStickerSetTitle(
        {
            name,
            title,
        }: {
            name: string;
            title: string;
        }): Promise<boolean> {
        return await callApi('setStickerSetTitle', {
            name,
            title,
        });
    }

    /**
     * Use this method to set the thumbnail of a regular or mask sticker set.
     * The format of the thumbnail file must match the format of the stickers in the set.
     *
     * [setStickerSetThumbnail - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#setstickersetthumbnail)
     *
     * @param name `Required`
     * >- Sticker set name
     * @param user_id `Required`
     * >- User identifier of the sticker set owner
     * @param format `Required`
     * >- Format of the thumbnail, must be one of “static” for a .WEBP or .PNG image,
     * “animated” for a .TGS animation, or “video” for a WEBM video
     * @param [thumbnail] `Optional`
     * >- A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px,
     * or a .TGS animation with a thumbnail up to 32 kilobytes in size
     * (see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements),
     * or a WEBM video with the thumbnail up to 32 kilobytes in size;
     * see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements.
     * Pass a file_id as a string to send a file that already exists on the Telegram servers,
     * pass an HTTP URL as a string for Telegram to get a file from the Internet, or upload a new one using multipart/form-data.
     * [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files).
     * Animated and video sticker set thumbnails can't be uploaded via HTTP URL.
     * If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.
     * @returns >- true on success.
     */
    export async function setStickerSetThumbnail(
        {
            name,
            user_id,
            format,
            thumbnail,
        }: {
            name: string;
            user_id: number;
            format: string;
            thumbnail?: tgTypes.InputFile | string;
        }): Promise<boolean> {
        return await callApi('setStickerSetThumbnail', {
            name,
            user_id,
            format,
            thumbnail: JSON.stringify(thumbnail),
        });
    }

    /**
     * Use this method to set the thumbnail of a custom emoji sticker set.
     *
     * [setCustomEmojiStickerSetThumbnail - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail)
     *
     * @param name `Required`
     * >- Sticker set name
     * @param [custom_emoji_id] `Optional`
     * >- Custom emoji identifier of a sticker from the sticker set;
     * pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.
     * @returns >- true on success.
     */
    export async function setCustomEmojiStickerSetThumbnail(
        {
            name,
            custom_emoji_id,
        }: {
            name: string;
            custom_emoji_id?: string;
        }): Promise<boolean> {
        return await callApi('setCustomEmojiStickerSetThumbnail', {
            name,
            custom_emoji_id,
        });
    }

    /**
     * Use this method to delete a sticker set that was created by the bot.
     *
     * [deleteStickerSet - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#deletestickerset)
     *
     * @param name `Required`
     * >- Sticker set name
     * @returns >- true on success.
     */
    export async function deleteStickerSet(
        {
            name,
        }: {
            name: string;
        }): Promise<boolean> {
        return await callApi('deleteStickerSet', {
            name,
        });
    }
}
