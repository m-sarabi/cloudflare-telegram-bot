declare namespace Telegram {
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
        from?: Telegram.User;
        /**
         * _Optional_. Sender of the message, sent on behalf of a chat.
         * For example, the channel itself for channel posts,
         * the supergroup itself for messages from anonymous group administrators,
         * the linked channel for messages automatically forwarded to the discussion group.
         */
        sender_chat?: Telegram.Chat;
        /**
         * _Optional_. If the sender of the message boosted the chat, the number of boosts added by the user
         */
        sender_boost_count?: number;
        /**
         * _Optional_. The bot that actually sent the message on behalf of the business account.
         * Available only for outgoing messages sent on behalf of the connected business account.
         */
        sender_business_bot?: Telegram.User;
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
        chat: Telegram.Chat;
        /**
         * _Optional_. Information about the original message for forwarded messages
         */
        forward_origin?: Telegram.MessageOrigin;
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
        reply_to_message?: Telegram.Message;
        /**
         * _Optional_. Information about the message that is being replied to, which may come from another chat or forum topic
         */
        external_reply?: Telegram.ExternalReplyInfo;
        /**
         * _Optional_. For replies that quote part of the original message, the quoted part of the message
         */
        quote?: Telegram.TextQuote;
        /**
         * _Optional_. For replies to a story, the original story
         */
        reply_to_story?: Telegram.Story;
        /**
         * _Optional_. Bot through which the message was sent
         */
        via_bot?: Telegram.User;
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
        entities?: Telegram.MessageEntity[];
        /**
         * _Optional_. Options used for link preview generation for the message, if it is a text message and link preview options were changed
         */
        link_preview_options?: Telegram.LinkPreviewOptions;
        /**
         * _Optional_. Unique identifier of the message effect added to the message
         */
        effect_id?: string;
        /**
         * _Optional_. Message is an animation, information about the animation.
         * For backward compatibility, when this field is set, the document field will also be set
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
         * _Optional_. Message is a [video note](https://telegram.org/blog/video-messages-and-telescope), information about the video message
         */
        video_note?: Telegram.VideoNote;
        /**
         * _Optional_. Message is a voice message, information about the file
         */
        voice?: Telegram.Voice;
        /**
         * _Optional_. Caption for the animation, audio, document, paid media, photo, video or voice
         */
        caption?: string;
        /**
         * _Optional_. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
         */
        caption_entities?: Telegram.MessageEntity;
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
         * _Optional_. Message is a native poll, information about the poll
         */
        poll?: Telegram.Poll;
        /**
         * _Optional_. Message is a venue, information about the venue.
         * For backward compatibility, when this field is set, the location field will also be set
         */
        venue?: Telegram.Venue;
        /**
         * _Optional_. Message is a shared location, information about the location
         */
        location?: Telegram.Location;
        /**
         * _Optional_. New members that were added to the group or supergroup and information about them
         * (the bot itself may be one of these members)
         */
        new_chat_members?: Telegram.User[];
        /**
         * _Optional_. A member was removed from the group, information about them (this member may be the bot itself)
         */
        left_chat_member?: Telegram.User;
        /**
         * _Optional_. A chat title was changed to this value
         */
        new_chat_title?: string;
        /**
         * _Optional_. A chat photo was change to this value
         */
        new_chat_photo?: Telegram.PhotoSize[];
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
        message_auto_delete_timer_changed?: Telegram.MessageAutoDeleteTimerChanged;
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
        pinned_message?: Telegram.MaybeInaccessibleMessage;
        /**
         * _Optional_. Message is an invoice for a [payment](https://core.telegram.org/bots/api#payments),
         * information about the invoice. [More about payments »](https://core.telegram.org/bots/api#payments)
         */
        invoice?: Telegram.Invoice;
        /**
         * _Optional_. Message is a service message about a successful payment, information about the payment.
         * [More about payments »](https://core.telegram.org/bots/api#payments)
         */
        successful_payment?: Telegram.SuccessfulPayment;
        /**
         * _Optional_. Message is a service message about a refunded payment, information about the payment.
         * [More about payments »](https://core.telegram.org/bots/api#payments)
         */
        refunded_payment?: Telegram.RefundedPayment;
        /**
         * _Optional_. Service message: users were shared with the bot
         */
        users_shared?: Telegram.UsersShared;
        /**
         * _Optional_. Service message: a chat was shared with the bot
         */
        chat_shared?: Telegram.ChatShared;
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
        write_access_allowed?: Telegram.WriteAccessAllowed;
        /**
         * _Optional_. Telegram Passport data
         */
        passport_data?: Telegram.PassportData;
        /**
         * _Optional_. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location.
         */
        proximity_alert_triggered?: Telegram.ProximityAlertTriggered;
        /**
         * _Optional_. Service message: user boosted the chat
         */
        boost_added?: Telegram.ChatBoostAdded;
        /**
         * _Optional_. Service message: chat background set
         */
        chat_background_set?: Telegram.ChatBackground;
        /**
         * _Optional_. Service message: forum topic created
         */
        forum_topic_created?: Telegram.ForumTopicCreated;
        /**
         * _Optional_. Service message: forum topic edited
         */
        forum_topic_edited?: Telegram.ForumTopicEdited;
        /**
         * _Optional_. Service message: forum topic closed
         */
        forum_topic_closed?: Telegram.ForumTopicClosed;
        /**
         * _Optional_. Service message: forum topic reopened
         */
        forum_topic_reopened?: Telegram.ForumTopicReopened;
        /**
         * _Optional_. Service message: the 'General' forum topic hidden
         */
        general_forum_topic_hidden?: Telegram.GeneralForumTopicHidden;
        /**
         * _Optional_. Service message: the 'General' forum topic unhidden
         */
        general_forum_topic_unhidden?: Telegram.GeneralForumTopicUnhidden;
        /**
         * _Optional_. Service message: a scheduled giveaway was created
         */
        giveaway_created?: Telegram.GiveawayCreated;
        /**
         * _Optional_. The message is a scheduled giveaway message
         */
        giveaway?: Telegram.Giveaway;
        /**
         * _Optional_. A giveaway with public winners was completed
         */
        giveaway_winners?: Telegram.GiveawayWinners;
        /**
         * _Optional_. Service message: a giveaway without public winners was completed
         */
        giveaway_completed?: Telegram.GiveawayCompleted;
        /**
         * _Optional_. Service message: video chat scheduled
         */
        video_chat_scheduled?: Telegram.VideoChatScheduled;
        /**
         * _Optional_. Service message: video chat started
         */
        video_chat_started?: Telegram.VideoChatStarted;
        /**
         * _Optional_. Service message: video chat ended
         */
        video_chat_ended?: Telegram.VideoChatEnded;
        /**
         * _Optional_. Service message: new participants invited to a video chat
         */
        video_chat_participants_invited?: Telegram.VideoChatParticipantsInvited;
        /**
         * _Optional_. Service message: data sent by a Web App
         */
        web_app_data?: Telegram.WebAppData;
        /**
         * _Optional_. Inline keyboard attached to the message.
         * login_url buttons are represented as ordinary url buttons.
         */
        reply_markup?: Telegram.InlineKeyboardMarkup;
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
        chat: Telegram.Chat;
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
    type MaybeInaccessibleMessage = Telegram.Message | Telegram.InaccessibleMessage;
}
