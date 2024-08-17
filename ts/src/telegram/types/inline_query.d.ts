declare namespace tgTypes {
    /**
     * This object represents an incoming inline query.
     * When the user sends an empty query, your bot could return some default or trending results.
     *
     * [InlineQuery - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequery)
     */
    interface InlineQuery {
        /**
         * Unique identifier for this query
         */
        id: string;
        /**
         * Sender
         */
        from: tgTypes.User;
        /**
         * Text of the query (up to 256 characters)
         */
        query: string;
        /**
         * Offset of the results to be returned, can be controlled by the bot
         */
        offset: string;
        /**
         * _Optional_. Type of the chat from which the inline query was sent.
         * Can be either “sender” for a private chat with the inline query sender,
         * “private”, “group”, “supergroup”, or “channel”.
         * The chat type should be always known for requests sent from official clients and most third-party clients,
         * unless the request was sent from a secret chat
         */
        chat_type?: `sender` | 'private' | 'group' | 'supergroup' | 'channel';
        /**
         * _Optional_. Sender location, only for bots that request user location
         */
        location?: tgTypes.Location;
    }

    /**
     * This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.
     *
     * [InlineQueryResultsButton - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultsbutton)
     */
    interface InlineQueryResultsButton {
        /**
         * Label text on the button
         */
        text: string;
        /**
         * _Optional_. Description of the [Web App](https://core.telegram.org/bots/webapps) that will be launched when the user presses the button.
         * The Web App will be able to switch back to the inline mode using the method
         * [switchInlineQuery](https://core.telegram.org/bots/webapps#initializing-mini-apps) inside the Web App.
         */
        web_app?: tgTypes.WebAppInfo;
        /**
         * _Optional_. [Deep-linking](https://core.telegram.org/bots/features#deep-linking)
         * parameter for the /start message sent to the bot when a user presses the button. 1-64 characters,
         * only A-Z, a-z, 0-9, _ and - are allowed.
         */
        start_parameter?: string;
    }

    /**
     * This object represents one result of an inline query.
     *
     * [InlineQueryResult - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresult)
     */
    type InlineQueryResult =
        tgTypes.InlineQueryResultCachedAudio
        | tgTypes.InlineQueryResultCachedDocument
        | tgTypes.InlineQueryResultCachedGif
        | tgTypes.InlineQueryResultCachedMpeg4Gif
        | tgTypes.InlineQueryResultCachedPhoto
        | tgTypes.InlineQueryResultCachedSticker
        | tgTypes.InlineQueryResultCachedVideo
        | tgTypes.InlineQueryResultCachedVoice
        | tgTypes.InlineQueryResultArticle
        | tgTypes.InlineQueryResultAudio
        | tgTypes.InlineQueryResultContact
        | tgTypes.InlineQueryResultGame
        | tgTypes.InlineQueryResultDocument
        | tgTypes.InlineQueryResultGif
        | tgTypes.InlineQueryResultLocation
        | tgTypes.InlineQueryResultMpeg4Gif
        | tgTypes.InlineQueryResultPhoto
        | tgTypes.InlineQueryResultVenue
        | tgTypes.InlineQueryResultVideo
        | tgTypes.InlineQueryResultVoice;

    /**
     * Represents a link to an article or web page.
     *
     * [InlineQueryResultArticle - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultarticle)
     */
    interface InlineQueryResultArticle {
        /**
         * Type of the result, must be article
         */
        type: 'article';
        /**
         * Unique identifier for this result, 1-64 Bytes
         */
        id: string;
        /**
         * Title of the result
         */
        title: string;
        /**
         * Content of the message to be sent
         */
        input_message_content: tgTypes.InputMessageContent;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. URL of the result
         */
        url?: string;
        /**
         * _Optional_. Pass True if you don't want the URL to be shown in the message
         */
        hide_url?: boolean;
        /**
         * _Optional_. Short description of the result
         */
        description?: string;
        /**
         * _Optional_. Url of the thumbnail for the result
         */
        thumbnail_url?: string;
        /**
         * _Optional_. Thumbnail width
         */
        thumbnail_width?: number;
        /**
         * _Optional_. Thumbnail height
         */
        thumbnail_height?: number;
    }

    /**
     * Represents a link to a photo. By default, this photo will be sent by the user with optional caption.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
     *
     * [InlineQueryResultPhoto - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultphoto)
     */
    interface InlineQueryResultPhoto {
        /**
         * Type of the result, must be photo
         */
        type: 'photo';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid URL of the photo. Photo must be in **JPEG** format. Photo size must not exceed 5MB
         */
        photo_url: string;
        /**
         * URL of the thumbnail for the photo
         */
        thumbnail_url: string;
        /**
         * _Optional_. Width of the photo
         */
        photo_width?: number;
        /**
         * _Optional_. Height of the photo
         */
        photo_height?: number;
        /**
         * _Optional_. Title for the result
         */
        title?: string;
        /**
         * _Optional_. Short description of the result
         */
        description?: string;
        /**
         * _Optional_. Caption of the photo to be sent, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the photo caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Pass True, if the caption must be shown above the message media
         */
        show_caption_above_media?: boolean;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the photo
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
     *
     * [InlineQueryResultGif - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultgif)
     */
    interface InlineQueryResultGif {
        /**
         * Type of the result, must be gif
         */
        type: 'gif';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid URL for the GIF file. File size must not exceed 1MB
         */
        gif_url: string;
        /**
         * _Optional_. Width of the GIF
         */
        gif_width?: number;
        /**
         * _Optional_. Height of the GIF
         */
        gif_height?: number;
        /**
         * _Optional_. Duration of the GIF in seconds
         */
        gif_duration?: number;
        /**
         * URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
         */
        thumbnail_url: string;
        /**
         * _Optional_. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
         */
        thumbnail_mime_type?: 'image/jpeg' | 'image/gif' | 'video/mp4';
        /**
         * _Optional_. Title for the result
         */
        title?: string;
        /**
         * _Optional_. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Pass True, if the caption must be shown above the message media
         */
        show_caption_above_media?: boolean;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the GIF animation
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound).
     * By default, this animated MPEG-4 file will be sent by the user with optional caption.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
     *
     * [InlineQueryResultMpeg4Gif - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif)
     */
    interface InlineQueryResultMpeg4Gif {
        /**
         * Type of the result, must be mpeg4_gif
         */
        type: 'mpeg4_gif';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid URL for the MPEG4 file. File size must not exceed 1MB
         */
        mpeg4_url: string;
        /**
         * _Optional_. Video width
         */
        mpeg4_width?: number;
        /**
         * _Optional_. Video height
         */
        mpeg4_height?: number;
        /**
         * _Optional_. Video duration in seconds
         */
        mpeg4_duration?: number;
        /**
         * URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
         */
        thumbnail_url: string;
        /**
         * _Optional_. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
         */
        thumbnail_mime_type?: 'image/jpeg' | 'image/gif' | 'video/mp4';
        /**
         * _Optional_. Title for the result
         */
        title?: string;
        /**
         * _Optional_. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Pass True, if the caption must be shown above the message media
         */
        show_caption_above_media?: boolean;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the video animation
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * Represents a link to a page containing an embedded video player or a video file.
     * By default, this video file will be sent by the user with an optional caption.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
     *
     * [InlineQueryResultVideo - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultvideo)
     */
    interface InlineQueryResultVideo {
        /**
         * Type of the result, must be video
         */
        type: 'video';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid URL for the embedded video player or video file
         */
        video_url: string;
        /**
         * MIME type of the content of the video URL, “text/html” or “video/mp4”
         */
        mime_type: 'text/html' | 'video/mp4';
        /**
         * URL of the thumbnail (JPEG only) for the video
         */
        thumbnail_url: string;
        /**
         * Title for the result
         */
        title: string;
        /**
         * _Optional_. Caption of the video to be sent, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the video caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Pass True, if the caption must be shown above the message media
         */
        show_caption_above_media?: boolean;
        /**
         * _Optional_. Video width
         */
        video_width?: number;
        /**
         * _Optional_. Video height
         */
        video_height?: number;
        /**
         * _Optional_. Video duration in seconds
         */
        video_duration?: number;
        /**
         * _Optional_. Short description of the result
         */
        description?: string;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the video.
         * This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * Represents a link to an MP3 audio file. By default, this audio file will be sent by the user.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
     *
     * [InlineQueryResultAudio - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultaudio)
     */
    interface InlineQueryResultAudio {
        /**
         * Type of the result, must be audio
         */
        type: 'audio';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid URL for the audio file
         */
        audio_url: string;
        /**
         * Title
         */
        title: string;
        /**
         * _Optional_. Caption, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the audio caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Performer
         */
        performer?: string;
        /**
         * _Optional_. Audio duration in seconds
         */
        audio_duration?: number;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the audio
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * Represents a link to a voice recording in an .OGG container encoded with OPUS.
     * By default, this voice recording will be sent by the user.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
     *
     * [InlineQueryResultVoice - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultvoice)
     */
    interface InlineQueryResultVoice {
        /**
         * Type of the result, must be voice
         */
        type: 'voice';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid URL for the voice recording
         */
        voice_url: string;
        /**
         * Recording title
         */
        title: string;
        /**
         * _Optional_. Caption, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the voice message caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Recording duration in seconds
         */
        voice_duration?: number;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the voice recording
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * Represents a link to a file. By default, this file will be sent by the user with an optional caption.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
     * Currently, only **.PDF** and **.ZIP** files can be sent using this method.
     *
     * [InlineQueryResultDocument - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultdocument)
     */
    interface InlineQueryResultDocument {
        /**
         * Type of the result, must be document
         */
        type: 'document';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * Title for the result
         */
        title: string;
        /**
         * _Optional_. Caption of the document to be sent, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the document caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * A valid URL for the file
         */
        document_url: string;
        /**
         * MIME type of the content of the file, either “application/pdf” or “application/zip”
         */
        mime_type: string;
        /**
         * _Optional_. Short description of the result
         */
        description?: string;
        /**
         * _Optional_. Inline keyboard attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the file
         */
        input_message_content?: tgTypes.InputMessageContent;
        /**
         * _Optional_. URL of the thumbnail (JPEG only) for the file
         */
        thumbnail_url?: string;
        /**
         * _Optional_. Thumbnail width
         */
        thumbnail_width?: number;
        /**
         * _Optional_. Thumbnail height
         */
        thumbnail_height?: number;
    }

    /**
     * Represents a location on a map. By default, the location will be sent by the user.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
     *
     * [InlineQueryResultLocation - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultlocation)
     */
    interface InlineQueryResultLocation {
        /**
         * Type of the result, must be location
         */
        type: 'location';
        /**
         * Unique identifier for this result, 1-64 Bytes
         */
        id: string;
        /**
         * Location latitude in degrees
         */
        latitude: number;
        /**
         * Location longitude in degrees
         */
        longitude: number;
        /**
         * Location title
         */
        title: string;
        /**
         * _Optional_. The radius of uncertainty for the location, measured in meters; 0-1500
         */
        horizontal_accuracy?: number;
        /**
         * _Optional_. Period in seconds during which the location can be updated,
         * should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
         */
        live_period?: number;
        /**
         * _Optional_. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
         */
        heading?: number;
        /**
         * _Optional_. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters.
         * Must be between 1 and 100000 if specified.
         */
        proximity_alert_radius?: number;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the location
         */
        input_message_content?: tgTypes.InputMessageContent;
        /**
         * _Optional_. Url of the thumbnail for the result
         */
        thumbnail_url?: string;
        /**
         * _Optional_. Thumbnail width
         */
        thumbnail_width?: number;
        /**
         * _Optional_. Thumbnail height
         */
        thumbnail_height?: number;
    }

    /**
     * Represents a venue. By default, the venue will be sent by the user.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
     *
     * [InlineQueryResultVenue - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultvenue)
     */
    interface InlineQueryResultVenue {
        /**
         * Type of the result, must be venue
         */
        type: 'venue';
        /**
         * Unique identifier for this result, 1-64 Bytes
         */
        id: string;
        /**
         * Latitude of the venue location in degrees
         */
        latitude: number;
        /**
         * Longitude of the venue location in degrees
         */
        longitude: number;
        /**
         * Title of the venue
         */
        title: string;
        /**
         * Address of the venue
         */
        address: string;
        /**
         * _Optional_. Foursquare identifier of the venue if known
         */
        foursquare_id?: string;
        /**
         * _Optional_. Foursquare type of the venue, if known.
         * (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
         */
        foursquare_type?: string;
        /**
         * _Optional_. Google Places identifier of the venue
         */
        google_place_id?: string;
        /**
         * _Optional_. Google Places type of the venue.
         * (See [supported types](https://developers.google.com/places/web-service/supported_types).)
         */
        google_place_type?: string;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the venue
         */
        input_message_content?: tgTypes.InputMessageContent;
        /**
         * _Optional_. Url of the thumbnail for the result
         */
        thumbnail_url?: string;
        /**
         * _Optional_. Thumbnail width
         */
        thumbnail_width?: number;
        /**
         * _Optional_. Thumbnail height
         */
        thumbnail_height?: number;
    }

    /**
     * Represents a contact with a phone number. By default, this contact will be sent by the user.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
     *
     * [InlineQueryResultContact - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultcontact)
     */
    interface InlineQueryResultContact {
        /**
         * Type of the result, must be contact
         */
        type: 'contact';
        /**
         * Unique identifier for this result, 1-64 Bytes
         */
        id: string;
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
         * _Optional_. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes
         */
        vcard?: string;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the contact
         */
        input_message_content?: tgTypes.InputMessageContent;
        /**
         * _Optional_. Url of the thumbnail for the result
         */
        thumbnail_url?: string;
        /**
         * _Optional_. Thumbnail width
         */
        thumbnail_width?: number;
        /**
         * _Optional_. Thumbnail height
         */
        thumbnail_height?: number;
    }

    /**
     * Represents a [Game](https://core.telegram.org/bots/api#games).
     *
     * [InlineQueryResultGame - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultgame)
     */
    interface InlineQueryResultGame {
        /**
         * Type of the result, must be game
         */
        type: string;
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * Short name of the game
         */
        game_short_name: string;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
    }

    /**
     * Represents a link to a photo stored on the Telegram servers.
     * By default, this photo will be sent by the user with an optional caption.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
     *
     * [InlineQueryResultCachedPhoto - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultcachedphoto)
     */
    interface InlineQueryResultCachedPhoto {
        /**
         * Type of the result, must be photo
         */
        type: 'photo';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid file identifier of the photo
         */
        photo_file_id: string;
        /**
         * _Optional_. Title for the result
         */
        title?: string;
        /**
         * _Optional_. Short description of the result
         */
        description?: string;
        /**
         * _Optional_. Caption of the photo to be sent, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the photo caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Pass True, if the caption must be shown above the message media
         */
        show_caption_above_media?: boolean;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the photo
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * Represents a link to an animated GIF file stored on the Telegram servers.
     * By default, this animated GIF file will be sent by the user with an optional caption.
     * Alternatively, you can use input_message_content to send a message with specified content instead of the animation.
     *
     * [InlineQueryResultCachedGif - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultcachedgif)
     */
    interface InlineQueryResultCachedGif {
        /**
         * Type of the result, must be gif
         */
        type: 'gif';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid file identifier for the GIF file
         */
        gif_file_id: string;
        /**
         * _Optional_. Title for the result
         */
        title?: string;
        /**
         * _Optional_. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Pass True, if the caption must be shown above the message media
         */
        show_caption_above_media?: boolean;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the GIF animation
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers.
     * By default, this animated MPEG-4 file will be sent by the user with an optional caption.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
     *
     * [InlineQueryResultCachedMpeg4Gif - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif)
     */
    interface InlineQueryResultCachedMpeg4Gif {
        /**
         * Type of the result, must be mpeg4_gif
         */
        type: 'mpeg4_gif';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid file identifier for the MPEG4 file
         */
        mpeg4_file_id: string;
        /**
         * _Optional_. Title for the result
         */
        title?: string;
        /**
         * _Optional_. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Pass True, if the caption must be shown above the message media
         */
        show_caption_above_media?: boolean;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the video animation
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
     *
     * [InlineQueryResultCachedSticker - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultcachedsticker)
     */
    interface InlineQueryResultCachedSticker {
        /**
         * Type of the result, must be sticker
         */
        type: 'sticker';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid file identifier of the sticker
         */
        sticker_file_id: string;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the sticker
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
     *
     * [InlineQueryResultCachedDocument - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultcacheddocument)
     */
    interface InlineQueryResultCachedDocument {
        /**
         * Type of the result, must be document
         */
        type: 'document';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * Title for the result
         */
        title: string;
        /**
         * A valid file identifier for the file
         */
        document_file_id: string;
        /**
         * _Optional_. Short description of the result
         */
        description?: string;
        /**
         * _Optional_. Caption of the document to be sent, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the document caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the file
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * Represents a link to a video file stored on the Telegram servers.
     * By default, this video file will be sent by the user with an optional caption.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
     *
     * [InlineQueryResultCachedVideo - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultcachedvideo)
     */
    interface InlineQueryResultCachedVideo {
        /**
         * Type of the result, must be video
         */
        type: 'video';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid file identifier for the video file
         */
        video_file_id: string;
        /**
         * Title for the result
         */
        title: string;
        /**
         * _Optional_. Short description of the result
         */
        description?: string;
        /**
         * _Optional_. Caption of the video to be sent, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the video caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Pass True, if the caption must be shown above the message media
         */
        show_caption_above_media?: boolean;
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the video
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
     *
     * [InlineQueryResultCachedVoice - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultcachedvoice)
     */
    interface InlineQueryResultCachedVoice {
        /**
         * Type of the result, must be voice
         */
        type: string;
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid file identifier for the voice message
         */
        voice_file_id: string;
        /**
         * Voice message title
         */
        title: string;
        /**
         * _Optional_. Caption, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the voice message caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the voice message
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user.
     * Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
     *
     * [InlineQueryResultCachedAudio - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inlinequeryresultcachedaudio)
     */
    interface InlineQueryResultCachedAudio {
        /**
         * Type of the result, must be audio
         */
        type: 'audio';
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid file identifier for the audio file
         */
        audio_file_id: string;
        /**
         * _Optional_. Caption, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the audio caption.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in the caption, which can be specified instead of parse_mode
         */
        caption_entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. [Inline keyboard](https://core.telegram.org/bots/features#inline-keyboards) attached to the message
         */
        reply_markup?: tgTypes.InlineKeyboardMarkup;
        /**
         * _Optional_. Content of the message to be sent instead of the audio
         */
        input_message_content?: tgTypes.InputMessageContent;
    }

    /**
     * This object represents the content of a message to be sent as a result of an inline query.
     *
     * [InputMessageContent - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputmessagecontent)
     */
    type InputMessageContent =
        tgTypes.InputTextMessageContent
        | tgTypes.InputLocationMessageContent
        | tgTypes.InputVenueMessageContent
        | tgTypes.InputContactMessageContent
        | tgTypes.InputInvoiceMessageContent;


    /**
     * Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a text message
     * to be sent as the result of an inline query.
     *
     * [InputTextMessageContent - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputtextmessagecontent)
     */
    interface InputTextMessageContent {
        /**
         * Text of the message to be sent, 1-4096 characters
         */
        message_text: string;
        /**
         * _Optional_. Mode for parsing entities in the message text.
         * See [formatting options](https://core.telegram.org/bots/api#formatting-options) for more details.
         */
        parse_mode?: string;
        /**
         * _Optional_. List of special entities that appear in message text, which can be specified instead of parse_mode
         */
        entities?: tgTypes.MessageEntity[];
        /**
         * _Optional_. Link preview generation options for the message
         */
        link_preview_options?: tgTypes.LinkPreviewOptions;
    }

    /**
     * Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a location message
     * to be sent as the result of an inline query.
     *
     * [InputLocationMessageContent - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputlocationmessagecontent)
     */
    interface InputLocationMessageContent {
        /**
         * Latitude of the location in degrees
         */
        latitude: number;
        /**
         * Longitude of the location in degrees
         */
        longitude: number;
        /**
         * _Optional_. The radius of uncertainty for the location, measured in meters; 0-1500
         */
        horizontal_accuracy?: number;
        /**
         * _Optional_. Period in seconds during which the location can be updated,
         * should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.
         */
        live_period?: number;
        /**
         * _Optional_. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
         */
        heading?: number;
        /**
         * _Optional_. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters.
         * Must be between 1 and 100000 if specified.
         */
        proximity_alert_radius?: number;
    }

    /**
     * Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a venue message
     * to be sent as the result of an inline query.
     *
     * [InputVenueMessageContent - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputvenuemessagecontent)
     */
    interface InputVenueMessageContent {
        /**
         * Latitude of the venue in degrees
         */
        latitude: number;
        /**
         * Longitude of the venue in degrees
         */
        longitude: number;
        /**
         * Name of the venue
         */
        title: string;
        /**
         * Address of the venue
         */
        address: string;
        /**
         * _Optional_. Foursquare identifier of the venue, if known
         */
        foursquare_id?: string;
        /**
         * _Optional_. Foursquare type of the venue, if known.
         * (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
         */
        foursquare_type?: string;
        /**
         * _Optional_. Google Places identifier of the venue
         */
        google_place_id?: string;
        /**
         * _Optional_. Google Places type of the venue.
         * (See [supported types](https://developers.google.com/places/web-service/supported_types).)
         */
        google_place_type?: string;
    }

    /**
     * Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a contact message
     * to be sent as the result of an inline query.
     *
     * [InputContactMessageContent - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputcontactmessagecontent)
     */
    interface InputContactMessageContent {
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
         * _Optional_. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes
         */
        vcard?: string;
    }

    /**
     * Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of an invoice message
     * to be sent as the result of an inline query.
     *
     * [InputInvoiceMessageContent - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputinvoicemessagecontent)
     */
    interface InputInvoiceMessageContent {
        /**
         * Product name, 1-32 characters
         */
        title: string;
        /**
         * Product description, 1-255 characters
         */
        description: string;
        /**
         * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
         */
        payload: string;
        /**
         * _Optional_. Payment provider token, obtained via [@BotFather](https://t.me/botfather).
         * Pass an empty string for payments in [Telegram Stars](https://t.me/BotNews/90).
         */
        provider_token?: string;
        /**
         * Three-letter ISO 4217 currency code, see [more on currencies](https://core.telegram.org/bots/payments#supported-currencies).
         * Pass “XTR” for payments in [Telegram Stars](https://t.me/BotNews/90).
         */
        currency: string;
        /**
         * Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.).
         * Must contain exactly one item for payments in [Telegram Stars](https://t.me/BotNews/90).
         */
        prices: tgTypes.LabeledPrice[];
        /**
         * _Optional_. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double).
         * For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in
         * [currencies.json](https://core.telegram.org/bots/payments/currencies.json),
         * it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
         * Defaults to 0. Not supported for payments in [Telegram Stars](https://t.me/BotNews/90).
         */
        max_tip_amount?: number;
        /**
         * _Optional_. A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double).
         * At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive,
         * passed in a strictly increased order and must not exceed max_tip_amount.
         */
        suggested_tip_amounts?: number[];
        /**
         * _Optional_. A JSON-serialized object for data about the invoice, which will be shared with the payment provider.
         * A detailed description of the required fields should be provided by the payment provider.
         */
        provider_data?: string;
        /**
         * _Optional_. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
         */
        photo_url?: string;
        /**
         * _Optional_. Photo size in bytes
         */
        photo_size?: number;
        /**
         * _Optional_. Photo width
         */
        photo_width?: number;
        /**
         * _Optional_. Photo height
         */
        photo_height?: number;
        /**
         * _Optional_. Pass True if you require the user's full name to complete the order.
         * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
         */
        need_name?: boolean;
        /**
         * _Optional_. Pass True if you require the user's phone number to complete the order.
         * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
         */
        need_phone_number?: boolean;
        /**
         * _Optional_. Pass True if you require the user's email address to complete the order.
         * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
         */
        need_email?: boolean;
        /**
         * _Optional_. Pass True if you require the user's shipping address to complete the order.
         * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
         */
        need_shipping_address?: boolean;
        /**
         * _Optional_. Pass True if the user's phone number should be sent to the provider.
         * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
         */
        send_phone_number_to_provider?: boolean;
        /**
         * _Optional_. Pass True if the user's email address should be sent to the provider.
         * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
         */
        send_email_to_provider?: boolean;
        /**
         * _Optional_. Pass True if the final price depends on the shipping method.
         * Ignored for payments in [Telegram Stars](https://t.me/BotNews/90).
         */
        is_flexible?: boolean;
    }

    /**
     * Represents a [result](https://core.telegram.org/bots/api#inlinequeryresult) of an inline query
     * that was chosen by the user and sent to their chat partner.
     *
     * [ChosenInlineResult - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#choseninlineresult)
     */
    interface ChosenInlineResult {
        /**
         * The unique identifier for the result that was chosen
         */
        result_id: string;
        /**
         * The user that chose the result
         */
        from: tgTypes.User;
        /**
         * _Optional_. Sender location, only for bots that require user location
         */
        location?: tgTypes.Location;
        /**
         * _Optional_. Identifier of the sent inline message.
         * Available only if there is an [inline keyboard](https://core.telegram.org/bots/api#inlinekeyboardmarkup)
         * attached to the message. Will be also received in [callback queries](https://core.telegram.org/bots/api#callbackquery)
         * and can be used to [edit](https://core.telegram.org/bots/api#updating-messages) the message.
         */
        inline_message_id?: string;
        /**
         * The query that was used to obtain the result
         */
        query: string;
    }

    /**
     * Describes an inline message sent by a [Web App](https://core.telegram.org/bots/webapps) on behalf of a user.
     *
     * [SentWebAppMessage - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#sentwebappmessage)
     */
    interface SentWebAppMessage {
        /**
         * _Optional_. Identifier of the sent inline message.
         * Available only if there is an [inline keyboard](https://core.telegram.org/bots/api#inlinekeyboardmarkup) attached to the message.
         */
        inline_message_id?: string;
    }
}
