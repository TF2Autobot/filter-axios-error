/*!
 * filterAxiosError <https://github.com/TF2Autobot/filterAxiosError>
 *
 * Copyright (c) 2022, TF2Autobot/IdiNium.
 * Released under the MIT License.
 */

export default function filterAxiosError(err) {
    const e = new Error(err.message);
    e['status'] = err.status;
    e['data'] = err.data;

    return e;
}