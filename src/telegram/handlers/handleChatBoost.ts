import { tg } from '../lib/methods';

export async function handleChatBoost(chatBoost: tgTypes.ChatBoostUpdated) {
    console.log(chatBoost);
}
