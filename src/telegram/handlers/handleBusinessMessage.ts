import { tg } from '../lib/methods';

export async function handleBusinessMessage(businessMessage: tgTypes.Message) {
    console.log(businessMessage);
}
