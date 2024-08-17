declare namespace tgTypes {
    /**
     * This object represents the content of a media message to be sent. It should be one of
     *
     * [InputMedia - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputmedia)
     */
    type InputMedia =
        tgTypes.InputMediaAnimation
        | tgTypes.InputMediaDocument
        | tgTypes.InputMediaAudio
        | tgTypes.InputMediaPhoto
        | tgTypes.InputMediaVideo;

    /**
     * Represents a photo to be sent.
     *
     * [InputMediaPhoto - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputmediaphoto)
     */
    interface InputMediaPhoto {
        /**
         * Type of the result, must be photo
         */
        type: 'photo';
        /**
         * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended),
         * pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using
         * multipart/form-data under <file_attach_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)
         */
        media: string;
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
         * _Optional_. Pass True if the photo needs to be covered with a spoiler animation
         */
        has_spoiler?: boolean;
    }

    /**
     * Represents a video to be sent.
     *
     * [InputMediaVideo - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputmediavideo)
     */
    interface InputMediaVideo {
        /**
         * Type of the result, must be video
         */
        type: 'video';
        /**
         * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended),
         * pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using
         * multipart/form-data under <file_attach_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)
         */
        media: string;
        /**
         * _Optional_. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
         * The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320.
         * Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file,
         * so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
         * [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)
         */
        thumbnail?: tgTypes.InputFile;
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
        width?: number;
        /**
         * _Optional_. Video height
         */
        height?: number;
        /**
         * _Optional_. Video duration in seconds
         */
        duration?: number;
        /**
         * _Optional_. Pass True if the uploaded video is suitable for streaming
         */
        supports_streaming?: boolean;
        /**
         * _Optional_. Pass True if the video needs to be covered with a spoiler animation
         */
        has_spoiler?: boolean;
    }

    /**
     * Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
     *
     * [InputMediaAnimation - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputmediaanimation)
     */
    interface InputMediaAnimation {
        /**
         * Type of the result, must be animation
         */
        type: 'animation';
        /**
         * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended),
         * pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using
         * multipart/form-data under <file_attach_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)
         */
        media: string;
        /**
         * _Optional_. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
         * The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320.
         * Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file,
         * so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
         * [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)
         */
        thumbnail?: tgTypes.InputFile;
        /**
         * _Optional_. Caption of the animation to be sent, 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * _Optional_. Mode for parsing entities in the animation caption.
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
         * _Optional_. Animation width
         */
        width?: number;
        /**
         * _Optional_. Animation height
         */
        height?: number;
        /**
         * _Optional_. Animation duration in seconds
         */
        duration?: number;
        /**
         * _Optional_. Pass True if the animation needs to be covered with a spoiler animation
         */
        has_spoiler?: boolean;
    }

    /**
     * Represents an audio file to be treated as music to be sent.
     *
     * [InputMediaAudio - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputmediaaudio)
     */
    interface InputMediaAudio {
        /**
         * Type of the result, must be audio
         */
        type: 'audio';
        /**
         * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended),
         * pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using
         * multipart/form-data under <file_attach_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)
         */
        media: string;
        /**
         * _Optional_. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
         * The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320.
         * Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file,
         * so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
         * [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)
         */
        thumbnail?: tgTypes.InputFile;
        /**
         * _Optional_. Caption of the audio to be sent, 0-1024 characters after entities parsing
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
         * _Optional_. Duration of the audio in seconds
         */
        duration?: number;
        /**
         * _Optional_. Performer of the audio
         */
        performer?: string;
        /**
         * _Optional_. Title of the audio
         */
        title?: string;
    }

    /**
     * Represents a general file to be sent.
     *
     * [InputMediaDocument - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputmediadocument)
     */
    interface InputMediaDocument {
        /**
         * Type of the result, must be document
         */
        type: 'document';
        /**
         * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended),
         * pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using
         * multipart/form-data under <file_attach_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)
         */
        media: string;
        /**
         * _Optional_. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
         * The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320.
         * Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file,
         * so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
         * [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)
         */
        thumbnail?: tgTypes.InputFile;
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
         * _Optional_. Disables automatic server-side content type detection for files uploaded using multipart/form-data.
         * Always True, if the document is sent as part of an album.
         */
        disable_content_type_detection?: boolean;
    }

    /**
     * This object represents the contents of a file to be uploaded.
     * Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
     *
     * [InputFile - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputfile)
     */
    interface InputFile {
    }

    /**
     * This object describes the paid media to be sent. Currently, it can be one of
     *
     * [InputPaidMedia - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputpaidmedia)
     */
    type InputPaidMedia =
        tgTypes.InputPaidMediaPhoto
        | tgTypes.InputPaidMediaVideo;

    /**
     * The paid media to send is a photo.
     *
     * [InputPaidMediaPhoto - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputpaidmediaphoto)
     */
    interface InputPaidMediaPhoto {
        /**
         * Type of the media, must be photo
         */
        type: 'photo';
        /**
         * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended),
         * pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using
         * multipart/form-data under <file_attach_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)
         */
        media: string;
    }

    /**
     * The paid media to send is a video.
     *
     * [InputPaidMediaVideo - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#inputpaidmediavideo)
     */
    interface InputPaidMediaVideo {
        /**
         * Type of the media, must be video
         */
        type: 'video';
        /**
         * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended),
         * pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using
         * multipart/form-data under <file_attach_name> name. [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)
         */
        media: string;
        /**
         * _Optional_. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
         * The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320.
         * Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file,
         * so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
         * [More information on Sending Files »](https://core.telegram.org/bots/api#sending-files)
         */
        thumbnail?: tgTypes.InputFile;
        /**
         * _Optional_. Video width
         */
        width?: number;
        /**
         * _Optional_. Video height
         */
        height?: number;
        /**
         * _Optional_. Video duration in seconds
         */
        duration?: number;
        /**
         * _Optional_. Pass True if the uploaded video is suitable for streaming
         */
        supports_streaming?: boolean;
    }
}
