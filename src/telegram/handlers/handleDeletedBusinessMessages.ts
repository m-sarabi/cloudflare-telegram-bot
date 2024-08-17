import { tg } from '../lib/methods';

export async function handleDeletedBusinessMessages(deletedBusinessMessages: tgTypes.BusinessMessagesDeleted) {
    console.log(deletedBusinessMessages);
}
