declare namespace tgTypes {
    /**
     * This object represents a bot command.
     *
     * [BotCommand - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#botcommand)
     */
    interface BotCommand {
        /**
         * Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores.
         */
        command: string;
        /**
         * Description of the command; 1-256 characters.
         */
        description: string;
    }

    /**
     * This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:
     *
     * [BotCommandScope - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#botcommandscope)
     */
    type BotCommandScope =
        tgTypes.BotCommandScopeDefault
        | tgTypes.BotCommandScopeAllPrivateChats
        | tgTypes.BotCommandScopeAllGroupChats
        | tgTypes.BotCommandScopeAllChatAdministrators
        | tgTypes.BotCommandScopeChat
        | tgTypes.BotCommandScopeChatAdministrators
        | tgTypes.BotCommandScopeChatMember;

    /**
     * Represents the default [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands.
     * Default commands are used if no commands with a [narrower scope](https://core.telegram.org/bots/api#determining-list-of-commands)
     * are specified for the user.
     *
     * [BotCommandScopeDefault - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#botcommandscopedefault)
     */
    interface BotCommandScopeDefault {
        /**
         * Scope type, must be default
         */
        type: 'default';
    }

    /**
     * Represents the [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands, covering all private chats.
     *
     * [BotCommandScopeAllPrivateChats - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#botcommandscopeallprivatechats)
     */
    interface BotCommandScopeAllPrivateChats {
        /**
         * Scope type, must be all_private_chats
         */
        type: 'all_private_chats';
    }

    /**
     * Represents the [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands, covering all group and supergroup chats.
     *
     * [BotCommandScopeAllGroupChats - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#botcommandscopeallgroupchats)
     */
    interface BotCommandScopeAllGroupChats {
        /**
         * Scope type, must be all_group_chats
         */
        type: 'all_group_chats';
    }

    /**
     * Represents the [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands,
     * covering all group and supergroup chat administrators.
     *
     * [BotCommandScopeAllChatAdministrators - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#botcommandscopeallchatadministrators)
     */
    interface BotCommandScopeAllChatAdministrators {
        /**
         * Scope type, must be all_chat_administrators
         */
        type: 'all_chat_administrators';
    }

    /**
     * Represents the [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands, covering a specific chat.
     *
     * [BotCommandScopeChat - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#botcommandscopechat)
     */
    interface BotCommandScopeChat {
        /**
         * Scope type, must be chat
         */
        type: 'chat';
        /**
         * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
         */
        chat_id: number | string;
    }

    /**
     * Represents the [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands, covering all administrators of a specific group or supergroup chat.
     *
     * [BotCommandScopeChatAdministrators - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#botcommandscopechatadministrators)
     */
    interface BotCommandScopeChatAdministrators {
        /**
         * Scope type, must be chat_administrators
         */
        type: string;
        /**
         * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
         */
        chat_id: number | string;
    }

    /**
     * Represents the [scope](https://core.telegram.org/bots/api#botcommandscope) of bot commands,
     * covering a specific member of a group or supergroup chat.
     *
     * [BotCommandScopeChatMember - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#botcommandscopechatmember)
     */
    interface BotCommandScopeChatMember {
        /**
         * Scope type, must be chat_member
         */
        type: 'chat_member';
        /**
         * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
         */
        chat_id: number | string;
        /**
         * Unique identifier of the target user
         */
        user_id: number;
    }

    /**
     * This object represents the bot's name.
     *
     * [BotName - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#botname)
     */
    interface BotName {
        /**
         * The bot's name
         */
        name: string;
    }

    /**
     * This object represents the bot's description.
     *
     * [BotDescription - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#botdescription)
     */
    interface BotDescription {
        /**
         * The bot's description
         */
        description: string;
    }

    /**
     * This object represents the bot's short description.
     *
     * [BotShortDescription - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#botshortdescription)
     */
    interface BotShortDescription {
        /**
         * The bot's short description
         */
        short_description: string;
    }

    /**
     * This object describes the bot's menu button in a private chat. It should be one of
     *
     * [MenuButton - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#menubutton)
     */
    type MenuButton =
        tgTypes.MenuButtonCommands
        | tgTypes.MenuButtonWebApp
        | tgTypes.MenuButtonDefault

    /**
     * Represents a menu button, which opens the bot's list of commands.
     *
     * [MenuButtonCommands - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#menubuttoncommands)
     */
    interface MenuButtonCommands {
        /**
         * Type of the button, must be commands
         */
        type: 'commands';
    }

    /**
     * Represents a menu button, which launches a [Web App](https://core.telegram.org/bots/webapps).
     *
     * [MenuButtonWebApp - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#menubuttonwebapp)
     */
    interface MenuButtonWebApp {
        /**
         * Type of the button, must be web_app
         */
        type: 'web_app';
        /**
         * Text on the button
         */
        text: string;
        /**
         * Description of the Web App that will be launched when the user presses the button.
         * The Web App will be able to send an arbitrary message on behalf of the user using the method
         * [answerWebAppQuery](https://core.telegram.org/bots/api#answerwebappquery).
         * Alternatively, a `t.me` link to a Web App of the bot can be specified in the object instead of the Web App's URL,
         * in which case the Web App will be opened as if the user pressed the link.
         */
        web_app: tgTypes.WebAppInfo;
    }

    /**
     * Describes that no specific value for the menu button was set.
     *
     * [MenuButtonDefault - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#menubuttondefault)
     */
    interface MenuButtonDefault {
        /**
         * Type of the button, must be default
         */
        type: 'default';
    }
}
