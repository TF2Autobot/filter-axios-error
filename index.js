/*!
 * filterAxiosError <https://github.com/TF2Autobot/filterAxiosError>
 *
 * Copyright (c) 2022, TF2Autobot/IdiNium.
 * Released under the MIT License.
 */

export default function filterAxiosError(err) {
    return {
        message: err.message,
        status: err.response.status,
        data: err.response.data
    };
}
