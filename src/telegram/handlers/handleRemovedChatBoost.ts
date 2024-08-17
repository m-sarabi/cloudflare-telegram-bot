import { tg } from '../lib/methods';

export async function handleRemovedChatBoost(removedChatBoost: tgTypes.ChatBoostRemoved) {
    console.log(removedChatBoost);
}
