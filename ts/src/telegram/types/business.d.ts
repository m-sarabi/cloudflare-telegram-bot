declare namespace tgTypes {
    /**
     * Contains information about the start page settings of a Telegram Business account.
     *
     * [BusinessIntro - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#businessintro)
     */
    interface BusinessIntro {
        /**
         * _Optional_. Title text of the business intro
         */
        title?: string;
        /**
         * _Optional_. Message text of the business intro
         */
        message?: string;
        /**
         * _Optional_. Sticker of the business intro
         */
        sticker?: tgTypes.Sticker;
    }

    /**
     * Contains information about the location of a Telegram Business account.
     *
     * [BusinessLocation - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#businesslocation)
     */
    interface BusinessLocation {
        /**
         * Address of the business
         */
        address: string;
        /**
         * _Optional_. Location of the business
         */
        location?: tgTypes.Location;
    }

    /**
     * Describes an interval of time during which a business is open.
     *
     * [BusinessOpeningHoursInterval - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#businessopeninghoursinterval)
     */
    interface BusinessOpeningHoursInterval {
        /**
         * The minute's sequence number in a week, starting on Monday,
         * marking the start of the time interval during which the business is open; 0 - 7 * 24 * 60
         */
        opening_minute: number;
        /**
         * The minute's sequence number in a week, starting on Monday,
         * marking the end of the time interval during which the business is open; 0 - 8 * 24 * 60
         */
        closing_minute: number;
    }

    /**
     * Describes the opening hours of a business.
     *
     * [BusinessOpeningHours - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#businessopeninghours)
     */
    interface BusinessOpeningHours {
        /**
         * Unique name of the time zone for which the opening hours are defined
         */
        time_zone_name: string;
        /**
         * List of time intervals describing business opening hours
         */
        opening_hours: tgTypes.BusinessOpeningHoursInterval[];
    }

    /**
     * Describes the connection of the bot with a business account.
     *
     * [BusinessConnection - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#businessconnection)
     */
    interface BusinessConnection {
        /**
         * Unique identifier of the business connection
         */
        id: string;
        /**
         * Business account user that created the business connection
         */
        user: tgTypes.User;
        /**
         * Identifier of a private chat with the user who created the business connection.
         */
        user_chat_id: number;
        /**
         * Date the connection was established in Unix time
         */
        date: number;
        /**
         * True, if the bot can act on behalf of the business account in chats that were active in the last 24 hours
         */
        can_reply: boolean;
        /**
         * True, if the connection is active
         */
        is_enabled: boolean;
    }

    /**
     * This object is received when messages are deleted from a connected business account.
     *
     * [BusinessMessagesDeleted - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#businessmessagesdeleted)
     */
    interface BusinessMessagesDeleted {
        /**
         * Unique identifier of the business connection
         */
        business_connection_id: string;
        /**
         * Information about a chat in the business account. The bot may not have access to the chat or the corresponding user.
         */
        chat: tgTypes.Chat;
        /**
         * The list of identifiers of deleted messages in the chat of the business account
         */
        message_ids: number[];
    }
}
