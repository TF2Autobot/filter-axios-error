import { AxiosError } from 'axios';

export interface ErrorFiltered extends Error {
    status: number;
    data: Record<string, any>;
}

declare function filterAxiosError(err: AxiosError): ErrorFiltered;

export default filterAxiosError;
