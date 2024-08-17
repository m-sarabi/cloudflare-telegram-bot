import { tg } from '../lib/methods';

export async function handleMessage(message: tgTypes.Message) {
    console.log(message);
}
