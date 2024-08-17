declare namespace tgTypes {
    /**
     * This object describes the way a background is filled based on the selected colors.
     *
     * [MaybeInaccessibleMessage - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#backgroundfill)
     */
    type BackgroundFill =
        tgTypes.BackgroundFillSolid
        | tgTypes.BackgroundFillGradient
        | tgTypes.BackgroundFillFreeformGradient;

    /**
     * The background is filled using the selected color.
     *
     * [BackgroundFillSolid - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#backgroundfillsolid)
     */
    interface BackgroundFillSolid {
        /**
         * Type of the background fill, always “solid”
         */
        type: 'solid';
        /**
         * The color of the background fill in the RGB24 format
         */
        color: number;
    }

    /**
     * The background is a gradient fill.
     *
     * [BackgroundFillGradient - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#backgroundfillgradient)
     */
    interface BackgroundFillGradient {
        /**
         * Type of the background fill, always “gradient”
         */
        type: 'gradient';
        /**
         * Top color of the gradient in the RGB24 format
         */
        top_color: number;
        /**
         * Bottom color of the gradient in the RGB24 format
         */
        bottom_color: number;
        /**
         * Clockwise rotation angle of the background fill in degrees; 0-359
         */
        rotation_angle: number;
    }

    /**
     * The background is a freeform gradient that rotates after every message in the chat.
     *
     * [BackgroundFillFreeformGradient - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#backgroundfillfreeformgradient)
     */
    interface BackgroundFillFreeformGradient {
        /**
         * Type of the background fill, always “freeform_gradient”
         */
        type: 'freeform_gradient';
        /**
         * A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format
         */
        colors: number[];
    }

    /**
     * This object describes the type of a background. Currently, it can be one of
     *
     * [BackgroundType - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#backgroundtype)
     */

    type BackgroundType =
        tgTypes.BackgroundTypeFill
        | tgTypes.BackgroundTypeWallpaper
        | tgTypes.BackgroundTypePattern
        | tgTypes.BackgroundTypeChatTheme;

    /**
     * The background is automatically filled based on the selected colors.
     *
     * [BackgroundTypeFill - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#backgroundtypefill)
     */
    interface BackgroundTypeFill {
        /**
         * Type of the background, always “fill”
         */
        type: 'fill';
        /**
         * The background fill
         */
        fill: tgTypes.BackgroundFill;
        /**
         * Dimming of the background in dark themes, as a percentage; 0-100
         */
        dark_theme_dimming: number;
    }

    /**
     * The background is a wallpaper in the JPEG format.
     *
     * [BackgroundTypeWallpaper - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#backgroundtypewallpaper)
     */
    interface BackgroundTypeWallpaper {
        /**
         * Type of the background, always “wallpaper”
         */
        type: 'wallpaper';
        /**
         * Document with the wallpaper
         */
        document: tgTypes.Document;
        /**
         * Dimming of the background in dark themes, as a percentage; 0-100
         */
        dark_theme_dimming: number;
        /**
         * _Optional_. True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12
         */
        is_blurred?: true;
        /**
         * _Optional_. True, if the background moves slightly when the device is tilted
         */
        is_moving?: true;
    }

    /**
     * The background is a PNG or TGV (gzipped subset of SVG with MIME type “application/x-tgwallpattern”)
     * pattern to be combined with the background fill chosen by the user.
     *
     * [BackgroundTypePattern - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#backgroundtypepattern)
     */
    interface BackgroundTypePattern {
        /**
         * Type of the background, always “pattern”
         */
        type: 'pattern';
        /**
         * Document with the pattern
         */
        document: tgTypes.Document;
        /**
         * The background fill that is combined with the pattern
         */
        fill: tgTypes.BackgroundFill;
        /**
         * Intensity of the pattern when it is shown above the filled background; 0-100
         */
        intensity: number;
        /**
         * _Optional_. True, if the background fill must be applied only to the pattern itself.
         * All other pixels are black in this case. For dark themes only
         */
        is_inverted?: true;
        /**
         * _Optional_. True, if the background moves slightly when the device is tilted
         */
        is_moving?: true;
    }

    /**
     * The background is taken directly from a built-in chat theme.
     *
     * [BackgroundTypeChatTheme - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#backgroundtypechattheme)
     */
    interface BackgroundTypeChatTheme {
        /**
         * Type of the background, always “chat_theme”
         */
        type: 'chat_theme';
        /**
         * Name of the chat theme, which is usually an emoji
         */
        theme_name: string;
    }

    /**
     * This object represents a chat background.
     *
     * [ChatBackground - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatbackground)
     */
    interface ChatBackground {
        /**
         * Type of the background
         */
        type: tgTypes.BackgroundType;
    }
}
