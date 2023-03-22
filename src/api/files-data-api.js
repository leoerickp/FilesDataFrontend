import axios from 'axios';
import { URI_BASE } from '../config/config';

export const filesDataAPI = axios.create({
    baseURL: URI_BASE,
});