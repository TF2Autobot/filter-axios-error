import { AxiosError } from 'axios';

export interface ErrorFiltered {
    message: string;
    status: number;
    data: Record<string, any>;
}

declare function filterAxiosError(err: AxiosError): ErrorFiltered;

export default filterAxiosError;
