import { callApi } from './utils';

export namespace tg {
}

// note response from `(await fetch(apiUrl())).json()` is a response like:
// {
//   'ok': true,
//   'result': actual return
// };
// so response.result is the return of the method.
