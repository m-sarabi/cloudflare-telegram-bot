import { tg } from '../lib/methods';

export async function handleCallbackQuery(callbackQuery: tgTypes.CallbackQuery) {
    console.log(callbackQuery);
}
