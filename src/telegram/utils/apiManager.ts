import { getEnv } from './envManager';

export interface response {
    ok: boolean,
    result: any,
    description?: string
}

export function apiUrl(methodName: string, params?: Record<string, any>) {
    const token = getEnv().TOKEN;
    const query = params ? `?${new URLSearchParams(params).toString()}` : '';

    return `https://api.telegram.org/bot${token}/${methodName}${query}`;
}

export async function callApi(methodName: string, params?: Record<string, any>) {
    if (params) {
        params = Object.fromEntries(Object.entries(params).filter(([_, v]) => v !== undefined && v !== null));
    }
    const response: response = await (await fetch(apiUrl(methodName, params))).json();
    if (!response.ok) {
        throw new Error('API Call Failed:\n' + JSON.stringify(response, null, 2));
    } else {
        return response.result;
    }
}
