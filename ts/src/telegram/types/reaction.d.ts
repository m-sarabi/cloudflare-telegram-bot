declare namespace tgTypes {
    /**
     * This object describes the type of a reaction. Currently, it can be one of
     *
     * [ReactionType - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#reactiontype)
     */
    type ReactionType =
        ReactionTypeEmoji
        | ReactionTypeCustomEmoji
        | ReactionTypePaid;

    /**
     * The reaction is based on an emoji.
     *
     * [ReactionTypeEmoji - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#reactiontypeemoji)
     */
    interface ReactionTypeEmoji {
        /**
         * Type of the reaction, always “emoji”
         */
        type: 'emoji';
        /**
         * Reaction emoji.
         */
        emoji: string;
    }

    /**
     * The reaction is based on a custom emoji.
     *
     * [ReactionTypeCustomEmoji - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#reactiontypecustomemoji)
     */
    interface ReactionTypeCustomEmoji {
        /**
         * Type of the reaction, always “custom_emoji”
         */
        type: 'custom_emoji';
        /**
         * Custom emoji identifier
         */
        custom_emoji_id: string;
    }

    /**
     * The reaction is paid.
     *
     * [ReactionTypePaid - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#reactiontypepaid)
     */
    interface ReactionTypePaid {
        /**
         * Type of the reaction, always “paid”
         */
        type: 'paid';
    }

    /**
     * Represents a reaction added to a message along with the number of times it was added.
     *
     * [ReactionCount - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#reactioncount)
     */
    interface ReactionCount {
        /**
         * Type of the reaction
         */
        type: tgTypes.ReactionType;
        /**
         * Number of times the reaction was added
         */
        total_count: number;
    }

    /**
     * This object represents a change of a reaction on a message performed by a user.
     *
     * [MessageReactionUpdated - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messagereactionupdated)
     */
    interface MessageReactionUpdated {
        /**
         * The chat containing the message the user reacted to
         */
        chat: tgTypes.Chat;
        /**
         * Unique identifier of the message inside the chat
         */
        message_id: number;
        /**
         * _Optional_. The user that changed the reaction, if the user isn't anonymous
         */
        user?: tgTypes.User;
        /**
         * _Optional_. The chat on behalf of which the reaction was changed, if the user is anonymous
         */
        actor_chat?: tgTypes.Chat;
        /**
         * Date of the change in Unix time
         */
        date: number;
        /**
         * Previous list of reaction types that were set by the user
         */
        old_reaction: tgTypes.ReactionType[];
        /**
         * New list of reaction types that have been set by the user
         */
        new_reaction: tgTypes.ReactionType[];
    }

    /**
     * This object represents reaction changes on a message with anonymous reactions.
     *
     * [MessageReactionCountUpdated - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#messagereactioncountupdated)
     */
    interface MessageReactionCountUpdated {
        /**
         * The chat containing the message
         */
        chat: tgTypes.Chat;
        /**
         * Unique message identifier inside the chat
         */
        message_id: number;
        /**
         * Date of the change in Unix time
         */
        date: number;
        /**
         * List of reactions that are present on the message
         */
        reactions: tgTypes.ReactionCount[];
    }
}
