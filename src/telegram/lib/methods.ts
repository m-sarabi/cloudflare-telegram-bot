import * as availableMethods from './available_methods';
import * as gettingUpdates from './getting_updates';
import * as updatingMessages from './updating_messages';
import * as stickers from './stickers';
import * as inlineQuery from './inline_query';
import * as payments from './payments';
import * as passport from './passport';
import * as games from './games';

export const tg = {
    ...availableMethods.tg,
    ...gettingUpdates.tg,
    ...updatingMessages.tg,
    ...stickers.tg,
    ...inlineQuery.tg,
    ...payments.tg,
    ...passport.tg,
    ...games.tg,
};
