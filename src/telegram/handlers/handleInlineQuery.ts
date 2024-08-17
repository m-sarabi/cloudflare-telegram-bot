import { tg } from '../lib/methods';

export async function handleInlineQuery(inlineQuery: tgTypes.InlineQuery) {
    console.log(inlineQuery);
}
