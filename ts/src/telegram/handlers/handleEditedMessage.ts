import { tg } from '../lib/methods';

export async function handleEditedMessage(editedMessage: tgTypes.Message) {
    console.log(editedMessage);
}
