import { tg } from '../lib/methods';

export async function handlePreCheckoutQuery(preCheckoutQuery: tgTypes.PreCheckoutQuery) {
    console.log(preCheckoutQuery);
}
