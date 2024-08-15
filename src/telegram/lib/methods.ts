import * as availableMethods from './available_methods';
import * as gettingUpdates from './getting_updates';
import * as updatingMessages from './updating_messages';

export const tg = {
    ...availableMethods.tg,
    ...gettingUpdates.tg,
    ...updatingMessages.tg,
};
