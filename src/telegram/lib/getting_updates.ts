import { callApi } from '../utils/apiManager';

export namespace tg {
    /**
     * Use this method to receive incoming updates using long polling ([wiki](https://en.wikipedia.org/wiki/Push_technology#Long_polling)).
     *
     * > **Notes**
     * > 1. This method will not work if an outgoing webhook is set up.
     * > 2. In order to avoid getting duplicate updates, recalculate offset after each server response.
     *
     * [getUpdates - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#getupdates)
     *
     * @param [offset] `Optional`
     * >- Identifier of the first update to be returned.
     * Must be greater by one than the highest among the identifiers of previously received updates.
     * By default, updates starting with the earliest unconfirmed update are returned.
     * An update is considered confirmed as soon as [getUpdates](https://core.telegram.org/bots/api#getupdates)
     * is called with an offset higher than its update_id.
     * The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue.
     * All previous updates will be forgotten.
     * @param [limit] `Optional`
     * >- Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.
     * @param [timeout] `Optional`
     * >- Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling.
     * Should be positive, short polling should be used for testing purposes only.
     * @param [allowed_updates] `Optional`
     * >- A JSON-serialized list of the update types you want your bot to receive.
     * For example, specify `["message", "edited_channel_post", "callback_query"]` to only receive updates of these types.
     * See [Update](https://core.telegram.org/bots/api#update) for a complete list of available update types.
     * Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default).
     * If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates
     * created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
     * @returns >- an Array of [Update](https://core.telegram.org/bots/api#update) objects.
     */
    export async function getUpdates(
        {
            offset,
            limit,
            timeout,
            allowed_updates,
        }: {
            offset?: number;
            limit?: number;
            timeout?: number;
            allowed_updates?: string[];
        }): Promise<tgTypes.Update> {
        return await callApi('getUpdates', {
            offset,
            limit,
            timeout,
            allowed_updates: JSON.stringify(allowed_updates),
        });
    }

    /**
     * Use this method to specify a URL and receive incoming updates via an outgoing webhook.
     * Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL,
     * containing a JSON-serialized [Update](https://core.telegram.org/bots/api#update).
     * In case of an unsuccessful request, we will give up after a reasonable amount of attempts.
     *
     * If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token.
     * If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content.
     *
     * [setWebhook - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#setwebhook)
     *
     * @param url `Required`
     * >- HTTPS URL to send updates to. Use an empty string to remove webhook integration
     * @param [certificate] `Optional`
     * >- Upload your public key certificate so that the root certificate in use can be checked.
     * See our [self-signed guide](https://core.telegram.org/bots/self-signed) for details.
     * @param [ip_address] `Optional`
     * >- The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS
     * @param [max_connections] `Optional`
     * >- The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40.
     * Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.
     * @param [allowed_updates] `Optional`
     * >- A JSON-serialized list of the update types you want your bot to receive. For example, specify
     * `["message", "edited_channel_post", "callback_query"]` to only receive updates of these types.
     * See [Update](https://core.telegram.org/bots/api#update) for a complete list of available update types.
     * Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default).
     * If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created
     * before the call to the setWebhook, so unwanted updates may be received for a short period of time.
     * @param [drop_pending_updates] `Optional`
     * >- Pass true to drop all pending updates
     * @param [secret_token] `Optional`
     * >- A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters.
     * Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you.
     * @returns >- true on success.
     */
    export async function setWebhook(
        {
            url,
            certificate,
            ip_address,
            max_connections,
            allowed_updates,
            drop_pending_updates,
            secret_token,
        }: {
            url: string;
            certificate?: tgTypes.InputFile;
            ip_address?: string;
            max_connections?: number;
            allowed_updates?: string[];
            drop_pending_updates?: boolean;
            secret_token?: string;
        }): Promise<boolean> {
        return await callApi('setWebhook', {
            url,
            certificate: JSON.stringify(certificate),
            ip_address,
            max_connections,
            allowed_updates: JSON.stringify(allowed_updates),
            drop_pending_updates,
            secret_token,
        });
    }

    /**
     * Use this method to remove webhook integration if you decide to switch back to [getUpdates](https://core.telegram.org/bots/api#getupdates).
     *
     * [deleteWebhook - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#deletewebhook)
     *
     * @param [drop_pending_updates] `Optional`
     * >- Pass true to drop all pending updates
     * @returns >- true on success.
     */
    export async function deleteWebhook(
        {
            drop_pending_updates,
        }: {
            drop_pending_updates?: boolean;
        }): Promise<boolean> {
        return await callApi('deleteWebhook', {
            drop_pending_updates,
        });
    }

    /**
     * Use this method to get current webhook status. Requires no parameters.
     *
     * [getWebhookInfo - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#getwebhookinfo)
     *
     * @returns >- On success, returns a [WebhookInfo](https://core.telegram.org/bots/api#webhookinfo) object.
     * If the bot is using [getUpdates](https://core.telegram.org/bots/api#getupdates), will return an object with the url field empty.
     */
    export async function getWebhookInfo(): Promise<tgTypes.WebhookInfo> {
        return await callApi('getWebhookInfo');
    }
}
