import { tg } from '../lib/methods';

export async function handleChatMember(chatMember: tgTypes.ChatMemberUpdated) {
    console.log(chatMember);
}
