import { tg } from '../lib/methods';

export async function handleMessageReaction(messageReaction: tgTypes.MessageReactionUpdated) {
    console.log(messageReaction);
}
