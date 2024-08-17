import { callApi } from '../utils/apiManager';

export namespace tg {
    /**
     * Use this method to send a game.
     *
     * [sendGame - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#sendgame)
     *
     * @param chat_id `Required`
     * >- Unique identifier for the target chat
     * @param game_short_name `Required`
     * >- Short name of the game, serves as the unique identifier for the game. Set up your games via [@BotFather](https://t.me/botfather).
     * @param [business_connection_id] `Optional`
     * >- Unique identifier of the business connection on behalf of which the message will be sent
     * @param [message_thread_id] `Optional`
     * >- Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param [disable_notification] `Optional`
     * >- Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
     * @param [protect_content] `Optional`
     * >- Protects the contents of the sent message from forwarding and saving
     * @param [message_effect_id] `Optional`
     * >- Unique identifier of the message effect to be added to the message; for private chats only
     * @param [reply_parameters] `Optional`
     * >- Description of the message to reply to
     * @param [reply_markup] `Optional`
     * >- A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).
     * If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.
     * @returns >- On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
     */
    export async function sendGame(
        {
            chat_id,
            game_short_name,
            business_connection_id,
            message_thread_id,
            disable_notification,
            protect_content,
            message_effect_id,
            reply_parameters,
            reply_markup,
        }: {
            chat_id: number;
            game_short_name: string;
            business_connection_id?: string;
            message_thread_id?: number;
            disable_notification?: boolean;
            protect_content?: boolean;
            message_effect_id?: string;
            reply_parameters?: tgTypes.ReplyParameters;
            reply_markup?: tgTypes.InlineKeyboardMarkup;
        }): Promise<tgTypes.Message> {
        return await callApi('sendGame', {
            chat_id,
            game_short_name,
            business_connection_id,
            message_thread_id,
            disable_notification,
            protect_content,
            message_effect_id,
            reply_parameters: JSON.stringify(reply_parameters),
            reply_markup: JSON.stringify(reply_markup),
        });
    }

    /**
     * Use this method to set the score of the specified user in a game message.
     *
     * [setGameScore - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#setgamescore)
     *
     * @param user_id `Required`
     * >- User identifier
     * @param score `Required`
     * >- New score, must be non-negative
     * @param [force] `Optional`
     * >- Pass true if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
     * @param [disable_edit_message] `Optional`
     * >- Pass true if the game message should not be automatically edited to include the current scoreboard
     * @param [chat_id] `Optional`
     * >- Required if inline_message_id is not specified. Unique identifier for the target chat
     * @param [message_id] `Optional`
     * >- Required if inline_message_id is not specified. Identifier of the sent message
     * @param [inline_message_id] `Optional`
     * >- Required if chat_id and message_id are not specified. Identifier of the inline message
     * @returns >- On success, if the message is not an inline message, the [Message](https://core.telegram.org/bots/api#message) is returned,
     * otherwise true is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is false.
     */
    export async function setGameScore(
        {
            user_id,
            score,
            force,
            disable_edit_message,
            chat_id,
            message_id,
            inline_message_id,
        }: {
            user_id: number;
            score: number;
            force?: boolean;
            disable_edit_message?: boolean;
            chat_id?: number;
            message_id?: number;
            inline_message_id?: string;
        }): Promise<boolean> {
        return await callApi('setGameScore', {
            user_id,
            score,
            force,
            disable_edit_message,
            chat_id,
            message_id,
            inline_message_id,
        });
    }

    /**
     * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game.
     *
     * > This method will currently return scores for the target user, plus two of their closest neighbors on each side.
     * > Will also return the top three users if the user and their neighbors are not among them.
     * > Please note that this behavior is subject to change.
     *
     * [getGameHighScores - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#getgamehighscores)
     *
     * @param user_id `Required`
     * >- Target user id
     * @param [chat_id] `Optional`
     * >- Required if inline_message_id is not specified. Unique identifier for the target chat
     * @param [message_id] `Optional`
     * >- Required if inline_message_id is not specified. Identifier of the sent message
     * @param [inline_message_id] `Optional`
     * >- Required if chat_id and message_id are not specified. Identifier of the inline message
     * @returns >- an Array of [GameHighScore](https://core.telegram.org/bots/api#gamehighscore) objects.
     */
    export async function getGameHighScores(
        {
            user_id,
            chat_id,
            message_id,
            inline_message_id,
        }: {
            user_id: number;
            chat_id?: number;
            message_id?: number;
            inline_message_id?: string;
        }): Promise<tgTypes.GameHighScore> {
        return await callApi('getGameHighScores', {
            user_id,
            chat_id,
            message_id,
            inline_message_id,
        });
    }
}
