import { callApi } from '../utils/apiManager';

export namespace tg {
    /**
     * Use this method to send answers to an inline query. No more than 50 results per query are allowed.
     *
     * [answerInlineQuery - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#answerinlinequery)
     *
     * @param inline_query_id `Required`
     * >- Unique identifier for the answered query
     * @param results `Required`
     * >- A JSON-serialized array of results for the inline query
     * @param [cache_time] `Optional`
     * >- The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
     * @param [is_personal] `Optional`
     * >- Pass true if results may be cached on the server side only for the user that sent the query.
     * By default, results may be returned to any user who sends the same query.
     * @param [next_offset] `Optional`
     * >- Pass the offset that a client should send in the next query with the same text to receive more results.
     * Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
     * @param [button] `Optional`
     * >- A JSON-serialized object describing a button to be shown above inline query results
     * @returns >- On success, true is returned.
     */
    export async function answerInlineQuery(
        {
            inline_query_id,
            results,
            cache_time,
            is_personal,
            next_offset,
            button,
        }: {
            inline_query_id: string;
            results: tgTypes.InlineQueryResult[];
            cache_time?: number;
            is_personal?: boolean;
            next_offset?: string;
            button?: tgTypes.InlineQueryResultsButton;
        }): Promise<boolean> {
        return await callApi('answerInlineQuery', {
            inline_query_id,
            results: JSON.stringify(results),
            cache_time,
            is_personal,
            next_offset,
            button: JSON.stringify(button),
        });
    }

    /**
     * Use this method to set the result of an interaction with a
     * [Web App](https://core.telegram.org/bots/webapps) and send a corresponding message on behalf of the user
     * to the chat from which the query originated.
     *
     * [answerWebAppQuery - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#answerwebappquery)
     *
     * @param web_app_query_id `Required`
     * >- Unique identifier for the query to be answered
     * @param result `Required`
     * >- A JSON-serialized object describing the message to be sent
     * @returns >- On success, a [SentWebAppMessage](https://core.telegram.org/bots/api#sentwebappmessage) object is returned.
     */
    export async function answerWebAppQuery(
        {
            web_app_query_id,
            result,
        }: {
            web_app_query_id: string;
            result: tgTypes.InlineQueryResult;
        }): Promise<tgTypes.SentWebAppMessage> {
        return await callApi('answerWebAppQuery', {
            web_app_query_id,
            result: JSON.stringify(result),
        });
    }
}
