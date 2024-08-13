declare namespace tgTypes {
    /**
     * Describes the paid media added to a message.
     *
     * [PaidMediaInfo - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#paidmediainfo)
     */
    interface PaidMediaInfo {
        /**
         * The number of Telegram Stars that must be paid to buy access to the media
         */
        star_count: number;
        /**
         * Information about the paid media
         */
        paid_media: tgTypes.PaidMedia[];
    }

    /**
     * This object describes paid media.
     *
     * [PaidMediaInfo - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#paidmediainfo)
     */
    type PaidMedia =
        tgTypes.PaidMediaPreview
        | tgTypes.PaidMediaPhoto
        | tgTypes.PaidMediaVideo

    /**
     * The paid media isn't available before the payment.
     *
     * [PaidMediaPreview - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#paidmediapreview)
     */
    interface PaidMediaPreview {
        /**
         * Type of the paid media, always “preview”
         */
        type: 'preview';
        /**
         * _Optional_. Media width as defined by the sender
         */
        width?: number;
        /**
         * _Optional_. Media height as defined by the sender
         */
        height?: number;
        /**
         * _Optional_. Duration of the media in seconds as defined by the sender
         */
        duration?: number;
    }

    /**
     * The paid media is a photo.
     *
     * [PaidMediaPhoto - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#paidmediaphoto)
     */
    interface PaidMediaPhoto {
        /**
         * Type of the paid media, always “photo”
         */
        type: 'photo';
        /**
         * The photo
         */
        photo: tgTypes.PhotoSize[];
    }

    /**
     * The paid media is a video.
     *
     * [PaidMediaVideo - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#paidmediavideo)
     */
    interface PaidMediaVideo {
        /**
         * Type of the paid media, always “video”
         */
        type: string;
        /**
         * The video
         */
        video: tgTypes.Video;
    }
}
