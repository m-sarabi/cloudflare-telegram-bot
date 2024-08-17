import { tg } from '../lib/methods';

export async function handleEditedBusinessMessage(editedBusinessMessage: tgTypes.Message) {
    console.log(editedBusinessMessage);
}
