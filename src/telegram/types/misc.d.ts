declare namespace Telegram {
    /**
     * This object represents a phone contact.
     *
     * [Contact - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#contact)
     */
    interface Contact {
        /**
         * Contact's phone number
         */
        phone_number: string;
        /**
         * Contact's first name
         */
        first_name: string;
        /**
         * _Optional_. Contact's last name
         */
        last_name?: string;
        /**
         * _Optional_. Contact's user identifier in Telegram.
         */
        user_id?: number;
        /**
         * _Optional_. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard)
         */
        vcard?: string;
    }

    /**
     * This object represents an animated emoji that displays a random value.
     *
     * [Dice - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#dice)
     */
    interface Dice {
        /**
         * Emoji on which the dice throw animation is based
         */
        emoji: string;
        /**
         * Value of the dice, 1-6 for "🎲", "🎯" and "🎳" base emoji,
         * 1-5 for "🏀" and "⚽" base emoji, 1-64 for "🎰" base emoji
         */
        value: number;
    }
}
