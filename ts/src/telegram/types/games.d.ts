declare namespace tgTypes {
    /**
     * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
     *
     * [Game - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#game)
     */
    interface Game {
        /**
         * Title of the game
         */
        title: string;
        /**
         * Description of the game
         */
        description: string;
        /**
         * Photo that will be displayed in the game message in chats.
         */
        photo: tgTypes.PhotoSize[];
        /**
         * _Optional_. Brief description of the game or high scores included in the game message.
         * Can be automatically edited to include current high scores for the game when the bot calls
         * [setGameScore](https://core.telegram.org/bots/api#setgamescore), or manually edited using
         * [editMessageText](https://core.telegram.org/bots/api#editmessagetext). 0-4096 characters.
         */
        text?: string;
        /**
         * _Optional_. Special entities that appear in text, such as usernames, URLs, bot commands, etc.
         */
        text_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Animation that will be displayed in the game message in chats. Upload via [BotFather](https://t.me/botfather)
         */
        animation?: tgTypes.Animation;
    }

    /**
     * A placeholder, currently holds no information. Use [BotFather](https://t.me/botfather) to set up your game.
     *
     * [CallbackGame - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#callbackgame)
     */
    interface CallbackGame {
    }

    /**
     * This object represents one row of the high scores table for a game.
     *
     * [GameHighScore - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#gamehighscore)
     */
    interface GameHighScore {
        /**
         * Position in high score table for the game
         */
        position: number;
        /**
         * User
         */
        user: tgTypes.User;
        /**
         * Score
         */
        score: number;
    }
}
