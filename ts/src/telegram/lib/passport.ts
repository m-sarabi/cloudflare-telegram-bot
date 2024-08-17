import { callApi } from '../utils/apiManager';

export namespace tg {
    /**
     * Informs a user that some of the Telegram Passport elements they provided contains errors.
     * The user will not be able to re-submit their Passport to you until the errors are fixed
     * (the contents of the field for which you returned the error must change).
     *
     * [setPassportDataErrors - On Telegram Bot API Documentation](https://core.telegram.org/bots/api#setpassportdataerrors)
     *
     * @param user_id `Required`
     * >- User identifier
     * @param errors `Required`
     * >- A JSON-serialized array describing the errors
     * @returns >- true on success.
     */
    export async function setPassportDataErrors(
        {
            user_id,
            errors,
        }: {
            user_id: number;
            errors: tgTypes.PassportElementError[];
        }): Promise<boolean> {
        return await callApi('setPassportDataErrors', {
            user_id,
            errors: JSON.stringify(errors),
        });
    }
}
