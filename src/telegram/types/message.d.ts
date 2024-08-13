declare namespace tgTypes {
    /**
     * This object represents a message.
     *
     * [Message - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#message)
     */
    interface Message {
        /**
         * Unique message identifier inside this chat
         */
        message_id: number;
        /**
         * _Optional_. Unique identifier of a message thread to which the message belongs; for supergroups only
         */
        message_thread_id?: number;
        /**
         * _Optional_. Sender of the message; empty for messages sent to channels.
         */
        from?: tgTypes.User;
        /**
         * _Optional_. Sender of the message, sent on behalf of a chat.
         * For example, the channel itself for channel posts,
         * the supergroup itself for messages from anonymous group administrators,
         * the linked channel for messages automatically forwarded to the discussion group.
         */
        sender_chat?: tgTypes.Chat;
        /**
         * _Optional_. If the sender of the message boosted the chat, the number of boosts added by the user
         */
        sender_boost_count?: number;
        /**
         * _Optional_. The bot that actually sent the message on behalf of the business account.
         * Available only for outgoing messages sent on behalf of the connected business account.
         */
        sender_business_bot?: tgTypes.User;
        /**
         * Date the message was sent in Unix time. It is always a positive number, representing a valid date.
         */
        date: number;
        /**
         * _Optional_. Unique identifier of the business connection from which the message was received.
         * If non-empty, the message belongs to a chat of the corresponding business account that is independent from
         * any potential bot chat which might share the same identifier.
         */
        business_connection_id?: string;
        /**
         * Chat the message belongs to
         */
        chat: tgTypes.Chat;
        /**
         * _Optional_. Information about the original message for forwarded messages
         */
        forward_origin?: tgTypes.MessageOrigin;
        /**
         * _Optional_. True, if the message is sent to a forum topic
         */
        is_topic_message?: true;
        /**
         * _Optional_. True, if the message is a channel post that was automatically forwarded to the connected discussion group
         */
        is_automatic_forward?: true;
        /**
         * _Optional_. For replies in the same chat and message thread, the original message.
         * Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
         */
        reply_to_message?: tgTypes.Message;
        /**
         * _Optional_. Information about the message that is being replied to, which may come from another chat or forum topic
         */
        external_reply?: tgTypes.ExternalReplyInfo;
        /**
         * _Optional_. For replies that quote part of the original message, the quoted part of the message
         */
        quote?: tgTypes.TextQuote;
        /**
         * _Optional_. For replies to a story, the original story
         */
        reply_to_story?: tgTypes.Story;
        /**
         * _Optional_. Bot through which the message was sent
         */
        via_bot?: tgTypes.User;
        /**
         * _Optional_. Date the message was last edited in Unix time
         */
        edit_date?: number;
        /**
         * _Optional_. True, if the message can't be forwarded
         */
        has_protected_content?: true;
        /**
         * _Optional_. True, if the message was sent by an implicit action,
         * for example, as an away or a greeting business message, or as a scheduled message
         */
        is_from_offline?: true;
        /**
         * _Optional_. The unique identifier of a media message group this message belongs to
         */
        media_group_id?: string;
        /**
         * _Optional_. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
         */
        author_signature?: string;
        /**
         * _Optional_. For text messages, the actual UTF-8 text of the message
         */
        text?: string;
        /**
         * _Optional_. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
         */
        entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Options used for link preview generation for the message, if it is a text message and link preview options were changed
         */
        link_preview_options?: tgTypes.LinkPreviewOptions;
        /**
         * _Optional_. Unique identifier of the message effect added to the message
         */
        effect_id?: string;
        /**
         * _Optional_. Message is an animation, information about the animation.
         * For backward compatibility, when this field is set, the document field will also be set
         */
        animation?: tgTypes.Animation;
        /**
         * _Optional_. Message is an audio file, information about the file
         */
        audio?: tgTypes.Audio;
        /**
         * _Optional_. Message is a general file, information about the file
         */
        document?: tgTypes.Document;
        /**
         * _Optional_. Message contains paid media; information about the paid media
         */
        paid_media?: tgTypes.PaidMediaInfo;
        /**
         * _Optional_. Message is a photo, available sizes of the photo
         */
        photo?: tgTypes.PhotoSize[];
        /**
         * _Optional_. Message is a sticker, information about the sticker
         */
        sticker?: tgTypes.Sticker;
        /**
         * _Optional_. Message is a forwarded story
         */
        story?: tgTypes.Story;
        /**
         * _Optional_. Message is a video, information about the video
         */
        video?: tgTypes.Video;
        /**
         * _Optional_. Message is a [video note](https://telegram.org/blog/video-messages-and-telescope), information about the video message
         */
        video_note?: tgTypes.VideoNote;
        /**
         * _Optional_. Message is a voice message, information about the file
         */
        voice?: tgTypes.Voice;
        /**
         * _Optional_. Caption for the animation, audio, document, paid media, photo, video or voice
         */
        caption?: string;
        /**
         * _Optional_. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
         */
        caption_entities?: tgTypes.MessageEntity;
        /**
         * _Optional_. True, if the caption must be shown above the message media
         */
        show_caption_above_media?: true;
        /**
         * _Optional_. True, if the message media is covered by a spoiler animation
         */
        has_media_spoiler?: true;
        /**
         * _Optional_. Message is a shared contact, information about the contact
         */
        contact?: tgTypes.Contact;
        /**
         * _Optional_. Message is a dice with random value
         */
        dice?: tgTypes.Dice;
        /**
         * _Optional_. Message is a game, information about the game. [More about games »](https://core.telegram.org/bots/api#games)
         */
        game?: tgTypes.Game;
        /**
         * _Optional_. Message is a native poll, information about the poll
         */
        poll?: tgTypes.Poll;
        /**
         * _Optional_. Message is a venue, information about the venue.
         * For backward compatibility, when this field is set, the location field will also be set
         */
        venue?: tgTypes.Venue;
        /**
         * _Optional_. Message is a shared location, information about the location
         */
        location?: tgTypes.Location;
        /**
         * _Optional_. New members that were added to the group or supergroup and information about them
         * (the bot itself may be one of these members)
         */
        new_chat_members?: tgTypes.User[];
        /**
         * _Optional_. A member was removed from the group, information about them (this member may be the bot itself)
         */
        left_chat_member?: tgTypes.User;
        /**
         * _Optional_. A chat title was changed to this value
         */
        new_chat_title?: string;
        /**
         * _Optional_. A chat photo was change to this value
         */
        new_chat_photo?: tgTypes.PhotoSize[];
        /**
         * _Optional_. Service message: the chat photo was deleted
         */
        delete_chat_photo?: true;
        /**
         * _Optional_. Service message: the group has been created
         */
        group_chat_created?: true;
        /**
         * _Optional_. Service message: the supergroup has been created.
         * This field can't be received in a message coming through updates,
         * because bot can't be a member of a supergroup when it is created.
         * It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
         */
        supergroup_chat_created?: true;
        /**
         * _Optional_. Service message: the channel has been created.
         * This field can't be received in a message coming through updates,
         * because bot can't be a member of a channel when it is created.
         * It can only be found in reply_to_message if someone replies to a very first message in a channel.
         */
        channel_chat_created?: true;
        /**
         * _Optional_. Service message: auto-delete timer settings changed in the chat
         */
        message_auto_delete_timer_changed?: tgTypes.MessageAutoDeleteTimerChanged;
        /**
         * _Optional_. The group has been migrated to a supergroup with the specified identifier.
         */
        migrate_to_chat_id?: number;
        /**
         * _Optional_. The supergroup has been migrated from a group with the specified identifier.
         */
        migrate_from_chat_id?: number;
        /**
         * _Optional_. Specified message was pinned.
         * Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
         */
        pinned_message?: tgTypes.MaybeInaccessibleMessage;
        /**
         * _Optional_. Message is an invoice for a [payment](https://core.telegram.org/bots/api#payments),
         * information about the invoice. [More about payments »](https://core.telegram.org/bots/api#payments)
         */
        invoice?: tgTypes.Invoice;
        /**
         * _Optional_. Message is a service message about a successful payment, information about the payment.
         * [More about payments »](https://core.telegram.org/bots/api#payments)
         */
        successful_payment?: tgTypes.SuccessfulPayment;
        /**
         * _Optional_. Message is a service message about a refunded payment, information about the payment.
         * [More about payments »](https://core.telegram.org/bots/api#payments)
         */
        refunded_payment?: tgTypes.RefundedPayment;
        /**
         * _Optional_. Service message: users were shared with the bot
         */
        users_shared?: tgTypes.UsersShared;
        /**
         * _Optional_. Service message: a chat was shared with the bot
         */
        chat_shared?: tgTypes.ChatShared;
        /**
         * _Optional_. The domain name of the website on which the user has logged in.
         * [More about Telegram Login »](https://core.telegram.org/widgets/login)
         */
        connected_website?: string;
        /**
         * _Optional_. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu,
         * launching a Web App from a link, or accepting an explicit request from a Web App sent by the method
         * [requestWriteAccess](https://core.telegram.org/bots/webapps#initializing-mini-apps)
         */
        write_access_allowed?: tgTypes.WriteAccessAllowed;
        /**
         * _Optional_. Telegram Passport data
         */
        passport_data?: tgTypes.PassportData;
        /**
         * _Optional_. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location.
         */
        proximity_alert_triggered?: tgTypes.ProximityAlertTriggered;
        /**
         * _Optional_. Service message: user boosted the chat
         */
        boost_added?: tgTypes.ChatBoostAdded;
        /**
         * _Optional_. Service message: chat background set
         */
        chat_background_set?: tgTypes.ChatBackground;
        /**
         * _Optional_. Service message: forum topic created
         */
        forum_topic_created?: tgTypes.ForumTopicCreated;
        /**
         * _Optional_. Service message: forum topic edited
         */
        forum_topic_edited?: tgTypes.ForumTopicEdited;
        /**
         * _Optional_. Service message: forum topic closed
         */
        forum_topic_closed?: tgTypes.ForumTopicClosed;
        /**
         * _Optional_. Service message: forum topic reopened
         */
        forum_topic_reopened?: tgTypes.ForumTopicReopened;
        /**
         * _Optional_. Service message: the 'General' forum topic hidden
         */
        general_forum_topic_hidden?: tgTypes.GeneralForumTopicHidden;
        /**
         * _Optional_. Service message: the 'General' forum topic unhidden
         */
        general_forum_topic_unhidden?: tgTypes.GeneralForumTopicUnhidden;
        /**
         * _Optional_. Service message: a scheduled giveaway was created
         */
        giveaway_created?: tgTypes.GiveawayCreated;
        /**
         * _Optional_. The message is a scheduled giveaway message
         */
        giveaway?: tgTypes.Giveaway;
        /**
         * _Optional_. A giveaway with public winners was completed
         */
        giveaway_winners?: tgTypes.GiveawayWinners;
        /**
         * _Optional_. Service message: a giveaway without public winners was completed
         */
        giveaway_completed?: tgTypes.GiveawayCompleted;
        /**
         * _Optional_. Service message: video chat scheduled
         */
        video_chat_scheduled?: tgTypes.VideoChatScheduled;
        /**
         * _Optional_. Service message: video chat started
         */
        video_chat_started?: tgTypes.VideoChatStarted;
        /**
         * _Optional_. Service message: video chat ended
         */
        video_chat_ended?: tgTypes.VideoChatEnded;
        /**
         * _Optional_. Service message: new participants invited to a video chat
         */
        video_chat_participants_invited?: tgTypes.VideoChatParticipantsInvited;
        /**
         * _Optional_. Service message: data sent by a Web App
         */
        web_app_data?: tgTypes.WebAppData;
        /**
         * _Optional_. Inline keyboard attached to the message.
         * login_url buttons are represented as ordinary url buttons.
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
    }

    /**
     * This object represents a unique message identifier.
     *
     * [MessageId - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messageid)
     */
    interface MessageId {
        /**
         * Unique message identifier
         */
        message_id: number;
    }

    /**
     * This object describes a message that was deleted or is otherwise inaccessible to the bot.
     *
     * [InaccessibleMessage - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inaccessiblemessage)
     */
    interface InaccessibleMessage {
        /**
         * Chat the message belonged to
         */
        chat: tgTypes.Chat;
        /**
         * Unique message identifier inside the chat
         */
        message_id: number;
        /**
         * Always 0. The field can be used to differentiate regular and inaccessible messages.
         */
        date: 0;
    }

    /**
     * This object describes a message that can be inaccessible to the bot.
     *
     * [MaybeInaccessibleMessage - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#maybeinaccessiblemessage)
     */
    type MaybeInaccessibleMessage = tgTypes.Message | tgTypes.InaccessibleMessage;

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
        user?: tgTypes.User;
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
        entities?: tgTypes.MessageEntity[];
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
        origin: tgTypes.MessageOrigin;
        /**
         * _Optional_. Chat the original message belongs to. Available only if the chat is a supergroup or a channel.
         */
        chat?: tgTypes.Chat;
        /**
         * _Optional_. Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel.
         */
        message_id?: number;
        /**
         * _Optional_. Options used for link preview generation for the original message, if it is a text message
         */
        link_preview_options?: tgTypes.LinkPreviewOptions;
        /**
         * _Optional_. Message is an animation, information about the animation
         */
        animation?: tgTypes.Animation;
        /**
         * _Optional_. Message is an audio file, information about the file
         */
        audio?: tgTypes.Audio;
        /**
         * _Optional_. Message is a general file, information about the file
         */
        document?: tgTypes.Document;
        /**
         * _Optional_. Message contains paid media; information about the paid media
         */
        paid_media?: tgTypes.PaidMediaInfo;
        /**
         * _Optional_. Message is a photo, available sizes of the photo
         */
        photo?: tgTypes.PhotoSize[];
        /**
         * _Optional_. Message is a sticker, information about the sticker
         */
        sticker?: tgTypes.Sticker;
        /**
         * _Optional_. Message is a forwarded story
         */
        story?: tgTypes.Story;
        /**
         * _Optional_. Message is a video, information about the video
         */
        video?: tgTypes.Video;
        /**
         * _Optional_. Message is a video note, information about the video message
         */
        video_note?: tgTypes.VideoNote;
        /**
         * _Optional_. Message is a voice message, information about the file
         */
        voice?: tgTypes.Voice;
        /**
         * _Optional_. True, if the message media is covered by a spoiler animation
         */
        has_media_spoiler?: true;
        /**
         * _Optional_. Message is a shared contact, information about the contact
         */
        contact?: tgTypes.Contact;
        /**
         * _Optional_. Message is a dice with random value
         */
        dice?: tgTypes.Dice;
        /**
         * _Optional_. Message is a game, information about the game. [More about games »](https://core.telegram.org/bots/api#games)
         */
        game?: tgTypes.Game;
        /**
         * _Optional_. Message is a scheduled giveaway, information about the giveaway
         */
        giveaway?: tgTypes.Giveaway;
        /**
         * _Optional_. A giveaway with public winners was completed
         */
        giveaway_winners?: tgTypes.GiveawayWinners;
        /**
         * _Optional_. Message is an invoice for a [payment](https://core.telegram.org/bots/api#payments),
         * information about the invoice. [More about payments »](https://core.telegram.org/bots/api#payments)
         */
        invoice?: tgTypes.Invoice;
        /**
         * _Optional_. Message is a shared location, information about the location
         */
        location?: tgTypes.Location;
        /**
         * _Optional_. Message is a native poll, information about the poll
         */
        poll?: tgTypes.Poll;
        /**
         * _Optional_. Message is a venue, information about the venue
         */
        venue?: tgTypes.Venue;
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
        quote_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Position of the quote in the original message in UTF-16 code units
         */
        quote_position?: number;
    }

    /**
     * This object describes the origin of a message.
     *
     * [MessageOrigin - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messageorigin)
     */
    type MessageOrigin =
        tgTypes.MessageOriginUser
        | tgTypes.MessageOriginHiddenUser
        | tgTypes.MessageOriginChat
        | tgTypes.MessageOriginChannel;

    /**
     * The message was originally sent by a known user.
     *
     * [MessageOriginUser - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messageoriginuser)
     */
    interface MessageOriginUser {
        /**
         * Type of the message origin, always "user"
         */
        type: 'user';
        /**
         * Date the message was sent originally in Unix time
         */
        date: number;
        /**
         * User that sent the message originally
         */
        sender_user: tgTypes.User;
    }

    /**
     * The message was originally sent by an unknown user.
     *
     * [MessageOriginHiddenUser - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messageoriginhiddenuser)
     */
    interface MessageOriginHiddenUser {
        /**
         * Type of the message origin, always "hidden_user"
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
         * Type of the message origin, always "chat"
         */
        type: 'chat';
        /**
         * Date the message was sent originally in Unix time
         */
        date: number;
        /**
         * Chat that sent the message originally
         */
        sender_chat: tgTypes.Chat;
        /**
         * _Optional_. For messages originally sent by an anonymous chat administrator, original message author signature
         */
        author_signature?: string;
    }

    /**
     * The message was originally sent to a channel chat.
     *
     * [MessageOriginChannel - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messageoriginchannel)
     */
    interface MessageOriginChannel {
        /**
         * Type of the message origin, always "channel"
         */
        type: 'channel';
        /**
         * Date the message was sent originally in Unix time
         */
        date: number;
        /**
         * Channel chat to which the message was originally sent
         */
        chat: tgTypes.Chat;
        /**
         * Unique message identifier inside the chat
         */
        message_id: number;
        /**
         * _Optional_. Signature of the original post author
         */
        author_signature?: string;
    }

    /**
     * This object represents a service message about a change in auto-delete timer settings.
     *
     * [MessageAutoDeleteTimerChanged - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messageautodeletetimerchanged)
     */
    interface MessageAutoDeleteTimerChanged {
        /**
         * New auto-delete time for messages in the chat; in seconds
         */
        message_auto_delete_time: number;
    }

    /**
     * Describes the options used for link preview generation.
     *
     * [LinkPreviewOptions - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#linkpreviewoptions)
     */
    interface LinkPreviewOptions {
        /**
         * _Optional_. True, if the link preview is disabled
         */
        is_disabled?: boolean;
        /**
         * _Optional_. URL to use for the link preview. If empty, then the first URL found in the message text will be used
         */
        url?: string;
        /**
         * _Optional_. True, if the media in the link preview is supposed to be shrunk;
         * ignored if the URL isn't explicitly specified or media size change isn't supported for the preview
         */
        prefer_small_media?: boolean;
        /**
         * _Optional_. True, if the media in the link preview is supposed to be enlarged;
         * ignored if the URL isn't explicitly specified or media size change isn't supported for the preview
         */
        prefer_large_media?: boolean;
        /**
         * _Optional_. True, if the link preview must be shown above the message text;
         * otherwise, the link preview will be shown below the message text
         */
        show_above_text?: boolean;
    }
}
