import * as availableMethods from './available_methods';
import * as gettingUpdatesMethods from './getting_updates';

export const tg = {
    ...availableMethods.tg,
    ...gettingUpdatesMethods.tg,
};
