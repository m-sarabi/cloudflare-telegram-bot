import * as availableMethods from './available_methods';
import * as gettingUpdates from './getting_updates';
import * as updatingMessages from './updating_messages';
import * as stickers from './stickers';
import * as inlineQuery from './inline_query';

export const tg = {
    ...availableMethods.tg,
    ...gettingUpdates.tg,
    ...updatingMessages.tg,
    ...stickers.tg,
    ...inlineQuery.tg,
};
