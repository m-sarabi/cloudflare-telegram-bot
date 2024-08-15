declare namespace tgTypes {
    /**
     * This object represents a portion of the price for goods or services.
     *
     * [LabeledPrice - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#labeledprice)
     */
    interface LabeledPrice {
        /**
         * Portion label
         */
        label: string;
        /**
         * Price of the product in the smallest units of the [currency](https://core.telegram.org/bots/payments#supported-currencies)
         * (integer, not float/double). For example, for a price of `US$ 1.45` pass `amount = 145`.
         * See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json),
         * it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
         */
        amount: number;
    }

    /**
     * This object contains basic information about an invoice.
     *
     * [Invoice - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#invoice)
     */
    interface Invoice {
        /**
         * Product name
         */
        title: string;
        /**
         * Product description
         */
        description: string;
        /**
         * Unique bot deep-linking parameter that can be used to generate this invoice
         */
        start_parameter: string;
        /**
         * Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies)
         * code, or “XTR” for payments in [Telegram Stars](https://t.me/BotNews/90)
         */
        currency: string;
        /**
         * Total price in the smallest units of the currency (integer, not float/double).
         * For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in
         * [currencies.json](https://core.telegram.org/bots/payments/currencies.json),
         * it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
         */
        total_amount: number;
    }

    /**
     * This object represents a shipping address.
     *
     * [ShippingAddress - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#shippingaddress)
     */
    interface ShippingAddress {
        /**
         * Two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code
         */
        country_code: string;
        /**
         * State, if applicable
         */
        state: string;
        /**
         * City
         */
        city: string;
        /**
         * First line for the address
         */
        street_line1: string;
        /**
         * Second line for the address
         */
        street_line2: string;
        /**
         * Address post code
         */
        post_code: string;
    }

    /**
     * This object represents information about an order.
     *
     * [OrderInfo - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#orderinfo)
     */
    interface OrderInfo {
        /**
         * _Optional_. User name
         */
        name?: string;
        /**
         * _Optional_. User's phone number
         */
        phone_number?: string;
        /**
         * _Optional_. User email
         */
        email?: string;
        /**
         * _Optional_. User shipping address
         */
        shipping_address?: tgTypes.ShippingAddress;
    }

    /**
     * This object represents one shipping option.
     *
     * [ShippingOption - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#shippingoption)
     */
    interface ShippingOption {
        /**
         * Shipping option identifier
         */
        id: string;
        /**
         * Option title
         */
        title: string;
        /**
         * List of price portions
         */
        prices: tgTypes.LabeledPrice[];
    }

    /**
     * This object contains basic information about a successful payment.
     *
     * [SuccessfulPayment - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#successfulpayment)
     */
    interface SuccessfulPayment {
        /**
         * Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code,
         * or “XTR” for payments in [Telegram Stars](https://t.me/BotNews/90)
         */
        currency: string;
        /**
         * Total price in the smallest units of the currency (integer, not float/double).
         * For example, for a price of `US$ 1.45` pass `amount = 145`.
         * See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json),
         * it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
         */
        total_amount: number;
        /**
         * Bot-specified invoice payload
         */
        invoice_payload: string;
        /**
         * _Optional_. Identifier of the shipping option chosen by the user
         */
        shipping_option_id?: string;
        /**
         * _Optional_. Order information provided by the user
         */
        order_info?: tgTypes.OrderInfo;
        /**
         * Telegram payment identifier
         */
        telegram_payment_charge_id: string;
        /**
         * Provider payment identifier
         */
        provider_payment_charge_id: string;
    }

    /**
     * This object contains basic information about a refunded payment.
     *
     * [RefundedPayment - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#refundedpayment)
     */
    interface RefundedPayment {
        /**
         * Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code,
         * or “XTR” for payments in [Telegram Stars](https://t.me/BotNews/90). Currently, always “XTR”
         */
        currency: string;
        /**
         * Total refunded price in the smallest units of the currency (integer, not float/double).
         * For example, for a price of `US$ 1.45`, `total_amount = 145`. See the exp parameter in
         * [currencies.json](https://core.telegram.org/bots/payments/currencies.json),
         * it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
         */
        total_amount: number;
        /**
         * Bot-specified invoice payload
         */
        invoice_payload: string;
        /**
         * Telegram payment identifier
         */
        telegram_payment_charge_id: string;
        /**
         * _Optional_. Provider payment identifier
         */
        provider_payment_charge_id?: string;
    }

    /**
     * This object contains information about an incoming shipping query.
     *
     * [ShippingQuery - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#shippingquery)
     */
    interface ShippingQuery {
        /**
         * Unique query identifier
         */
        id: string;
        /**
         * User who sent the query
         */
        from: tgTypes.User;
        /**
         * Bot-specified invoice payload
         */
        invoice_payload: string;
        /**
         * User specified shipping address
         */
        shipping_address: tgTypes.ShippingAddress;
    }

    /**
     * This object contains information about an incoming pre-checkout query.
     *
     * [PreCheckoutQuery - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#precheckoutquery)
     */
    interface PreCheckoutQuery {
        /**
         * Unique query identifier
         */
        id: string;
        /**
         * User who sent the query
         */
        from: tgTypes.User;
        /**
         * Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code,
         * or “XTR” for payments in [Telegram Stars](https://t.me/BotNews/90)
         */
        currency: string;
        /**
         * Total price in the smallest units of the currency (integer, not float/double).
         * For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in
         * [currencies.json](https://core.telegram.org/bots/payments/currencies.json),
         * it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
         */
        total_amount: number;
        /**
         * Bot-specified invoice payload
         */
        invoice_payload: string;
        /**
         * _Optional_. Identifier of the shipping option chosen by the user
         */
        shipping_option_id?: string;
        /**
         * _Optional_. Order information provided by the user
         */
        order_info?: tgTypes.OrderInfo;
    }

    /**
     * This object describes the state of a revenue withdrawal operation. Currently, it can be one of
     *
     * [RevenueWithdrawalState - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#revenuewithdrawalstate)
     */
    type RevenueWithdrawalState =
        tgTypes.RevenueWithdrawalStatePending
        | tgTypes.RevenueWithdrawalStateSucceeded
        | tgTypes.RevenueWithdrawalStateFailed;

    /**
     * The withdrawal is in progress.
     *
     * [RevenueWithdrawalStatePending - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#revenuewithdrawalstatepending)
     */
    interface RevenueWithdrawalStatePending {
        /**
         * Type of the state, always “pending”
         */
        type: 'pending';
    }

    /**
     * The withdrawal succeeded.
     *
     * [RevenueWithdrawalStateSucceeded - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#revenuewithdrawalstatesucceeded)
     */
    interface RevenueWithdrawalStateSucceeded {
        /**
         * Type of the state, always “succeeded”
         */
        type: 'succeeded';
        /**
         * Date the withdrawal was completed in Unix time
         */
        date: number;
        /**
         * An HTTPS URL that can be used to see transaction details
         */
        url: string;
    }

    /**
     * The withdrawal failed and the transaction was refunded.
     *
     * [RevenueWithdrawalStateFailed - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#revenuewithdrawalstatefailed)
     */
    interface RevenueWithdrawalStateFailed {
        /**
         * Type of the state, always “failed”
         */
        type: 'failed';
    }

    /**
     * This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be one of
     *
     * [TransactionPartner - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#transactionpartner)
     */
    type TransactionPartner =
        tgTypes.TransactionPartnerUser
        | tgTypes.TransactionPartnerFragment
        | tgTypes.TransactionPartnerTelegramAds
        | tgTypes.TransactionPartnerOther;

    /**
     * Describes a transaction with a user.
     *
     * [TransactionPartnerUser - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#transactionpartneruser)
     */
    interface TransactionPartnerUser {
        /**
         * Type of the transaction partner, always “user”
         */
        type: 'user';
        /**
         * Information about the user
         */
        user: tgTypes.User;
        /**
         * _Optional_. Bot-specified invoice payload
         */
        invoice_payload?: string;
        /**
         * _Optional_. Information about the paid media bought by the user
         */
        paid_media?: tgTypes.PaidMedia[];
    }

    /**
     * Describes a withdrawal transaction with Fragment.
     *
     * [TransactionPartnerFragment - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#transactionpartnerfragment)
     */
    interface TransactionPartnerFragment {
        /**
         * Type of the transaction partner, always “fragment”
         */
        type: 'fragment';
        /**
         * _Optional_. State of the transaction if the transaction is outgoing
         */
        withdrawal_state?: tgTypes.RevenueWithdrawalState;
    }

    /**
     * Describes a withdrawal transaction to the Telegram Ads platform.
     *
     * [TransactionPartnerTelegramAds - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#transactionpartnertelegramads)
     */
    interface TransactionPartnerTelegramAds {
        /**
         * Type of the transaction partner, always “telegram_ads”
         */
        type: 'telegram_ads';
    }

    /**
     * Describes a transaction with an unknown source or recipient.
     *
     * [TransactionPartnerOther - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#transactionpartnerother)
     */
    interface TransactionPartnerOther {
        /**
         * Type of the transaction partner, always “other”
         */
        type: 'other';
    }

    /**
     * Describes a Telegram Star transaction.
     *
     * [StarTransaction - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#startransaction)
     */
    interface StarTransaction {
        /**
         * Unique identifier of the transaction. Coincides with the identifer of the original transaction for refund transactions.
         * Coincides with SuccessfulPayment.telegram_payment_charge_id for successful incoming payments from users.
         */
        id: string;
        /**
         * Number of Telegram Stars transferred by the transaction
         */
        amount: number;
        /**
         * Date the transaction was created in Unix time
         */
        date: number;
        /**
         * _Optional_. Source of an incoming transaction (e.g., a user purchasing goods or services,
         * Fragment refunding a failed withdrawal). Only for incoming transactions
         */
        source?: tgTypes.TransactionPartner;
        /**
         * _Optional_. Receiver of an outgoing transaction (e.g., a user for a purchase refund,
         * Fragment for a withdrawal). Only for outgoing transactions
         */
        receiver?: tgTypes.TransactionPartner;
    }

    /**
     * Contains a list of Telegram Star transactions.
     *
     * [StarTransactions - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#startransactions)
     */
    interface StarTransactions {
        /**
         * The list of transactions
         */
        transactions: tgTypes.StarTransaction[];
    }
}
