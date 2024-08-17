declare namespace tgTypes {
    /**
     * Describes data sent from a [Web App](/bots/webapps) to the bot.
     *
     * [WebAppData - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#webappdata)
     */
    interface WebAppData {
        /**
         * The data. Be aware that a bad client can send arbitrary data in this field.
         */
        data: string;
        /**
         * Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field.
         */
        button_text: string;
    }

    /**
     * Describes a [Web App](https://core.telegram.org/bots/webapps).
     *
     * [WebAppInfo - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#webappinfo)
     */
    interface WebAppInfo {
        /**
         * An HTTPS URL of a Web App to be opened with additional data as specified in
         * [Initializing Web Apps](https://core.telegram.org/bots/webapps#initializing-mini-apps)
         */
        url: string;
    }
}
