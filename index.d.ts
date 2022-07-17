import { AxiosError } from 'axios';

export interface ErrorFiltered {
    message: string;
    status: number | string;
    data?: Record<string, any> | string;
}

declare function filterAxiosError(err: AxiosError): ErrorFiltered;

export default filterAxiosError;
