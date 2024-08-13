declare namespace tgTypes {
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

    /**
     * This object represents a point on the map.
     *
     * [Location - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#location)
     */
    interface Location {
        /**
         * Latitude as defined by the sender
         */
        latitude: number;
        /**
         * Longitude as defined by the sender
         */
        longitude: number;
        /**
         * _Optional_. The radius of uncertainty for the location, measured in meters; 0-1500
         */
        horizontal_accuracy?: number;
        /**
         * _Optional_. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only.
         */
        live_period?: number;
        /**
         * _Optional_. The direction in which user is moving, in degrees; 1-360. For active live locations only.
         */
        heading?: number;
        /**
         * _Optional_. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.
         */
        proximity_alert_radius?: number;
    }

    /**
     * This object represents a venue.
     *
     * [Venue - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#venue)
     */
    interface Venue {
        /**
         * Venue location. Can't be a live location
         */
        location: tgTypes.Location;
        /**
         * Name of the venue
         */
        title: string;
        /**
         * Address of the venue
         */
        address: string;
        /**
         * _Optional_. Foursquare identifier of the venue
         */
        foursquare_id?: string;
        /**
         * _Optional_. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
         */
        foursquare_type?: string;
        /**
         * _Optional_. Google Places identifier of the venue
         */
        google_place_id?: string;
        /**
         * _Optional_. Google Places type of the venue. (See [supported types](https://developers.google.com/places/web-service/supported_types).)
         */
        google_place_type?: string;
    }

    /**
     * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
     *
     * [ProximityAlertTriggered - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#proximityalerttriggered)
     */
    interface ProximityAlertTriggered {
        /**
         * User that triggered the alert
         */
        traveler: tgTypes.User;
        /**
         * User that set the alert
         */
        watcher: tgTypes.User;
        /**
         * The distance between the users
         */
        distance: number;
    }

    /**
     * Describes why a request was unsuccessful.
     *
     * [ResponseParameters - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#responseparameters)
     */
    interface ResponseParameters {
        /**
         * _Optional_. The group has been migrated to a supergroup with the specified identifier.
         */
        migrate_to_chat_id?: number;
        /**
         * _Optional_. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated
         */
        retry_after?: number;
    }
}
