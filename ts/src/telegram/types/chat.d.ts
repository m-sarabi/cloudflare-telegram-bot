declare namespace tgTypes {
    /**
     * This object represents a chat.
     *
     * [Chat - on Telegram Bot API Documentation](https://core.telegram.org/bots/api#chat)
     */
    interface Chat {
        /**
         * Unique identifier for this chat.
         */
        id: number;
        /**
         * Type of the chat, can be either "private", "group", "supergroup" or "channel"
         */
        type: 'private' | 'group' | 'supergroup' | 'channel';
        /**
         * _Optional_. Title, for supergroups, channels and group chats
         */
        title?: string;
        /**
         * _Optional_. Username, for private chats, supergroups and channels if available
         */
        username?: string;
        /**
         * _Optional_. First name of the other party in a private chat
         */
        first_name?: string;
        /**
         * _Optional_. Last name of the other party in a private chat
         */
        last_name?: string;
        /**
         * _Optional_. True, if the supergroup chat is a forum
         * (has [topics](https://telegram.org/blog/topics-in-groups-collectible-usernames#topics-in-groups) enabled)
         */
        is_forum?: true;
    }

    /**
     * This object contains full information about a chat.
     *
     * [ChatFullInfo - on Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatfullinfo)
     */
    interface ChatFullInfo {
        /**
         * Unique identifier for this chat.
         */
        id: number;
        /**
         * Type of the chat, can be either "private", "group", "supergroup" or "channel"
         */
        type: 'private' | 'group' | 'supergroup' | 'channel';
        /**
         * _Optional_. Title, for supergroups, channels and group chats
         */
        title?: string;
        /**
         * _Optional_. Username, for private chats, supergroups and channels if available
         */
        username?: string;
        /**
         * _Optional_. First name of the other party in a private chat
         */
        first_name?: string;
        /**
         * _Optional_. Last name of the other party in a private chat
         */
        last_name?: string;
        /**
         * _Optional_. True, if the supergroup chat is a forum
         * (has [topics](https://telegram.org/blog/topics-in-groups-collectible-usernames#topics-in-groups) enabled)
         */
        is_forum?: true;
        /**
         * Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview.
         * See [accent colors](https://core.telegram.org/bots/api#accent-colors) for more details.
         */
        accent_color_id: number;
        /**
         * The maximum number of reactions that can be set on a message in the chat
         */
        max_reaction_count: number;
        /**
         * _Optional_. Chat photo
         */
        photo?: tgTypes.ChatPhoto;
        /**
         * _Optional_. If non-empty, the list of all
         * [active chat usernames](https://telegram.org/blog/topics-in-groups-collectible-usernames#collectible-usernames);
         * for private chats, supergroups and channels
         */
        active_usernames?: string[];
        /**
         * _Optional_. For private chats, the date of birth of the user
         */
        birthdate?: tgTypes.Birthdate;
        /**
         * _Optional_. For private chats with business accounts, the intro of the business
         */
        business_intro?: tgTypes.BusinessIntro;
        /**
         * _Optional_. For private chats with business accounts, the location of the business
         */
        business_location?: tgTypes.BusinessLocation;
        /**
         * _Optional_. For private chats with business accounts, the opening hours of the business
         */
        business_opening_hours?: tgTypes.BusinessOpeningHours;
        /**
         * _Optional_. For private chats, the personal channel of the user
         */
        personal_chat?: tgTypes.Chat;
        /**
         * _Optional_. List of available reactions allowed in the chat. If omitted,
         * then all [emoji reactions](https://core.telegram.org/bots/api#reactiontypeemoji) are allowed.
         */
        available_reactions?: tgTypes.ReactionType[];
        /**
         * _Optional_. Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background
         */
        background_custom_emoji_id?: string;
        /**
         * _Optional_. Identifier of the accent color for the chat's profile background.
         * See [profile accent colors](https://core.telegram.org/bots/api#profile-accent-colors) for more details.
         */
        profile_accent_color_id?: number;
        /**
         * _Optional_. Custom emoji identifier of the emoji chosen by the chat for its profile background
         */
        profile_background_custom_emoji_id?: string;
        /**
         * _Optional_. Custom emoji identifier of the emoji status of the chat or the other party in a private chat
         */
        emoji_status_custom_emoji_id?: string;
        /**
         * _Optional_. Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any
         */
        emoji_status_expiration_date?: number;
        /**
         * _Optional_. Bio of the other party in a private chat
         */
        bio?: string;
        /**
         * _Optional_. True, if privacy settings of the other party in the private chat allows to use
         * `tg://user?id=<user_id>` links only in chats with the user
         */
        has_private_forwards?: true;
        /**
         * _Optional_. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat
         */
        has_restricted_voice_and_video_messages?: true;
        /**
         * _Optional_. True, if users need to join the supergroup before they can send messages
         */
        join_to_send_messages?: true;
        /**
         * _Optional_. True, if all users directly joining the supergroup without using an invite link
         * need to be approved by supergroup administrators
         */
        join_by_request?: true;
        /**
         * _Optional_. Description, for groups, supergroups and channel chats
         */
        description?: string;
        /**
         * _Optional_. Primary invite link, for groups, supergroups and channel chats
         */
        invite_link?: string;
        /**
         * _Optional_. The most recent pinned message (by sending date)
         */
        pinned_message?: tgTypes.Message;
        /**
         * _Optional_. Default chat member permissions, for groups and supergroups
         */
        permissions?: tgTypes.ChatPermissions;
        /**
         * _Optional_. True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats.
         */
        can_send_paid_media?: true;
        /**
         * _Optional_. For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds
         */
        slow_mode_delay?: number;
        /**
         * _Optional_. For supergroups, the minimum number of boosts that a non-administrator user needs to add
         * in order to ignore slow mode and chat permissions
         */
        unrestrict_boost_count?: number;
        /**
         * _Optional_. The time after which all messages sent to the chat will be automatically deleted; in seconds
         */
        message_auto_delete_time?: number;
        /**
         * _Optional_. True, if aggressive anti-spam checks are enabled in the supergroup.
         * The field is only available to chat administrators.
         */
        has_aggressive_anti_spam_enabled?: true;
        /**
         * _Optional_. True, if non-administrators can only get the list of bots and administrators in the chat
         */
        has_hidden_members?: true;
        /**
         * _Optional_. True, if messages from the chat can't be forwarded to other chats
         */
        has_protected_content?: true;
        /**
         * _Optional_. True, if new chat members will have access to old messages; available only to chat administrators
         */
        has_visible_history?: true;
        /**
         * _Optional_. For supergroups, name of the group sticker set
         */
        sticker_set_name?: string;
        /**
         * _Optional_. True, if the bot can change the group sticker set
         */
        can_set_sticker_set?: true;
        /**
         * _Optional_. For supergroups, the name of the group's custom emoji sticker set.
         * Custom emoji from this set can be used by all users and bots in the group.
         */
        custom_emoji_sticker_set_name?: string;
        /**
         * _Optional_. Unique identifier for the linked chat, i.e.
         * the discussion group identifier for a channel and vice versa; for supergroups and channel chats.
         */
        linked_chat_id?: number;
        /**
         * _Optional_. For supergroups, the location to which the supergroup is connected
         */
        location?: tgTypes.ChatLocation;
    }

    /**
     * This object represents a service message about a user boosting a chat.
     *
     * [ChatBoostAdded - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatboostadded)
     */
    interface ChatBoostAdded {
        /**
         * Number of boosts added by the user
         */
        boost_count: number;
    }

    /**
     * This object contains information about a chat that was shared with the bot using a
     * [KeyboardButtonRequestChat](https://core.telegram.org/bots/api#keyboardbuttonrequestchat) button.
     *
     * [ChatShared - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatshared)
     */
    interface ChatShared {
        /**
         * Identifier of the request
         */
        request_id: number;
        /**
         * Identifier of the shared chat.
         */
        chat_id: number;
        /**
         * _Optional_. Title of the chat, if the title was requested by the bot.
         */
        title?: string;
        /**
         * _Optional_. Username of the chat, if the username was requested by the bot and available.
         */
        username?: string;
        /**
         * _Optional_. Available sizes of the chat photo, if the photo was requested by the bot
         */
        photo?: tgTypes.PhotoSize[];
    }

    /**
     * This object represents a service message about a video chat scheduled in the chat.
     *
     * [VideoChatScheduled - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#videochatscheduled)
     */
    interface VideoChatScheduled {
        /**
         * Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator
         */
        start_date: number;
    }

    /**
     * This object represents a service message about a video chat started in the chat. Currently holds no information.
     *
     * [VideoChatStarted - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#videochatstarted)
     */
    interface VideoChatStarted {
    }

    /**
     * This object represents a service message about a video chat ended in the chat.
     *
     * [VideoChatEnded - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#videochatended)
     */
    interface VideoChatEnded {
        /**
         * Video chat duration in seconds
         */
        duration: number;
    }

    /**
     * This object represents a service message about new members invited to a video chat.
     *
     * [VideoChatParticipantsInvited - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#videochatparticipantsinvited)
     */
    interface VideoChatParticipantsInvited {
        /**
         * New members that were invited to the video chat
         */
        users: tgTypes.User[];
    }

    /**
     * This object represents a chat photo.
     *
     * [ChatPhoto - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatphoto)
     */
    interface ChatPhoto {
        /**
         * File identifier of small (160x160) chat photo.
         * This file_id can be used only for photo download and only for as long as the photo is not changed.
         */
        small_file_id: string;
        /**
         * Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots.
         * Can't be used to download or reuse the file.
         */
        small_file_unique_id: string;
        /**
         * File identifier of big (640x640) chat photo.
         * This file_id can be used only for photo download and only for as long as the photo is not changed.
         */
        big_file_id: string;
        /**
         * Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots.
         * Can't be used to download or reuse the file.
         */
        big_file_unique_id: string;
    }

    /**
     * Represents an invite link for a chat.
     *
     * [ChatInviteLink - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatinvitelink)
     */
    interface ChatInviteLink {
        /**
         * The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”.
         */
        invite_link: string;
        /**
         * Creator of the link
         */
        creator: tgTypes.User;
        /**
         * True, if users joining the chat via the link need to be approved by chat administrators
         */
        creates_join_request: boolean;
        /**
         * True, if the link is primary
         */
        is_primary: boolean;
        /**
         * True, if the link is revoked
         */
        is_revoked: boolean;
        /**
         * _Optional_. Invite link name
         */
        name?: string;
        /**
         * _Optional_. Point in time (Unix timestamp) when the link will expire or has been expired
         */
        expire_date?: number;
        /**
         * _Optional_. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
         */
        member_limit?: number;
        /**
         * _Optional_. Number of pending join requests created using this link
         */
        pending_join_request_count?: number;
    }

    /**
     * Represents the rights of an administrator in a chat.
     *
     * [ChatAdministratorRights - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatadministratorrights)
     */
    interface ChatAdministratorRights {
        /**
         * True, if the user's presence in the chat is hidden
         */
        is_anonymous: boolean;
        /**
         * True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members,
         * report spam messages and ignore slow mode. Implied by any other administrator privilege.
         */
        can_manage_chat: boolean;
        /**
         * True, if the administrator can delete messages of other users
         */
        can_delete_messages: boolean;
        /**
         * True, if the administrator can manage video chats
         */
        can_manage_video_chats: boolean;
        /**
         * True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
         */
        can_restrict_members: boolean;
        /**
         * True, if the administrator can add new administrators with a subset of their own privileges
         * or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)
         */
        can_promote_members: boolean;
        /**
         * True, if the user is allowed to change the chat title, photo and other settings
         */
        can_change_info: boolean;
        /**
         * True, if the user is allowed to invite new users to the chat
         */
        can_invite_users: boolean;
        /**
         * True, if the administrator can post stories to the chat
         */
        can_post_stories: boolean;
        /**
         * True, if the administrator can edit stories posted by other users, post stories to the chat page,
         * pin chat stories, and access the chat's story archive
         */
        can_edit_stories: boolean;
        /**
         * True, if the administrator can delete stories posted by other users
         */
        can_delete_stories: boolean;
        /**
         * _Optional_. True, if the administrator can post messages in the channel, or access channel statistics; for channels only
         */
        can_post_messages?: boolean;
        /**
         * _Optional_. True, if the administrator can edit messages of other users and can pin messages; for channels only
         */
        can_edit_messages?: boolean;
        /**
         * _Optional_. True, if the user is allowed to pin messages; for groups and supergroups only
         */
        can_pin_messages?: boolean;
        /**
         * _Optional_. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
         */
        can_manage_topics?: boolean;
    }

    /**
     * This object represents changes in the status of a chat member.
     *
     * [ChatMemberUpdated - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatmemberupdated)
     */
    interface ChatMemberUpdated {
        /**
         * Chat the user belongs to
         */
        chat: tgTypes.Chat;
        /**
         * Performer of the action, which resulted in the change
         */
        from: tgTypes.User;
        /**
         * Date the change was done in Unix time
         */
        date: number;
        /**
         * Previous information about the chat member
         */
        old_chat_member: tgTypes.ChatMember;
        /**
         * New information about the chat member
         */
        new_chat_member: tgTypes.ChatMember;
        /**
         * _Optional_. Chat invite link, which was used by the user to join the chat; for joining by invite link events only.
         */
        invite_link?: tgTypes.ChatInviteLink;
        /**
         * _Optional_. True, if the user joined the chat after sending a direct join request
         * without using an invite link and being approved by an administrator
         */
        via_join_request?: boolean;
        /**
         * _Optional_. True, if the user joined the chat via a chat folder invite link
         */
        via_chat_folder_invite_link?: boolean;
    }

    /**
     * This object contains information about one member of a chat.
     *
     * [ChatMember - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatmember)
     */
    type ChatMember =
        ChatMemberOwner
        | ChatMemberAdministrator
        | ChatMemberMember
        | ChatMemberRestricted
        | ChatMemberLeft
        | ChatMemberBanned;

    /**
     * Represents a [chat member](https://core.telegram.org/bots/api#chatmember) that owns the chat and has all administrator privileges.
     *
     * [ChatMemberOwner - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatmemberowner)
     */
    interface ChatMemberOwner {
        /**
         * The member's status in the chat, always “creator”
         */
        status: 'creator';
        /**
         * Information about the user
         */
        user: tgTypes.User;
        /**
         * True, if the user's presence in the chat is hidden
         */
        is_anonymous: boolean;
        /**
         * _Optional_. Custom title for this user
         */
        custom_title?: string;
    }

    /**
     * Represents a [chat member](https://core.telegram.org/bots/api#chatmember) that has some additional privileges.
     *
     * [ChatMemberAdministrator - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatmemberadministrator)
     */
    interface ChatMemberAdministrator {
        /**
         * The member's status in the chat, always “administrator”
         */
        status: 'administrator';
        /**
         * Information about the user
         */
        user: tgTypes.User;
        /**
         * True, if the bot is allowed to edit administrator privileges of that user
         */
        can_be_edited: boolean;
        /**
         * True, if the user's presence in the chat is hidden
         */
        is_anonymous: boolean;
        /**
         * True, if the administrator can access the chat event log, get boost list,
         * see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege.
         */
        can_manage_chat: boolean;
        /**
         * True, if the administrator can delete messages of other users
         */
        can_delete_messages: boolean;
        /**
         * True, if the administrator can manage video chats
         */
        can_manage_video_chats: boolean;
        /**
         * True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics
         */
        can_restrict_members: boolean;
        /**
         * True, if the administrator can add new administrators with a subset of their own privileges or demote administrators
         * that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)
         */
        can_promote_members: boolean;
        /**
         * True, if the user is allowed to change the chat title, photo and other settings
         */
        can_change_info: boolean;
        /**
         * True, if the user is allowed to invite new users to the chat
         */
        can_invite_users: boolean;
        /**
         * True, if the administrator can post stories to the chat
         */
        can_post_stories: boolean;
        /**
         * True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories,
         * and access the chat's story archive
         */
        can_edit_stories: boolean;
        /**
         * True, if the administrator can delete stories posted by other users
         */
        can_delete_stories: boolean;
        /**
         * _Optional_. True, if the administrator can post messages in the channel, or access channel statistics; for channels only
         */
        can_post_messages?: boolean;
        /**
         * _Optional_. True, if the administrator can edit messages of other users and can pin messages; for channels only
         */
        can_edit_messages?: boolean;
        /**
         * _Optional_. True, if the user is allowed to pin messages; for groups and supergroups only
         */
        can_pin_messages?: boolean;
        /**
         * _Optional_. True, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only
         */
        can_manage_topics?: boolean;
        /**
         * _Optional_. Custom title for this user
         */
        custom_title?: string;
    }

    /**
     * Represents a [chat member](https://core.telegram.org/bots/api#chatmember) that has no additional privileges or restrictions.
     *
     * [ChatMemberMember - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatmembermember)
     */
    interface ChatMemberMember {
        /**
         * The member's status in the chat, always “member”
         */
        status: 'member';
        /**
         * Information about the user
         */
        user: tgTypes.User;
        /**
         * Optional. Date when the user's subscription will expire; Unix time
         */
        until_date?: number;
    }

    /**
     * Represents a [chat member](https://core.telegram.org/bots/api#chatmember) that is under certain restrictions in the chat. Supergroups only.
     *
     * [ChatMemberRestricted - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatmemberrestricted)
     */
    interface ChatMemberRestricted {
        /**
         * The member's status in the chat, always “restricted”
         */
        status: 'restricted';
        /**
         * Information about the user
         */
        user: tgTypes.User;
        /**
         * True, if the user is a member of the chat at the moment of the request
         */
        is_member: boolean;
        /**
         * True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
         */
        can_send_messages: boolean;
        /**
         * True, if the user is allowed to send audios
         */
        can_send_audios: boolean;
        /**
         * True, if the user is allowed to send documents
         */
        can_send_documents: boolean;
        /**
         * True, if the user is allowed to send photos
         */
        can_send_photos: boolean;
        /**
         * True, if the user is allowed to send videos
         */
        can_send_videos: boolean;
        /**
         * True, if the user is allowed to send video notes
         */
        can_send_video_notes: boolean;
        /**
         * True, if the user is allowed to send voice notes
         */
        can_send_voice_notes: boolean;
        /**
         * True, if the user is allowed to send polls
         */
        can_send_polls: boolean;
        /**
         * True, if the user is allowed to send animations, games, stickers and use inline bots
         */
        can_send_other_messages: boolean;
        /**
         * True, if the user is allowed to add web page previews to their messages
         */
        can_add_web_page_previews: boolean;
        /**
         * True, if the user is allowed to change the chat title, photo and other settings
         */
        can_change_info: boolean;
        /**
         * True, if the user is allowed to invite new users to the chat
         */
        can_invite_users: boolean;
        /**
         * True, if the user is allowed to pin messages
         */
        can_pin_messages: boolean;
        /**
         * True, if the user is allowed to create forum topics
         */
        can_manage_topics: boolean;
        /**
         * Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever
         */
        until_date: number;
    }

    /**
     * Represents a [chat member](https://core.telegram.org/bots/api#chatmember) that isn't currently a member of the chat,
     * but may join it themselves.
     *
     * [ChatMemberLeft - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatmemberleft)
     */
    interface ChatMemberLeft {
        /**
         * The member's status in the chat, always “left”
         */
        status: 'left';
        /**
         * Information about the user
         */
        user: tgTypes.User;
    }

    /**
     * Represents a [chat member](https://core.telegram.org/bots/api#chatmember) that was banned in the chat
     * and can't return to the chat or view chat messages.
     *
     * [ChatMemberBanned - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatmemberbanned)
     */
    interface ChatMemberBanned {
        /**
         * The member's status in the chat, always “kicked”
         */
        status: 'kicked';
        /**
         * Information about the user
         */
        user: tgTypes.User;
        /**
         * Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever
         */
        until_date: number;
    }

    /**
     * Represents a join request sent to a chat.
     *
     * [ChatJoinRequest - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatjoinrequest)
     */
    interface ChatJoinRequest {
        /**
         * Chat to which the request was sent
         */
        chat: tgTypes.Chat;
        /**
         * User that sent the join request
         */
        from: tgTypes.User;
        /**
         * Identifier of a private chat with the user who sent the join request.
         * The bot can use this identifier for 5 minutes to send messages until the join request is processed,
         * assuming no other administrator contacted the user.
         */
        user_chat_id: number;
        /**
         * Date the request was sent in Unix time
         */
        date: number;
        /**
         * _Optional_. Bio of the user.
         */
        bio?: string;
        /**
         * _Optional_. Chat invite link that was used by the user to send the join request
         */
        invite_link?: tgTypes.ChatInviteLink;
    }

    /**
     * Describes actions that a non-administrator user is allowed to take in a chat.
     *
     * [ChatPermissions - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatpermissions)
     */
    interface ChatPermissions {
        /**
         * _Optional_. True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues
         */
        can_send_messages?: boolean;
        /**
         * _Optional_. True, if the user is allowed to send audios
         */
        can_send_audios?: boolean;
        /**
         * _Optional_. True, if the user is allowed to send documents
         */
        can_send_documents?: boolean;
        /**
         * _Optional_. True, if the user is allowed to send photos
         */
        can_send_photos?: boolean;
        /**
         * _Optional_. True, if the user is allowed to send videos
         */
        can_send_videos?: boolean;
        /**
         * _Optional_. True, if the user is allowed to send video notes
         */
        can_send_video_notes?: boolean;
        /**
         * _Optional_. True, if the user is allowed to send voice notes
         */
        can_send_voice_notes?: boolean;
        /**
         * _Optional_. True, if the user is allowed to send polls
         */
        can_send_polls?: boolean;
        /**
         * _Optional_. True, if the user is allowed to send animations, games, stickers and use inline bots
         */
        can_send_other_messages?: boolean;
        /**
         * _Optional_. True, if the user is allowed to add web page previews to their messages
         */
        can_add_web_page_previews?: boolean;
        /**
         * _Optional_. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups
         */
        can_change_info?: boolean;
        /**
         * _Optional_. True, if the user is allowed to invite new users to the chat
         */
        can_invite_users?: boolean;
        /**
         * _Optional_. True, if the user is allowed to pin messages. Ignored in public supergroups
         */
        can_pin_messages?: boolean;
        /**
         * _Optional_. True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages
         */
        can_manage_topics?: boolean;
    }

    /**
     * Represents a location to which a chat is connected.
     *
     * [ChatLocation - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatlocation)
     */
    interface ChatLocation {
        /**
         * The location to which the supergroup is connected. Can't be a live location.
         */
        location: tgTypes.Location;
        /**
         * Location address; 1-64 characters, as defined by the chat owner
         */
        address: string;
    }

    /**
     * This object describes the source of a chat boost.
     *
     * [ChatBoostSource - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatboostsource)
     */
    type ChatBoostSource =
        tgTypes.ChatBoostSourcePremium
        | tgTypes.ChatBoostSourceGiftCode
        | tgTypes.ChatBoostSourceGiveaway

    /**
     * The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user.
     *
     * [ChatBoostSourcePremium - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatboostsourcepremium)
     */
    interface ChatBoostSourcePremium {
        /**
         * Source of the boost, always “premium”
         */
        source: 'premium';
        /**
         * User that boosted the chat
         */
        user: tgTypes.User;
    }

    /**
     * The boost was obtained by the creation of Telegram Premium gift codes to boost a chat.
     * Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.
     *
     * [ChatBoostSourceGiftCode - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatboostsourcegiftcode)
     */
    interface ChatBoostSourceGiftCode {
        /**
         * Source of the boost, always “gift_code”
         */
        source: 'gift_code';
        /**
         * User for which the gift code was created
         */
        user: tgTypes.User;
    }

    /**
     * The boost was obtained by the creation of a Telegram Premium giveaway.
     * This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.
     *
     * [ChatBoostSourceGiveaway - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatboostsourcegiveaway)
     */
    interface ChatBoostSourceGiveaway {
        /**
         * Source of the boost, always “giveaway”
         */
        source: 'giveaway';
        /**
         * Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet.
         */
        giveaway_message_id: number;
        /**
         * _Optional_. User that won the prize in the giveaway if any
         */
        user?: tgTypes.User;
        /**
         * _Optional_. True, if the giveaway was completed, but there was no user to win the prize
         */
        is_unclaimed?: true;
    }

    /**
     * This object contains information about a chat boost.
     *
     * [ChatBoost - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatboost)
     */
    interface ChatBoost {
        /**
         * Unique identifier of the boost
         */
        boost_id: string;
        /**
         * Point in time (Unix timestamp) when the chat was boosted
         */
        add_date: number;
        /**
         * Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged
         */
        expiration_date: number;
        /**
         * Source of the added boost
         */
        source: tgTypes.ChatBoostSource;
    }

    /**
     * This object represents a boost added to a chat or changed.
     *
     * [ChatBoostUpdated - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatboostupdated)
     */
    interface ChatBoostUpdated {
        /**
         * Chat which was boosted
         */
        chat: tgTypes.Chat;
        /**
         * Information about the chat boost
         */
        boost: tgTypes.ChatBoost;
    }

    /**
     * This object represents a boost removed from a chat.
     *
     * [ChatBoostRemoved - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#chatboostremoved)
     */
    interface ChatBoostRemoved {
        /**
         * Chat which was boosted
         */
        chat: tgTypes.Chat;
        /**
         * Unique identifier of the boost
         */
        boost_id: string;
        /**
         * Point in time (Unix timestamp) when the boost was removed
         */
        remove_date: number;
        /**
         * Source of the removed boost
         */
        source: tgTypes.ChatBoostSource;
    }

    /**
     * This object represents a list of boosts added to a chat by a user.
     *
     * [UserChatBoosts - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#userchatboosts)
     */
    interface UserChatBoosts {
        /**
         * The list of boosts added to the chat by the user
         */
        boosts: tgTypes.ChatBoost[];
    }
}
