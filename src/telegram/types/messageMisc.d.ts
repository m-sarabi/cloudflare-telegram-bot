declare namespace Telegram {
    /**
     * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
     *
     * [MessageEntity - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messageentity)
     */
    interface MessageEntity {
        /**
         * Type of the entity. Currently, can be "mention" (`@username`), "hashtag" (`#hashtag`), "cashtag" (`$USD`),
         * "bot_command" (`/start@jobs_bot`), "url" (`https://telegram.org`), "email" (`do-not-reply@telegram.org`),
         * "phone_number" (`+1-212-555-0123`), "bold" (bold text), "italic" (italic text),
         * "underline" (underlined text), "strikethrough" (strikethrough text), "spoiler" (spoiler message),
         * "blockquote" (block quotation), "expandable_blockquote" (collapsed-by-default block quotation),
         * "code" (monowidth string), "pre" (monowidth block), "text_link" (for clickable text URLs), "text_mention"
         * (for users [without usernames](https://telegram.org/blog/edit#new-mentions)),
         * "custom_emoji" (for inline custom emoji stickers)
         */
        type: 'mention' | 'hashtag' | 'cashtag' | 'bot_command' | 'url' | 'email' | 'phone_number' | 'bold' |
            'italic' | 'underline' | 'strikethrough' | 'spoiler' | 'blockquote' | 'expandable_blockquote' | 'code' |
            'pre' | 'text_link' | 'text_mention' | 'custom_emoji';
        /**
         * Offset in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length) to the start of the entity
         */
        offset: number;
        /**
         * Length of the entity in [UTF-16 code units](https://core.telegram.org/api/entities#entity-length)
         */
        length: number;
        /**
         * _Optional_. For "text_link" only, URL that will be opened after user taps on the text
         */
        url?: string;
        /**
         * _Optional_. For "text_mention" only, the mentioned user
         */
        user?: Telegram.User;
        /**
         * _Optional_. For "pre" only, the programming language of the entity text
         */
        language?: string;
        /**
         * _Optional_. For "custom_emoji" only, unique identifier of the custom emoji.
         * Use [getCustomEmojiStickers](https://core.telegram.org/bots/api#getcustomemojistickers) to get full information about the sticker
         */
        custom_emoji_id?: string;
    }

    /**
     * This object contains information about the quoted part of a message that is replied to by the given message.
     *
     * [TextQuote - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#textquote)
     */
    interface TextQuote {
        /**
         * Text of the quoted part of a message that is replied to by the given message
         */
        text: string;
        /**
         * _Optional_. Special entities that appear in the quote.
         * Currently, only `bold`, `italic`, `underline`, `strikethrough`, `spoiler`, and `custom_emoji` entities are kept in quotes.
         */
        entities?: Telegram.MessageEntity[];
        /**
         * Approximate quote position in the original message in UTF-16 code units as specified by the sender
         */
        position: number;
        /**
         * _Optional_. True, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server.
         */
        is_manual?: true;
    }

    /**
     * This object contains information about a message that is being replied to, which may come from another chat or forum topic.
     *
     * [ExternalReplyInfo - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#externalreplyinfo)
     */
    interface ExternalReplyInfo {
        /**
         * Origin of the message replied to by the given message
         */
        origin: Telegram.MessageOrigin;
        /**
         * _Optional_. Chat the original message belongs to. Available only if the chat is a supergroup or a channel.
         */
        chat?: Telegram.Chat;
        /**
         * _Optional_. Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel.
         */
        message_id?: number;
        /**
         * _Optional_. Options used for link preview generation for the original message, if it is a text message
         */
        link_preview_options?: Telegram.LinkPreviewOptions;
        /**
         * _Optional_. Message is an animation, information about the animation
         */
        animation?: Telegram.Animation;
        /**
         * _Optional_. Message is an audio file, information about the file
         */
        audio?: Telegram.Audio;
        /**
         * _Optional_. Message is a general file, information about the file
         */
        document?: Telegram.Document;
        /**
         * _Optional_. Message contains paid media; information about the paid media
         */
        paid_media?: Telegram.PaidMediaInfo;
        /**
         * _Optional_. Message is a photo, available sizes of the photo
         */
        photo?: Telegram.PhotoSize[];
        /**
         * _Optional_. Message is a sticker, information about the sticker
         */
        sticker?: Telegram.Sticker;
        /**
         * _Optional_. Message is a forwarded story
         */
        story?: Telegram.Story;
        /**
         * _Optional_. Message is a video, information about the video
         */
        video?: Telegram.Video;
        /**
         * _Optional_. Message is a video note, information about the video message
         */
        video_note?: Telegram.VideoNote;
        /**
         * _Optional_. Message is a voice message, information about the file
         */
        voice?: Telegram.Voice;
        /**
         * _Optional_. True, if the message media is covered by a spoiler animation
         */
        has_media_spoiler?: true;
        /**
         * _Optional_. Message is a shared contact, information about the contact
         */
        contact?: Telegram.Contact;
        /**
         * _Optional_. Message is a dice with random value
         */
        dice?: Telegram.Dice;
        /**
         * _Optional_. Message is a game, information about the game. [More about games »](https://core.telegram.org/bots/api#games)
         */
        game?: Telegram.Game;
        /**
         * _Optional_. Message is a scheduled giveaway, information about the giveaway
         */
        giveaway?: Telegram.Giveaway;
        /**
         * _Optional_. A giveaway with public winners was completed
         */
        giveaway_winners?: Telegram.GiveawayWinners;
        /**
         * _Optional_. Message is an invoice for a [payment](https://core.telegram.org/bots/api#payments),
         * information about the invoice. [More about payments »](https://core.telegram.org/bots/api#payments)
         */
        invoice?: Telegram.Invoice;
        /**
         * _Optional_. Message is a shared location, information about the location
         */
        location?: Telegram.Location;
        /**
         * _Optional_. Message is a native poll, information about the poll
         */
        poll?: Telegram.Poll;
        /**
         * _Optional_. Message is a venue, information about the venue
         */
        venue?: Telegram.Venue;
    }

    /**
     * Describes reply parameters for the message that is being sent.
     *
     * [ReplyParameters - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#replyparameters)
     */
    interface ReplyParameters {
        /**
         * Identifier of the message that will be replied to in the current chat, or in the chat chat_id if it is specified
         */
        message_id: number;
        /**
         * _Optional_. If the message to be replied to is from a different chat,
         * unique identifier for the chat or username of the channel (in the format `@channelusername`).
         * Not supported for messages sent on behalf of a business account.
         */
        chat_id?: number | string;
        /**
         * _Optional_. Pass True if the message should be sent even if the specified message to be replied to is not found.
         * Always False for replies in another chat or forum topic. Always True for messages sent on behalf of a business account.
         */
        allow_sending_without_reply?: boolean;
        /**
         * _Optional_. Quoted part of the message to be replied to; 0-1024 characters after entities parsing.
         * The quote must be an exact substring of the message to be replied to, including `bold`, `italic`, `underline`,
         * `strikethrough`, `spoiler`, and `custom_emoji` entities.
         * The message will fail to send if the quote isn't found in the original message.
         */
        quote?: string;
        /**
         * _Optional_. Mode for parsing entities in the quote.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        quote_parse_mode?: string;
        /**
         * _Optional_. A JSON-serialized list of special entities that appear in the quote.
         * It can be specified instead of quote_parse_mode.
         */
        quote_entities?: Telegram.MessageEntity[];
        /**
         * _Optional_. Position of the quote in the original message in UTF-16 code units
         */
        quote_position?: number;
    }

    /**
     * This object describes the origin of a message. It can be one of
     *
     * [MessageOrigin - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messageorigin)
     */
    type MessageOrigin =
        Telegram.MessageOriginUser
        | Telegram.MessageOriginHiddenUser
        | Telegram.MessageOriginChat
        | Telegram.MessageOriginChannel;

    /**
     * The message was originally sent by a known user.
     *
     * [MessageOriginUser - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messageoriginuser)
     */
    interface MessageOriginUser {
        /**
         * Type of the message origin, always “user”
         */
        type: 'user';
        /**
         * Date the message was sent originally in Unix time
         */
        date: number;
        /**
         * User that sent the message originally
         */
        sender_user: Telegram.User;
    }

    /**
     * The message was originally sent by an unknown user.
     *
     * [MessageOriginHiddenUser - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messageoriginhiddenuser)
     */
    interface MessageOriginHiddenUser {
        /**
         * Type of the message origin, always “hidden_user”
         */
        type: 'hidden_user';
        /**
         * Date the message was sent originally in Unix time
         */
        date: number;
        /**
         * Name of the user that sent the message originally
         */
        sender_user_name: string;
    }

    /**
     * The message was originally sent on behalf of a chat to a group chat.
     *
     * [MessageOriginChat - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messageoriginchat)
     */
    interface MessageOriginChat {
        /**
         * Type of the message origin, always “chat”
         */
        type: 'chat';
        /**
         * Date the message was sent originally in Unix time
         */
        date: number;
        /**
         * Chat that sent the message originally
         */
        sender_chat: Telegram.Chat;
        /**
         * _Optional_. For messages originally sent by an anonymous chat administrator, original message author signature
         */
        author_signature: string;
    }

    /**
     * The message was originally sent to a channel chat.
     *
     * [MessageOriginChannel - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messageoriginchannel)
     */
    interface MessageOriginChannel {
        /**
         * Type of the message origin, always “channel”
         */
        type: 'channel';
        /**
         * Date the message was sent originally in Unix time
         */
        date: number;
        /**
         * Channel chat to which the message was originally sent
         */
        chat: Telegram.Chat;
        /**
         * Unique message identifier inside the chat
         */
        message_id: number;
        /**
         * _Optional_. Signature of the original post author
         */
        author_signature: string;
    }
}
