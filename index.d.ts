import { AxiosError } from 'axios';

declare function filterAxiosError(err: AxiosError): Error;

export default filterAxiosError;
