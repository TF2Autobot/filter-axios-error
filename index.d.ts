import { AxiosError } from 'axios';

export interface ErrorFiltered {
    message: string;
    code?: string;
    status?: number | string;
    method?: string;
    data?: Record<string, any> | string;
}

declare function filterAxiosError(err: AxiosError): ErrorFiltered;

export default filterAxiosError;
