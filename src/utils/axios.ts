import { handleError } from './errorUtils';
import axios, { AxiosRequestConfig } from 'axios';
import Swal from 'sweetalert2';
import { CustomAxiosError } from './../types';

const currentEnv = import.meta.env.PROD ? 'PROD_ENV': 'DEV_ENV';

let backendUrl = import.meta.env.VITE_BACKEND_URL_LOCAL;
if(currentEnv === 'PROD_ENV'){
    // backendUrl = import.meta.env.VITE_BACKEND_URL_STG;
	backendUrl = import.meta.env.VITE_BACKEND_URL_PROD;
}

const axiosClient = axios.create({
    baseURL: `${backendUrl}`,
});

const refreshTokenIntenceptor = async (error: CustomAxiosError) => {
	// If the response is a 401, redirect to login
	if (error?.response?.status === 401) {
		error.isProcessed = true;
		Swal.fire({ title: "Error", text: "Your session has ended. Please log in again", icon:"error" }).then(() =>{
			localStorage.clear();
			window.location.href = "/login";
		});
		return Promise.resolve(null);
	}
	if (error?.response?.status === 403) {
		Swal.fire({ title: "Error", text: `You dont have pemission to invoke this endpoint: '${error?.response?.config?.url}'`, icon:"error" });
		error.isProcessed = true;
		return Promise.resolve(null);
	}
	return Promise.reject(error);
};
axiosClient.interceptors.response.use(
	(response) => response,
	refreshTokenIntenceptor
);
export default axiosClient;

export const getListFromEndpoint = async <T extends Object>(endpoint: string, errorTitle: string) => {
	try {
		const resp = await axiosClient.get<T[]>(endpoint);
		return resp?.data || [];
	} catch (error: any) {
		handleError(error, errorTitle);
		return [];
	}
}
export const getFirstRecordFromEndpoint = async <T extends Object>(endpoint: string, errorTitle: string) => {
	const list = await getListFromEndpoint<T>(endpoint, errorTitle);
	return list.length > 0 ? list[0] : null;
}
export const postDataToEndpoint = async<T extends Object>(
	endpoint: string, data: any , errorTitle: string, options?: AxiosRequestConfig
) => {
	try {
        const req = await axiosClient.post<T>(endpoint, data, options);
		return req.data;
	} catch (error) {
		handleError(error, errorTitle);
		return null;
	}
}
export const putDataToEndpoint = async<T extends Object>(
	endpoint: string, data: any , errorTitle: string, options?: AxiosRequestConfig
) => {
	try {
		const req = await axiosClient.put<T>(endpoint, data, options );
		return req.data;
	} catch (error) {
		handleError(error, errorTitle);
		return null;
	}
}