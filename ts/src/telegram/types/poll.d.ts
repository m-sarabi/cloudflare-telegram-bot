declare namespace tgTypes {
    /**
     * This object contains information about one answer option in a poll.
     *
     * [PollOption - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#polloption)
     */
    interface PollOption {
        /**
         * Option text, 1-100 characters
         */
        text: string;
        /**
         * _Optional_. Special entities that appear in the option text.
         * Currently, only custom emoji entities are allowed in poll option texts
         */
        text_entities?: tgTypes.MessageEntity[];
        /**
         * Number of users that voted for this option
         */
        voter_count: number;
    }

    /**
     * This object contains information about one answer option in a poll to be sent.
     *
     * [InputPollOption - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputpolloption)
     */
    interface InputPollOption {
        /**
         * Option text, 1-100 characters
         */
        text: string;
        /**
         * _Optional_. Mode for parsing entities in the text.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         * Currently, only custom emoji entities are allowed
         */
        text_parse_mode?: string;
        /**
         * _Optional_. A JSON-serialized list of special entities that appear in the poll option text.
         * It can be specified instead of text_parse_mode
         */
        text_entities?: tgTypes.MessageEntity[];
    }

    /**
     * This object represents an answer of a user in a non-anonymous poll.
     *
     * [PollAnswer - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#pollanswer)
     */
    interface PollAnswer {
        /**
         * Unique poll identifier
         */
        poll_id: string;
        /**
         * _Optional_. The chat that changed the answer to the poll, if the voter is anonymous
         */
        voter_chat?: tgTypes.Chat;
        /**
         * _Optional_. The user that changed the answer to the poll, if the voter isn't anonymous
         */
        user?: tgTypes.User;
        /**
         * 0-based identifiers of chosen answer options. May be empty if the vote was retracted.
         */
        option_ids: number[];
    }

    /**
     * This object contains information about a poll.
     *
     * [Poll - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#poll)
     */
    interface Poll {
        /**
         * Unique poll identifier
         */
        id: string;
        /**
         * Poll question, 1-300 characters
         */
        question: string;
        /**
         * _Optional_. Special entities that appear in the question.
         * Currently, only custom emoji entities are allowed in poll questions
         */
        question_entities?: tgTypes.MessageEntity[];
        /**
         * List of poll options
         */
        options: tgTypes.PollOption[];
        /**
         * Total number of users that voted in the poll
         */
        total_voter_count: number;
        /**
         * True, if the poll is closed
         */
        is_closed: boolean;
        /**
         * True, if the poll is anonymous
         */
        is_anonymous: boolean;
        /**
         * Poll type, currently can be “regular” or “quiz”
         */
        type: 'regular' | 'quiz';
        /**
         * True, if the poll allows multiple answers
         */
        allows_multiple_answers: boolean;
        /**
         * _Optional_. 0-based identifier of the correct answer option.
         * Available only for polls in the quiz mode, which are closed,
         * or was sent (not forwarded) by the bot or to the private chat with the bot.
         */
        correct_option_id?: number;
        /**
         * _Optional_. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters
         */
        explanation?: string;
        /**
         * _Optional_. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation
         */
        explanation_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Amount of time in seconds the poll will be active after creation
         */
        open_period?: number;
        /**
         * _Optional_. Point in time (Unix timestamp) when the poll will be automatically closed
         */
        close_date?: number;
    }
}
