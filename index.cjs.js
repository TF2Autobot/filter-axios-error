'use strict';

/*!
 * filterAxiosError <https://github.com/TF2Autobot/filterAxiosError>
 *
 * Copyright (c) 2022, TF2Autobot/IdiNium.
 * Released under the MIT License.
 */

function filterAxiosError(err) {
    const e = {
        message: err.message,
        code: err.code,
        status: err.response?.status ?? err.status,
        method: err.config?.method ?? err.method,
        url: err.config?.url?.replace(/\?.+/, '') ?? err.baseURL?.replace(/\?./)
    };

    if (typeof err.response?.data === 'string' && err.response?.data.includes('<html>')) {
        return e;
    }

    e['data'] = err.response?.data;
    return e;
}

module.exports = filterAxiosError;
