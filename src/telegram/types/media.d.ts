declare namespace tgTypes {
    /**
     * This object represents one size of a photo or a [file](https://core.telegram.org/bots/api#document) /
     * [sticker](https://core.telegram.org/bots/api#sticker) thumbnail.
     *
     * [PhotoSize - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#photosize)
     */
    interface PhotoSize {
        /**
         * Identifier for this file, which can be used to download or reuse the file
         */
        file_id: string;
        /**
         * Unique identifier for this file, which is supposed to be the same over time and for different bots.
         * Can't be used to download or reuse the file.
         */
        file_unique_id: string;
        /**
         * Photo width
         */
        width: number;
        /**
         * Photo height
         */
        height: number;
        /**
         * _Optional_. File size in bytes
         */
        file_size?: number;
    }

    /**
     * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
     *
     * [Animation - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#animation)
     */
    interface Animation {
        /**
         * Identifier for this file, which can be used to download or reuse the file
         */
        file_id: string;
        /**
         * Unique identifier for this file, which is supposed to be the same over time and for different bots.
         * Can't be used to download or reuse the file.
         */
        file_unique_id: string;
        /**
         * Video width as defined by the sender
         */
        width: number;
        /**
         * Video height as defined by the sender
         */
        height: number;
        /**
         * Duration of the video in seconds as defined by the sender
         */
        duration: number;
        /**
         * _Optional_. Animation thumbnail as defined by the sender
         */
        thumbnail?: tgTypes.PhotoSize;
        /**
         * _Optional_. Original animation filename as defined by the sender
         */
        file_name?: string;
        /**
         * _Optional_. MIME type of the file as defined by the sender
         */
        mime_type?: string;
        /**
         * _Optional_. File size in bytes.
         */
        file_size?: number;
    }

    /**
     * This object represents an audio file to be treated as music by the Telegram clients.
     *
     * [Audio - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#audio)
     */
    interface Audio {
        /**
         * Identifier for this file, which can be used to download or reuse the file
         */
        file_id: string;
        /**
         * Unique identifier for this file, which is supposed to be the same over time and for different bots.
         * Can't be used to download or reuse the file.
         */
        file_unique_id: string;
        /**
         * Duration of the audio in seconds as defined by the sender
         */
        duration: number;
        /**
         * _Optional_. Performer of the audio as defined by the sender or by audio tags
         */
        performer?: string;
        /**
         * _Optional_. Title of the audio as defined by the sender or by audio tags
         */
        title?: string;
        /**
         * _Optional_. Original filename as defined by the sender
         */
        file_name?: string;
        /**
         * _Optional_. MIME type of the file as defined by the sender
         */
        mime_type?: string;
        /**
         * _Optional_. File size in bytes.
         */
        file_size?: number;
        /**
         * _Optional_. Thumbnail of the album cover to which the music file belongs
         */
        thumbnail?: tgTypes.PhotoSize;
    }

    /**
     * This object represents a general file (as opposed to [photos](https://core.telegram.org/bots/api#photosize)
     * [voice messages](https://core.telegram.org/bots/api#voice) and [audio files](https://core.telegram.org/bots/api#audio)).
     *
     * [Document - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#document)
     */
    interface Document {
        /**
         * Identifier for this file, which can be used to download or reuse the file
         */
        file_id: string;
        /**
         * Unique identifier for this file, which is supposed to be the same over time and for different bots.
         * Can't be used to download or reuse the file.
         */
        file_unique_id: string;
        /**
         * _Optional_. Document thumbnail as defined by the sender
         */
        thumbnail?: tgTypes.PhotoSize;
        /**
         * _Optional_. Original filename as defined by the sender
         */
        file_name?: string;
        /**
         * _Optional_. MIME type of the file as defined by the sender
         */
        mime_type?: string;
        /**
         * _Optional_. File size in bytes.
         */
        file_size?: number;
    }

    /**
     * This object represents a story.
     *
     * [Story - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#story)
     */
    interface Story {
        /**
         * Chat that posted the story
         */
        chat: tgTypes.Chat;
        /**
         * Unique identifier for the story in the chat
         */
        id: number;
    }

    /**
     * This object represents a video file.
     *
     * [Video - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#video)
     */
    interface Video {
        /**
         * Identifier for this file, which can be used to download or reuse the file
         */
        file_id: string;
        /**
         * Unique identifier for this file, which is supposed to be the same over time and for different bots.
         * Can't be used to download or reuse the file.
         */
        file_unique_id: string;
        /**
         * Video width as defined by the sender
         */
        width: number;
        /**
         * Video height as defined by the sender
         */
        height: number;
        /**
         * Duration of the video in seconds as defined by the sender
         */
        duration: number;
        /**
         * _Optional_. Video thumbnail
         */
        thumbnail?: tgTypes.PhotoSize;
        /**
         * _Optional_. Original filename as defined by the sender
         */
        file_name?: string;
        /**
         * _Optional_. MIME type of the file as defined by the sender
         */
        mime_type?: string;
        /**
         * _Optional_. File size in bytes.
         */
        file_size?: number;
    }

    /**
     * This object represents a [video message](https://telegram.org/blog/video-messages-and-telescope)
     * (available in Telegram apps as of [v.4.0](https://telegram.org/blog/video-messages-and-telescope)).
     *
     * [VideoNote - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#videonote)
     */
    interface VideoNote {
        /**
         * Identifier for this file, which can be used to download or reuse the file
         */
        file_id: string;
        /**
         * Unique identifier for this file, which is supposed to be the same over time and for different bots.
         * Can't be used to download or reuse the file.
         */
        file_unique_id: string;
        /**
         * Video width and height (diameter of the video message) as defined by the sender
         */
        length: number;
        /**
         * Duration of the video in seconds as defined by the sender
         */
        duration: number;
        /**
         * _Optional_. Video thumbnail
         */
        thumbnail?: tgTypes.PhotoSize;
        /**
         * _Optional_. File size in bytes
         */
        file_size?: number;
    }

    /**
     * This object represents a voice note.
     *
     * [Voice - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#voice)
     */
    interface Voice {
        /**
         * Identifier for this file, which can be used to download or reuse the file
         */
        file_id: string;
        /**
         * Unique identifier for this file, which is supposed to be the same over time and for different bots.
         * Can't be used to download or reuse the file.
         */
        file_unique_id: string;
        /**
         * Duration of the audio in seconds as defined by the sender
         */
        duration: number;
        /**
         * _Optional_. MIME type of the file as defined by the sender
         */
        mime_type?: string;
        /**
         * _Optional_. File size in bytes.
         */
        file_size?: number;
    }

    /**
     * This object represents a file ready to be downloaded.
     * The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`.
     * It is guaranteed that the link will be valid for at least 1 hour.
     * When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile).
     *
     * > The maximum file size to download is 20 MB
     *
     * [File - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#file)
     */
    interface File {
        /**
         * Identifier for this file, which can be used to download or reuse the file
         */
        file_id: string;
        /**
         * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
         */
        file_unique_id: string;
        /**
         * _Optional_. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
         */
        file_size?: number;
        /**
         * _Optional_. File path. Use `https://api.telegram.org/file/bot<token>/<file_path>` to get the file.
         */
        file_path?: string;
    }
}
