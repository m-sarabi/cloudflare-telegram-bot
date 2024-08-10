declare namespace Telegram {
    /**
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
}
