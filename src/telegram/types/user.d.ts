declare namespace Telegram {
    /**
     * ### User
     *
     * This object represents a Telegram user or bot.
     *
     * [User - on Telegram Bot API Documentation](https://core.telegram.org/bots/api#user)
     */
    interface User {
        /**
         * Unique identifier for this user or bot.
         */
        id: number;
        /**
         * True, if this user is a bot
         */
        is_bot: boolean;
        /**
         * User's or bot's first name
         */
        first_name: string;
        /**
         * Optional. User's or bot's last name
         */
        last_name?: string;
        /**
         * Optional. User's or bot's username
         */
        username?: string;
        /**
         * Optional. [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the user's language
         */
        language_code?: string;
        /**
         * Optional. True, if this user is a Telegram Premium user
         */
        is_premium?: boolean;
        /**
         * Optional. True, if this user added the bot to the attachment menu
         */
        added_to_attachment_menu?: boolean;
        /**
         * Optional. True, if the bot can be invited to groups. Returned only in [getMe](https://core.telegram.org/bots/api#getme).
         */
        can_join_groups?: boolean;
        /**
         * Optional. True, if [privacy mode](https://core.telegram.org/bots/features#privacy-mode) is disabled for the bot.
         * Returned only in [getMe](https://core.telegram.org/bots/api#getme).
         */
        can_read_all_group_messages?: boolean;
        /**
         * Optional. True, if the bot supports inline queries. Returned only in [getMe](https://core.telegram.org/bots/api#getme).
         */
        supports_inline_queries?: boolean;
        /**
         * Optional. True, if the bot can be connected to a Telegram Business account to receive its messages.
         * Returned only in [getMe](https://core.telegram.org/bots/api#getme).
         */
        can_connect_to_business?: boolean;
        /**
         * Optional. True, if the bot has a main Web App. Returned only in [getMe](https://core.telegram.org/bots/api#getme).
         */
        has_main_web_app?: boolean;
    }
}
