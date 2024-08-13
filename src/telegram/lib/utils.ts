import { getEnv } from '../../envManagar';

interface response {
    ok: boolean,
    result: any,
    description?: string
}

export function apiUrl(methodName: string, params?: Record<string, any>) {
    const token = getEnv().TOKEN;
    const query = params ? `?${new URLSearchParams(params).toString()}` : '';

    return `https://api.telegram.org/bot${token}/${methodName}${query}`;
}

export async function callApi(methodName: string, params: Record<string, any>) {
    const response: response = await (await fetch(apiUrl(methodName, params))).json();
    if (!response.ok) {

    } else {
        return response.result;
    }
}
