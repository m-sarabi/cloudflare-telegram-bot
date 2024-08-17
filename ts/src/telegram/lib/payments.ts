import { callApi } from '../utils/apiManager';

export namespace tg {
    /**
     * Use this method to send invoices.
     *
     * [sendInvoice - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#sendinvoice)
     *
     * @param chat_id `Required`
     * >- Unique identifier for the target chat or username of the target channel (in the format @channelusername)
     * @param title `Required`
     * >- Product name, 1-32 characters
     * @param description `Required`
     * >- Product description, 1-255 characters
     * @param payload `Required`
     * >- Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
     * @param currency `Required`
     * >- Three-letter ISO 4217 currency code, see [more on currencies](https://core.telegram.org/bots/payments#supported-currencies).
     * Pass “XTR” for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param prices `Required`
     * >- Price breakdown, a JSON-serialized list of components
     * (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.).
     * Must contain exactly one item for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [message_thread_id] `Optional`
     * >- Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
     * @param [provider_token] `Optional`
     * >- Payment provider token, obtained via [@BotFather](https://t.me/botfather).
     * Pass an empty string for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [max_tip_amount] `Optional`
     * >- The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double).
     * For example, for a maximum tip of `US$ 1.45` pass `max_tip_amount = 145`. See the exp parameter in
     * [currencies.json](https://core.telegram.org/bots/payments/currencies.json),
     * it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
     * Defaults to 0. Not supported for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [suggested_tip_amounts] `Optional`
     * >- A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double).
     * At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive,
     * passed in a strictly increased order and must not exceed max_tip_amount.
     * @param [start_parameter] `Optional`
     * >- Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button,
     * allowing multiple users to pay directly from the forwarded message, using the same invoice.
     * If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot
     * (instead of a Pay button), with the value used as the start parameter
     * @param [provider_data] `Optional`
     * >- JSON-serialized data about the invoice, which will be shared with the payment provider.
     * A detailed description of required fields should be provided by the payment provider.
     * @param [photo_url] `Optional`
     * >- URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
     * People like it better when they see what they are paying for.
     * @param [photo_size] `Optional`
     * >- Photo size in bytes
     * @param [photo_width] `Optional`
     * >- Photo width
     * @param [photo_height] `Optional`
     * >- Photo height
     * @param [need_name] `Optional`
     * >- Pass true if you require the user's full name to complete the order.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [need_phone_number] `Optional`
     * >- Pass true if you require the user's phone number to complete the order.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [need_email] `Optional`
     * >- Pass true if you require the user's email address to complete the order.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [need_shipping_address] `Optional`
     * >- Pass true if you require the user's shipping address to complete the order.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [send_phone_number_to_provider] `Optional`
     * >- Pass true if the user's phone number should be sent to the provider.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [send_email_to_provider] `Optional`
     * >- Pass true if the user's email address should be sent to the provider.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [is_flexible] `Optional`
     * >- Pass true if the final price depends on the shipping method.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [disable_notification] `Optional`
     * >- Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages).
     * Users will receive a notification with no sound.
     * @param [protect_content] `Optional`
     * >- Protects the contents of the sent message from forwarding and saving
     * @param [message_effect_id] `Optional`
     * >- Unique identifier of the message effect to be added to the message; for private chats only
     * @param [reply_parameters] `Optional`
     * >- Description of the message to reply to
     * @param [reply_markup] `Optional`
     * >- A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).
     * If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button.
     * @returns >- On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
     */
    export async function sendInvoice(
        {
            chat_id,
            title,
            description,
            payload,
            currency,
            prices,
            message_thread_id,
            provider_token,
            max_tip_amount,
            suggested_tip_amounts,
            start_parameter,
            provider_data,
            photo_url,
            photo_size,
            photo_width,
            photo_height,
            need_name,
            need_phone_number,
            need_email,
            need_shipping_address,
            send_phone_number_to_provider,
            send_email_to_provider,
            is_flexible,
            disable_notification,
            protect_content,
            message_effect_id,
            reply_parameters,
            reply_markup,
        }: {
            chat_id: number | string;
            title: string;
            description: string;
            payload: string;
            currency: string;
            prices: tgTypes.LabeledPrice[];
            message_thread_id?: number;
            provider_token?: string;
            max_tip_amount?: number;
            suggested_tip_amounts?: number[];
            start_parameter?: string;
            provider_data?: string;
            photo_url?: string;
            photo_size?: number;
            photo_width?: number;
            photo_height?: number;
            need_name?: boolean;
            need_phone_number?: boolean;
            need_email?: boolean;
            need_shipping_address?: boolean;
            send_phone_number_to_provider?: boolean;
            send_email_to_provider?: boolean;
            is_flexible?: boolean;
            disable_notification?: boolean;
            protect_content?: boolean;
            message_effect_id?: string;
            reply_parameters?: tgTypes.ReplyParameters;
            reply_markup?: tgTypes.InlineKeyboardMarkup;
        }): Promise<tgTypes.Message> {
        return await callApi('sendInvoice', {
            chat_id,
            title,
            description,
            payload,
            currency,
            prices: JSON.stringify(prices),
            message_thread_id,
            provider_token,
            max_tip_amount,
            suggested_tip_amounts: JSON.stringify(suggested_tip_amounts),
            start_parameter,
            provider_data,
            photo_url,
            photo_size,
            photo_width,
            photo_height,
            need_name,
            need_phone_number,
            need_email,
            need_shipping_address,
            send_phone_number_to_provider,
            send_email_to_provider,
            is_flexible,
            disable_notification,
            protect_content,
            message_effect_id,
            reply_parameters: JSON.stringify(reply_parameters),
            reply_markup: JSON.stringify(reply_markup),
        });
    }

    /**
     * Use this method to create a link for an invoice.
     *
     * [createInvoiceLink - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#createinvoicelink)
     *
     * @param title `Required`
     * >- Product name, 1-32 characters
     * @param description `Required`
     * >- Product description, 1-255 characters
     * @param payload `Required`
     * >- Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
     * @param currency `Required`
     * >- Three-letter ISO 4217 currency code, see [more on currencies](https://core.telegram.org/bots/payments#supported-currencies).
     * Pass “XTR” for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param prices `Required`
     * >- Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.).
     * Must contain exactly one item for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [provider_token] `Optional`
     * >- Payment provider token, obtained via [@BotFather](https://t.me/botfather).
     * Pass an empty string for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [max_tip_amount] `Optional`
     * >- The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double).
     * @param [suggested_tip_amounts] `Optional`
     * >- A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double).
     * At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive,
     * passed in a strictly increased order and must not exceed max_tip_amount.
     * @param [provider_data] `Optional`
     * >- JSON-serialized data about the invoice, which will be shared with the payment provider.
     * A detailed description of required fields should be provided by the payment provider.
     * @param [photo_url] `Optional`
     * >- URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
     * @param [photo_size] `Optional`
     * >- Photo size in bytes
     * @param [photo_width] `Optional`
     * >- Photo width
     * @param [photo_height] `Optional`
     * >- Photo height
     * @param [need_name] `Optional`
     * >- Pass true if you require the user's full name to complete the order.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [need_phone_number] `Optional`
     * >- Pass true if you require the user's phone number to complete the order.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [need_email] `Optional`
     * >- Pass true if you require the user's email address to complete the order.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [need_shipping_address] `Optional`
     * >- Pass true if you require the user's shipping address to complete the order.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [send_phone_number_to_provider] `Optional`
     * >- Pass true if the user's phone number should be sent to the provider.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [send_email_to_provider] `Optional`
     * >- Pass true if the user's email address should be sent to the provider.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @param [is_flexible] `Optional`
     * >- Pass true if the final price depends on the shipping method.
     * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
     * @returns >- the created invoice link as string on success.
     */
    export async function createInvoiceLink(
        {
            title,
            description,
            payload,
            currency,
            prices,
            provider_token,
            max_tip_amount,
            suggested_tip_amounts,
            provider_data,
            photo_url,
            photo_size,
            photo_width,
            photo_height,
            need_name,
            need_phone_number,
            need_email,
            need_shipping_address,
            send_phone_number_to_provider,
            send_email_to_provider,
            is_flexible,
        }: {
            title: string;
            description: string;
            payload: string;
            currency: string;
            prices: tgTypes.LabeledPrice[];
            provider_token?: string;
            max_tip_amount?: number;
            suggested_tip_amounts?: number[];
            provider_data?: string;
            photo_url?: string;
            photo_size?: number;
            photo_width?: number;
            photo_height?: number;
            need_name?: boolean;
            need_phone_number?: boolean;
            need_email?: boolean;
            need_shipping_address?: boolean;
            send_phone_number_to_provider?: boolean;
            send_email_to_provider?: boolean;
            is_flexible?: boolean;
        }): Promise<string> {
        return await callApi('createInvoiceLink', {
            title,
            description,
            payload,
            currency,
            prices: JSON.stringify(prices),
            provider_token,
            max_tip_amount,
            suggested_tip_amounts: JSON.stringify(suggested_tip_amounts),
            provider_data,
            photo_url,
            photo_size,
            photo_width,
            photo_height,
            need_name,
            need_phone_number,
            need_email,
            need_shipping_address,
            send_phone_number_to_provider,
            send_email_to_provider,
            is_flexible,
        });
    }

    /**
     * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified,
     * the Bot API will send an [Update](https://core.telegram.org/bots/api#update) with a shipping_query field to the bot.
     * Use this method to reply to shipping queries.
     *
     * [answerShippingQuery - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#answershippingquery)
     *
     * @param shipping_query_id `Required`
     * >- Unique identifier for the query to be answered
     * @param ok `Required`
     * >- Pass true if delivery to the specified address is possible and false if there are any problems
     * (for example, if delivery to the specified address is not possible)
     * @param [shipping_options] `Optional`
     * >- Required if ok is true. A JSON-serialized array of available shipping options.
     * @param [error_message] `Optional`
     * >- Required if ok is false. Error message in human readable form that explains why it is impossible to complete the order
     * (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user.
     * @returns >- On success, true is returned.
     */
    export async function answerShippingQuery(
        {
            shipping_query_id,
            ok,
            shipping_options,
            error_message,
        }: {
            shipping_query_id: string;
            ok: boolean;
            shipping_options?: tgTypes.ShippingOption[];
            error_message?: string;
        }): Promise<boolean> {
        return await callApi('answerShippingQuery', {
            shipping_query_id,
            ok,
            shipping_options: JSON.stringify(shipping_options),
            error_message,
        });
    }

    /**
     * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an
     * [Update](https://core.telegram.org/bots/api#update) with the field pre_checkout_query.
     * Use this method to respond to such pre-checkout queries.
     * **Note:** The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
     *
     * [answerPreCheckoutQuery - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#answerprecheckoutquery)
     *
     * @param pre_checkout_query_id `Required`
     * >- Unique identifier for the query to be answered
     * @param ok `Required`
     * >- Specify true if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order.
     * Use false if there are any problems.
     * @param [error_message] `Optional`
     * >- Required if ok is false. Error message in human readable form that explains the reason for failure
     * to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts
     * while you were busy filling out your payment details. Please choose a different color or garment!").
     * Telegram will display this message to the user.
     * @returns >- On success, true is returned.
     */
    export async function answerPreCheckoutQuery(
        {
            pre_checkout_query_id,
            ok,
            error_message,
        }: {
            pre_checkout_query_id: string;
            ok: boolean;
            error_message?: string;
        }): Promise<boolean> {
        return await callApi('answerPreCheckoutQuery', {
            pre_checkout_query_id,
            ok,
            error_message,
        });
    }

    /**
     * Returns the bot's Telegram Star transactions in chronological order.
     *
     * [getStarTransactions - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#getstartransactions)
     *
     * @param [offset] `Optional`
     * >- Number of transactions to skip in the response
     * @param [limit] `Optional`
     * >- The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100.
     * @returns >- On success, returns a [StarTransactions](https://core.telegram.org/bots/api#startransactions) object.
     */
    export async function getStarTransactions(
        {
            offset,
            limit,
        }: {
            offset?: number;
            limit?: number;
        }): Promise<tgTypes.StarTransactions> {
        return await callApi('getStarTransactions', {
            offset,
            limit,
        });
    }

    /**
     * Refunds a successful payment in [Telegram Stars](https://t.me/BotNews/90).
     *
     * [refundStarPayment - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#refundstarpayment)
     *
     * @param user_id `Required`
     * >- Identifier of the user whose payment will be refunded
     * @param telegram_payment_charge_id `Required`
     * >- Telegram payment identifier
     * @returns >- true on success.
     */
    export async function refundStarPayment(
        {
            user_id,
            telegram_payment_charge_id,
        }: {
            user_id: number;
            telegram_payment_charge_id: string;
        }): Promise<boolean> {
        return await callApi('refundStarPayment', {
            user_id,
            telegram_payment_charge_id,
        });
    }
}
