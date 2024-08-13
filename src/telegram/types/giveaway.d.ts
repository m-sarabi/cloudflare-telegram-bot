declare namespace tgTypes {
    /**
     * This object represents a service message about the creation of a scheduled giveaway. Currently holds no information.
     *
     * [GiveawayCreated - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#giveawaycreated)
     */
    interface GiveawayCreated {
    }

    /**
     * This object represents a message about a scheduled giveaway.
     *
     * [Giveaway - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#giveaway)
     */
    interface Giveaway {
        /**
         * The list of chats which the user must join to participate in the giveaway
         */
        chats: tgTypes.Chat[];
        /**
         * Point in time (Unix timestamp) when winners of the giveaway will be selected
         */
        winners_selection_date: number;
        /**
         * The number of users which are supposed to be selected as winners of the giveaway
         */
        winner_count: number;
        /**
         * _Optional_. True, if only users who join the chats after the giveaway started should be eligible to win
         */
        only_new_members?: true;
        /**
         * _Optional_. True, if the list of giveaway winners will be visible to everyone
         */
        has_public_winners?: true;
        /**
         * _Optional_. Description of additional giveaway prize
         */
        prize_description?: string;
        /**
         * _Optional_. A list of two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
         * country codes indicating the countries from which eligible users for the giveaway must come.
         * If empty, then all users can participate in the giveaway.
         * Users with a phone number that was bought on Fragment can always participate in giveaways.
         */
        country_codes?: string[];
        /**
         * _Optional_. The number of months the Telegram Premium subscription won from the giveaway will be active for
         */
        premium_subscription_month_count?: number;
    }

    /**
     * This object represents a message about the completion of a giveaway with public winners.
     *
     * [GiveawayWinners - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#giveawaywinners)
     */
    interface GiveawayWinners {
        /**
         * The chat that created the giveaway
         */
        chat: tgTypes.Chat;
        /**
         * Identifier of the message with the giveaway in the chat
         */
        giveaway_message_id: number;
        /**
         * Point in time (Unix timestamp) when winners of the giveaway were selected
         */
        winners_selection_date: number;
        /**
         * Total number of winners in the giveaway
         */
        winner_count: number;
        /**
         * List of up to 100 winners of the giveaway
         */
        winners: tgTypes.User[];
        /**
         * _Optional_. The number of other chats the user had to join in order to be eligible for the giveaway
         */
        additional_chat_count?: number;
        /**
         * _Optional_. The number of months the Telegram Premium subscription won from the giveaway will be active for
         */
        premium_subscription_month_count?: number;
        /**
         * _Optional_. Number of undistributed prizes
         */
        unclaimed_prize_count?: number;
        /**
         * _Optional_. True, if only users who had joined the chats after the giveaway started were eligible to win
         */
        only_new_members?: true;
        /**
         * _Optional_. True, if the giveaway was canceled because the payment for it was refunded
         */
        was_refunded?: true;
        /**
         * _Optional_. Description of additional giveaway prize
         */
        prize_description?: string;
    }

    /**
     * This object represents a service message about the completion of a giveaway without public winners.
     *
     * [GiveawayCompleted - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#giveawaycompleted)
     */
    interface GiveawayCompleted {
        /**
         * Number of winners in the giveaway
         */
        winner_count: number;
        /**
         * _Optional_. Number of undistributed prizes
         */
        unclaimed_prize_count?: number;
        /**
         * _Optional_. Message with the giveaway that was completed, if it wasn't deleted
         */
        giveaway_message?: tgTypes.Message;
    }
}
