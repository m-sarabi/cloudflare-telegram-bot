import { tg } from '../lib/methods';

export async function handleMessageReactionCount(messageReactionCount: tgTypes.MessageReactionCountUpdated) {
    console.log(messageReactionCount);
}
