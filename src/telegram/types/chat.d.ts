declare namespace Telegram {
    /**
     * This object represents a chat.
     *
     * [Chat - on Telegram Bot API Documentation](https://core.telegram.org/bots/api#chat)
     */
    interface Chat {
        id: number;
        type: string;
        title?: string;
        username?: string;
        first_name?: string;
        last_name?: string;
        is_forum?: boolean;
    }

    /**
     * This object contains full information about a chat.
     *
     * [ChatFullInfo - on Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatfullinfo)
     */
    interface ChatFullInfo {
        /**
         * Unique identifier for this chat.
         */
        id: number;
        /**
         * Type of the chat, can be either “private”, “group”, “supergroup” or “channel”
         */
        type: string;
        /**
         * Optional. Title, for supergroups, channels and group chats
         */
        title?: string;
        /**
         * Optional. Username, for private chats, supergroups and channels if available
         */
        username?: string;
        /**
         * Optional. First name of the other party in a private chat
         */
        first_name?: string;
        /**
         * Optional. Last name of the other party in a private chat
         */
        last_name?: string;
        /**
         * Optional. True, if the supergroup chat is a forum
         * (has [topics](https://telegram.org/blog/topics-in-groups-collectible-usernames#topics-in-groups) enabled)
         */
        is_forum?: boolean;
        /**
         * Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview.
         * See [accent colors](https://core.telegram.org/bots/api#accent-colors) for more details.
         */
        accent_color_id: number;
        /**
         * The maximum number of reactions that can be set on a message in the chat
         */
        max_reaction_count: number;
        /**
         * Optional. Chat photo
         */
        photo?: Telegram.ChatPhoto;
        /**
         * Optional. If non-empty, the list of all
         * [active chat usernames](https://telegram.org/blog/topics-in-groups-collectible-usernames#collectible-usernames);
         * for private chats, supergroups and channels
         */
        active_usernames?: string[];
        /**
         * Optional. For private chats, the date of birth of the user
         */
        birthdate?: Telegram.Birthdate;
        /**
         * Optional. For private chats with business accounts, the intro of the business
         */
        business_intro?: Telegram.BusinessIntro;
        /**
         * Optional. For private chats with business accounts, the location of the business
         */
        business_location?: Telegram.BusinessLocation;
        /**
         * Optional. For private chats with business accounts, the opening hours of the business
         */
        business_opening_hours?: Telegram.BusinessOpeningHours;
        /**
         * Optional. For private chats, the personal channel of the user
         */
        personal_chat?: Telegram.Chat;
        /**
         * Optional. List of available reactions allowed in the chat. If omitted,
         * then all [emoji reactions](https://core.telegram.org/bots/api#reactiontypeemoji) are allowed.
         */
        available_reactions?: Telegram.ReactionType[];
        /**
         * Optional. Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background
         */
        background_custom_emoji_id?: string;
        /**
         * Optional. Identifier of the accent color for the chat's profile background.
         * See [profile accent colors](https://core.telegram.org/bots/api#profile-accent-colors) for more details.
         */
        profile_accent_color_id?: number;
        /**
         * Optional. Custom emoji identifier of the emoji chosen by the chat for its profile background
         */
        profile_background_custom_emoji_id?: string;
        /**
         * Optional. Custom emoji identifier of the emoji status of the chat or the other party in a private chat
         */
        emoji_status_custom_emoji_id?: string;
        /**
         * Optional. Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any
         */
        emoji_status_expiration_date?: number;
        /**
         * Optional. Bio of the other party in a private chat
         */
        bio?: string;
        /**
         * Optional. True, if privacy settings of the other party in the private chat allows to use
         * `tg://user?id=<user_id>` links only in chats with the user
         */
        has_private_forwards?: boolean;
        /**
         * Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat
         */
        has_restricted_voice_and_video_messages?: boolean;
        /**
         * Optional. True, if users need to join the supergroup before they can send messages
         */
        join_to_send_messages?: boolean;
        /**
         * Optional. True, if all users directly joining the supergroup without using an invite link
         * need to be approved by supergroup administrators
         */
        join_by_request?: boolean;
        /**
         * Optional. Description, for groups, supergroups and channel chats
         */
        description?: string;
        /**
         * Optional. Primary invite link, for groups, supergroups and channel chats
         */
        invite_link?: string;
        /**
         * Optional. The most recent pinned message (by sending date)
         */
        pinned_message?: Telegram.Message;
        /**
         * Optional. Default chat member permissions, for groups and supergroups
         */
        permissions?: Telegram.ChatPermissions;
        /**
         * Optional. True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats.
         */
        can_send_paid_media?: boolean;
        /**
         * Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds
         */
        slow_mode_delay?: number;
        /**
         * Optional. For supergroups, the minimum number of boosts that a non-administrator user needs to add
         * in order to ignore slow mode and chat permissions
         */
        unrestrict_boost_count?: number;
        /**
         * Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds
         */
        message_auto_delete_time?: number;
        /**
         * Optional. True, if aggressive anti-spam checks are enabled in the supergroup.
         * The field is only available to chat administrators.
         */
        has_aggressive_anti_spam_enabled?: boolean;
        /**
         * Optional. True, if non-administrators can only get the list of bots and administrators in the chat
         */
        has_hidden_members?: boolean;
        /**
         * Optional. True, if messages from the chat can't be forwarded to other chats
         */
        has_protected_content?: boolean;
        /**
         * Optional. True, if new chat members will have access to old messages; available only to chat administrators
         */
        has_visible_history?: boolean;
        /**
         * Optional. For supergroups, name of the group sticker set
         */
        sticker_set_name?: string;
        /**
         * Optional. True, if the bot can change the group sticker set
         */
        can_set_sticker_set?: boolean;
        /**
         * Optional. For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group.
         */
        custom_emoji_sticker_set_name?: string;
        /**
         * Optional. Unique identifier for the linked chat, i.e.
         * the discussion group identifier for a channel and vice versa; for supergroups and channel chats.
         */
        linked_chat_id?: number;
        /**
         * Optional. For supergroups, the location to which the supergroup is connected
         */
        location?: Telegram.ChatLocation;
    }
}
