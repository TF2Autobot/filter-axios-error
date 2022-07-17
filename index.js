/*!
 * filterAxiosError <https://github.com/TF2Autobot/filterAxiosError>
 *
 * Copyright (c) 2022, TF2Autobot/IdiNium.
 * Released under the MIT License.
 */

export default function filterAxiosError(err) {
    const e = {
        message: err.message,
        status: err.response?.status ?? err.status
    };

    if (typeof err.data === 'string' && err.data.includes('<html>')) {
        return e;
    }

    e['data'] = err.response?.data;
    return e;
}
