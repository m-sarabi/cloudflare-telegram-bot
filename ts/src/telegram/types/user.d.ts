declare namespace tgTypes {
    /**
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
         * _Optional_. User's or bot's last name
         */
        last_name?: string;
        /**
         * _Optional_. User's or bot's username
         */
        username?: string;
        /**
         * _Optional_. [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the user's language
         */
        language_code?: string;
        /**
         * _Optional_. True, if this user is a Telegram Premium user
         */
        is_premium?: true;
        /**
         * _Optional_. True, if this user added the bot to the attachment menu
         */
        added_to_attachment_menu?: true;
        /**
         * _Optional_. True, if the bot can be invited to groups. Returned only in [getMe](https://core.telegram.org/bots/api#getme).
         */
        can_join_groups?: boolean;
        /**
         * _Optional_. True, if [privacy mode](https://core.telegram.org/bots/features#privacy-mode) is disabled for the bot.
         * Returned only in [getMe](https://core.telegram.org/bots/api#getme).
         */
        can_read_all_group_messages?: boolean;
        /**
         * _Optional_. True, if the bot supports inline queries. Returned only in [getMe](https://core.telegram.org/bots/api#getme).
         */
        supports_inline_queries?: boolean;
        /**
         * _Optional_. True, if the bot can be connected to a Telegram Business account to receive its messages.
         * Returned only in [getMe](https://core.telegram.org/bots/api#getme).
         */
        can_connect_to_business?: boolean;
        /**
         * _Optional_. True, if the bot has a main Web App. Returned only in [getMe](https://core.telegram.org/bots/api#getme).
         */
        has_main_web_app?: boolean;
    }

    /**
     * This object contains information about a user that was shared with the bot using a
     * [KeyboardButtonRequestUsers](https://core.telegram.org/bots/api#keyboardbuttonrequestusers) button.
     *
     * [SharedUser - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#shareduser)
     */
    interface SharedUser {
        /**
         * Identifier of the shared user.
         */
        user_id: number;
        /**
         * _Optional_. First name of the user, if the name was requested by the bot
         */
        first_name?: string;
        /**
         * _Optional_. Last name of the user, if the name was requested by the bot
         */
        last_name?: string;
        /**
         * _Optional_. Username of the user, if the username was requested by the bot
         */
        username?: string;
        /**
         * _Optional_. Available sizes of the chat photo, if the photo was requested by the bot
         */
        photo?: tgTypes.PhotoSize[];
    }

    /**
     * This object contains information about the users whose identifiers were shared with the bot using a
     * [KeyboardButtonRequestUsers](https://core.telegram.org/bots/api#keyboardbuttonrequestusers) button.
     *
     * [UsersShared - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#usersshared)
     */
    interface UsersShared {
        /**
         * Identifier of the request
         */
        request_id: number;
        /**
         * Information about users shared with the bot.
         */
        users: tgTypes.SharedUser[];
    }

    /**
     * This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu,
     * launching a Web App from a link, or accepting an explicit request from a Web App sent by the method
     * [requestWriteAccess](https://core.telegram.org/bots/webapps#initializing-mini-apps).
     *
     * [WriteAccessAllowed - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#writeaccessallowed)
     */
    interface WriteAccessAllowed {
        /**
         * _Optional_. True, if the access was granted after the user accepted an explicit request from a Web App sent by the method
         * [requestWriteAccess](https://core.telegram.org/bots/webapps#initializing-mini-apps)
         */
        from_request?: boolean;
        /**
         * _Optional_. Name of the Web App, if the access was granted when the Web App was launched from a link
         */
        web_app_name?: string;
        /**
         * _Optional_. True, if the access was granted when the bot was added to the attachment or side menu
         */
        from_attachment_menu?: boolean;
    }

    /**
     * This object represent a user's profile pictures.
     *
     * [UserProfilePhotos - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#userprofilephotos)
     */
    interface UserProfilePhotos {
        /**
         * Total number of profile pictures the target user has
         */
        total_count: number;
        /**
         * Requested profile pictures (in up to 4 sizes each)
         */
        photos: tgTypes.PhotoSize[][];
    }

    /**
     * Describes the birthdate of a user.
     *
     * [Birthdate - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#birthdate)
     */
    interface Birthdate {
        /**
         * Day of the user's birth; 1-31
         */
        day: number;
        /**
         * Month of the user's birth; 1-12
         */
        month: number;
        /**
         * _Optional_. Year of the user's birth
         */
        year?: number;
    }
}
