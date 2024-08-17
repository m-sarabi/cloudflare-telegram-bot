declare namespace tgTypes {
    /**
     * This object represents a service message about a new forum topic created in the chat.
     *
     * [ForumTopicCreated - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#forumtopiccreated)
     */
    interface ForumTopicCreated {
        /**
         * Name of the topic
         */
        name: string;
        /**
         * Color of the topic icon in RGB format
         */
        icon_color: number;
        /**
         * _Optional_. Unique identifier of the custom emoji shown as the topic icon
         */
        icon_custom_emoji_id?: string;
    }

    /**
     * This object represents a service message about a forum topic closed in the chat. Currently holds no information.
     *
     * [ForumTopicClosed - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#forumtopicclosed)
     */
    interface ForumTopicClosed {
    }

    /**
     * This object represents a service message about an edited forum topic.
     *
     * [ForumTopicEdited - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#forumtopicedited)
     */
    interface ForumTopicEdited {
        /**
         * _Optional_. New name of the topic, if it was edited
         */
        name?: string;
        /**
         * _Optional_. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed
         */
        icon_custom_emoji_id?: string;
    }

    /**
     * This object represents a service message about a forum topic reopened in the chat. Currently holds no information.
     *
     * [ForumTopicReopened - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#forumtopicreopened)
     */
    interface ForumTopicReopened {
    }

    /**
     * This object represents a service message about General forum topic hidden in the chat. Currently holds no information.
     *
     * [GeneralForumTopicHidden - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#generalforumtopichidden)
     */
    interface GeneralForumTopicHidden {
    }

    /**
     * This object represents a service message about General forum topic unhidden in the chat. Currently holds no information.
     *
     * [GeneralForumTopicUnhidden - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#generalforumtopicunhidden)
     */
    interface GeneralForumTopicUnhidden {
    }

    /**
     * This object represents a forum topic.
     *
     * [ForumTopic - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#forumtopic)
     */
    interface ForumTopic {
        /**
         * Unique identifier of the forum topic
         */
        message_thread_id: number;
        /**
         * Name of the topic
         */
        name: string;
        /**
         * Color of the topic icon in RGB format
         */
        icon_color: number;
        /**
         * _Optional_. Unique identifier of the custom emoji shown as the topic icon
         */
        icon_custom_emoji_id?: string;
    }
}
