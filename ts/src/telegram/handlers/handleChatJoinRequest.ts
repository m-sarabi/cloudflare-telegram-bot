import { tg } from '../lib/methods';

export async function handleChatJoinRequest(chatJoinRequest: tgTypes.ChatJoinRequest) {
    console.log(chatJoinRequest);
}
