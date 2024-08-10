/**
 * This declaration file defines the types of the Telegram Bot API.
 *
 * [Telegram Bot API](https://core.telegram.org/bots/api)
 */
declare namespace Telegram {
    /**
     * ### Update
     * This object represents an incoming update.
     *
     * At most one of the optional parameters can be present in any given update.
     *
     * [Update - on Telegram Bot API Documentation](https://core.telegram.org/bots/api#update)
     */
    interface Update {
        /**
         * The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially.
         */
        update_id: number;
        /**
         * _Optional_. New incoming message of any kind - text; photo; sticker; etc.
         */
        message?: Telegram.Message;
        /**
         * _Optional_. New version of a message that is known to the bot and was edited.
         * This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
         */
        edited_message?: Telegram.Message;
        /**
         * _Optional_. New incoming channel post of any kind - text; photo; sticker; etc.
         */
        channel_post?: Telegram.Message;
        /**
         * _Optional_. New version of a channel post that is known to the bot and was edited.
         * This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.
         */
        edited_channel_post?: Telegram.Message;
        /**
         * _Optional_. The bot was connected to or disconnected from a business account; or a user edited an existing connection with the bot
         */
        business_connection?: Telegram.BusinessConnection;
        /**
         * _Optional_. New message from a connected business account
         */
        business_message?: Telegram.Message;
        /**
         * _Optional_. New version of a message from a connected business account
         */
        edited_business_message?: Telegram.Message;
        /**
         * _Optional_. Messages were deleted from a connected business account
         */
        deleted_business_messages?: Telegram.BusinessMessagesDeleted;
        /**
         * _Optional_. A reaction to a message was changed by a user.
         * The bot must be an administrator in the chat and must explicitly specify `"message_reaction"` in the list of allowed_updates to receive these updates.
         * The update isn't received for reactions set by bots.
         */
        message_reaction?: Telegram.MessageReactionUpdated;
        /**
         * _Optional_. Reactions to a message with anonymous reactions were changed.
         * The bot must be an administrator in the chat and must explicitly specify `"message_reaction_count"` in the list of allowed_updates to receive these updates.
         * The updates are grouped and can be sent with delay up to a few minutes.
         */
        message_reaction_count?: Telegram.MessageReactionCountUpdated;
        /**
         * _Optional_. New incoming [inline](https://core.telegram.org/bots/api#inline-mode) query
         */
        inline_query?: Telegram.InlineQuery;
        /**
         * _Optional_. The result of an [inline](https://core.telegram.org/bots/api#inline-mode) query that was chosen by a user and sent to their chat partner.
         * Please see our documentation on the [feedback collecting](https://core.telegram.org/bots/inline#collecting-feedback) for details on how to enable these updates for your bot.
         */
        chosen_inline_result?: Telegram.ChosenInlineResult;
        /**
         * _Optional_. New incoming callback query
         */
        callback_query?: Telegram.CallbackQuery;
        /**
         * _Optional_. New incoming shipping query. Only for invoices with flexible price
         */
        shipping_query?: Telegram.ShippingQuery;
        /**
         * _Optional_. New incoming pre-checkout query. Contains full information about checkout
         */
        pre_checkout_query?: Telegram.PreCheckoutQuery;
        /**
         * _Optional_. New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot
         */
        poll?: Telegram.Poll;
        /**
         * _Optional_. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.
         */
        poll_answer?: Telegram.PollAnswer;
        /**
         * _Optional_. The bot's chat member status was updated in a chat.
         * For private chats, this update is received only when the bot is blocked or unblocked by the user.
         */
        my_chat_member?: Telegram.ChatMemberUpdated;
        /**
         * _Optional_. A chat member's status was updated in a chat.
         * The bot must be an administrator in the chat and must explicitly specify `"chat_member"` in the list of allowed_updates to receive these updates.
         */
        chat_member?: Telegram.ChatMemberUpdated;
        /**
         *    _Optional_. A request to join the chat has been sent.
         *    The bot must have the `can_invite_users` administrator right in the chat to receive these updates.
         */
        chat_join_request?: Telegram.ChatJoinRequest;
        /**
         * _Optional_. A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates.
         */
        chat_boost?: Telegram.ChatBoostUpdated;
        /**
         * _Optional_. A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates.
         */
        removed_chat_boost?: Telegram.ChatBoostRemoved;
    }

    /**
     * ### Message
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
         * Optional. Unique identifier of a message thread to which the message belongs; for supergroups only
         */
        message_thread_id?: number;
        /**
         * Optional. Sender of the message; empty for messages sent to channels.
         */
        from?: Telegram.User;
        /**
         * Optional. Sender of the message, sent on behalf of a chat.
         * For example, the channel itself for channel posts,
         * the supergroup itself for messages from anonymous group administrators,
         * the linked channel for messages automatically forwarded to the discussion group.
         */
        sender_chat: Telegram.Chat;
        /**
         * Optional. If the sender of the message boosted the chat, the number of boosts added by the user
         */
        sender_boost_count?: number;
        /**
         * Optional. The bot that actually sent the message on behalf of the business account.
         * Available only for outgoing messages sent on behalf of the connected business account.
         */
        sender_business_bot?: Telegram.User;
        /**
         * Date the message was sent in Unix time. It is always a positive number, representing a valid date.
         */
        date: number;
        /**
         * Optional. Unique identifier of the business connection from which the message was received.
         * If non-empty, the message belongs to a chat of the corresponding business account that is independent from
         * any potential bot chat which might share the same identifier.
         */
        business_connection_id?: string;
        /**
         * Chat the message belongs to
         */
        chat: Telegram.Chat;
        /**
         * Optional. Information about the original message for forwarded messages
         */
        forward_origin?: Telegram.MessageOrigin;
        /**
         * Optional. True, if the message is sent to a forum topic
         */
        is_topic_message?: boolean;
        /**
         * Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group
         */
        is_automatic_forward?: boolean;
        /**
         *    Optional. For replies in the same chat and message thread, the original message.
         *    Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
         */
        reply_to_message?: Telegram.Message;
        /**
         * Optional. Information about the message that is being replied to, which may come from another chat or forum topic
         */
        external_reply?: Telegram.ExternalReplyInfo;
        /**
         * Optional. For replies that quote part of the original message, the quoted part of the message
         */
        quote?: Telegram.TextQuot;
        /**
         * Optional. For replies to a story, the original story
         */
        reply_to_story?: Telegram.Story;
        /**
         * Optional. Bot through which the message was sent
         */
        via_bot?: Telegram.User;
        /**
         * Optional. Date the message was last edited in Unix time
         */
        edit_date?: number;
        /**
         * Optional. True, if the message can't be forwarded
         */
        has_protected_content?: boolean;
        /**
         * Optional. True, if the message was sent by an implicit action,
         * for example, as an away or a greeting business message, or as a scheduled message
         */
        is_from_offline?: boolean;
        /**
         * Optional. The unique identifier of a media message group this message belongs to
         */
        media_group_id?: string;
        /**
         * Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
         */
        author_signature?: string;
        /**
         * Optional. For text messages, the actual UTF-8 text of the message
         */
        text?: string;
        /**
         * Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
         */
        entities?: Telegram.MessageEntity[];
        /**
         * Optional. Options used for link preview generation for the message, if it is a text message and link preview options were changed
         */
        link_preview_options?: Telegram.LinkPreviewOptions;
        /**
         * Optional. Unique identifier of the message effect added to the message
         */
        effect_id?: string;
        /**
         * Optional. Message is an animation, information about the animation.
         * For backward compatibility, when this field is set, the document field will also be set
         */
        animation?: Telegram.Animation;
        /**
         * Optional. Message is an audio file, information about the file
         */
        audio?: Telegram.Audio;
        /**
         * Optional. Message is a general file, information about the file
         */
        document?: Telegram.Document;
        /**
         * Optional. Message contains paid media; information about the paid media
         */
        paid_media?: Telegram.PaidMediaInfo;
        /**
         * Optional. Message is a photo, available sizes of the photo
         */
        photo?: Telegram.PhotoSize[];
        /**
         * Optional. Message is a sticker, information about the sticker
         */
        sticker?: Telegram.Sticker;
        /**
         * Optional. Message is a forwarded story
         */
        story?: Telegram.Story;
        /**
         * Optional. Message is a video, information about the video
         */
        video?: Telegram.Video;
        /**
         *    Optional. Message is a [video note](https://telegram.org/blog/video-messages-and-telescope), information about the video message
         */
        video_note?: Telegram.VideoNote;
        /**
         * Optional. Message is a voice message, information about the file
         */
        voice?: Telegram.Voice;
        /**
         * Optional. Caption for the animation, audio, document, paid media, photo, video or voice
         */
        caption?: string;
        /**
         * Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
         */
        caption_entities?: Telegram.MessageEntity;
        /**
         * Optional. True, if the caption must be shown above the message media
         */
        show_caption_above_media?: boolean;
        /**
         * Optional. True, if the message media is covered by a spoiler animation
         */
        has_media_spoiler?: boolean;
        /**
         * Optional. Message is a shared contact, information about the contact
         */
        contact?: Telegram.Contact;
        /**
         *    Optional. Message is a dice with random value
         */
        dice?: Telegram.Dice;
        /**
         * Optional. Message is a game, information about the game. [More about games »](https://core.telegram.org/bots/api#games)
         */
        game?: Telegram.Game;
        /**
         *    Optional. Message is a native poll, information about the poll
         */
        poll?: Telegram.Poll;
        /**
         * Optional. Message is a venue, information about the venue.
         * For backward compatibility, when this field is set, the location field will also be set
         */
        venue?: Telegram.Venue;
        /**
         * Optional. Message is a shared location, information about the location
         */
        location?: Telegram.Location;
        /**
         * Optional. New members that were added to the group or supergroup and information about them
         * (the bot itself may be one of these members)
         */
        new_chat_members?: Telegram.User[];
        /**
         * Optional. A member was removed from the group, information about them (this member may be the bot itself)
         */
        left_chat_member?: Telegram.User;
        /**
         * Optional. A chat title was changed to this value
         */
        new_chat_title?: string;
        /**
         * Optional. A chat photo was change to this value
         */
        new_chat_photo?: Telegram.PhotoSize[];
        /**
         * Optional. Service message: the chat photo was deleted
         */
        delete_chat_photo?: boolean;
        /**
         * Optional. Service message: the group has been created
         */
        group_chat_created?: boolean;
        /**
         * Optional. Service message: the supergroup has been created.
         * This field can't be received in a message coming through updates,
         * because bot can't be a member of a supergroup when it is created.
         * It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
         */
        supergroup_chat_created?: boolean;
        /**
         * Optional. Service message: the channel has been created.
         * This field can't be received in a message coming through updates,
         * because bot can't be a member of a channel when it is created.
         * It can only be found in reply_to_message if someone replies to a very first message in a channel.
         */
        channel_chat_created?: boolean;
        /**
         * Optional. Service message: auto-delete timer settings changed in the chat
         */
        message_auto_delete_timer_changed?: Telegram.MessageAutoDeleteTimerChanged;
        /**
         * Optional. The group has been migrated to a supergroup with the specified identifier.
         */
        migrate_to_chat_id?: number;
        /**
         * Optional. The supergroup has been migrated from a group with the specified identifier.
         */
        migrate_from_chat_id?: number;
        /**
         * Optional. Specified message was pinned.
         * Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
         */
        pinned_message?: Telegram.MaybeInaccessibleMessage;
        /**
         * Optional. Message is an invoice for a [payment](https://core.telegram.org/bots/api#payments),
         * information about the invoice. [More about payments »](https://core.telegram.org/bots/api#payments)
         */
        invoice?: Telegram.Invoice;
        /**
         * Optional. Message is a service message about a successful payment, information about the payment.
         * [More about payments »](https://core.telegram.org/bots/api#payments)
         */
        successful_payment?: Telegram.SuccessfulPayment;
        /**
         * Optional. Message is a service message about a refunded payment, information about the payment.
         * [More about payments »](https://core.telegram.org/bots/api#payments)
         */
        refunded_payment?: Telegram.RefundedPayment;
        /**
         * Optional. Service message: users were shared with the bot
         */
        users_shared?: Telegram.UsersShared;
        /**
         * Optional. Service message: a chat was shared with the bot
         */
        chat_shared?: Telegram.ChatShared;
        /**
         * Optional. The domain name of the website on which the user has logged in.
         * [More about Telegram Login »](https://core.telegram.org/widgets/login)
         */
        connected_website?: string;
        /**
         * Optional. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu,
         * launching a Web App from a link, or accepting an explicit request from a Web App sent by the method
         * [requestWriteAccess](https://core.telegram.org/bots/webapps#initializing-mini-apps)
         */
        write_access_allowed?: Telegram.WriteAccessAllowed;
        /**
         * Optional. Telegram Passport data
         */
        passport_data?: Telegram.PassportData;
        /**
         * Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location.
         */
        proximity_alert_triggered?: Telegram.ProximityAlertTriggered;
        /**
         * Optional. Service message: user boosted the chat
         */
        boost_added?: Telegram.ChatBoostAdded;
        /**
         * Optional. Service message: chat background set
         */
        chat_background_set?: Telegram.ChatBackground;
        /**
         * Optional. Service message: forum topic created
         */
        forum_topic_created?: Telegram.ForumTopicCreated;
        /**
         * Optional. Service message: forum topic edited
         */
        forum_topic_edited?: Telegram.ForumTopicEdited;
        /**
         * Optional. Service message: forum topic closed
         */
        forum_topic_closed?: Telegram.ForumTopicClosed;
        /**
         * Optional. Service message: forum topic reopened
         */
        forum_topic_reopened?: Telegram.ForumTopicReopened;
        /**
         * Optional. Service message: the 'General' forum topic hidden
         */
        general_forum_topic_hidden?: Telegram.GeneralForumTopicHidden;
        /**
         * Optional. Service message: the 'General' forum topic unhidden
         */
        general_forum_topic_unhidden?: Telegram.GeneralForumTopicUnhidden;
        /**
         * Optional. Service message: a scheduled giveaway was created
         */
        giveaway_created?: Telegram.GiveawayCreated;
        /**
         * Optional. The message is a scheduled giveaway message
         */
        giveaway?: Telegram.Giveaway;
        /**
         * Optional. A giveaway with public winners was completed
         */
        giveaway_winners?: Telegram.GiveawayWinners;
        /**
         * Optional. Service message: a giveaway without public winners was completed
         */
        giveaway_completed?: Telegram.GiveawayCompleted;
        /**
         * Optional. Service message: video chat scheduled
         */
        video_chat_scheduled?: Telegram.VideoChatScheduled;
        /**
         * Optional. Service message: video chat started
         */
        video_chat_started?: Telegram.VideoChatStarted;
        /**
         * Optional. Service message: video chat ended
         */
        video_chat_ended?: Telegram.VideoChatEnded;
        /**
         * Optional. Service message: new participants invited to a video chat
         */
        video_chat_participants_invited?: Telegram.VideoChatParticipantsInvited;
        /**
         * Optional. Service message: data sent by a Web App
         */
        web_app_data?: Telegram.WebAppData;
        /**
         * Optional. Inline keyboard attached to the message.
         * login_url buttons are represented as ordinary url buttons.
         */
        reply_markup?: Telegram.InlineKeyboardMarkup;
    }
}
