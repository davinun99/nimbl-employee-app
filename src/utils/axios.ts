import axios from 'axios';
import Swal from 'sweetalert2';
import { CustomAxiosError } from './../types';

const currentEnv = import.meta.env.PROD ? 'PROD_ENV': 'DEV_ENV';

let backendUrl = import.meta.env.VITE_BACKEND_URL_LOCAL;
if(currentEnv === 'PROD_ENV'){
    backendUrl = import.meta.env.VITE_BACKEND_URL_PROD;
}

const axiosClient = axios.create({
    baseURL: `${backendUrl}`,
});

const refreshTokenIntenceptor = async (error: CustomAxiosError) => {
	// If the response is a 401, redirect to login
	if (error?.response?.status === 401) {
		Swal.fire({ title: "Error", text: "Your session has ended. Please log in again", icon:"error" }).then(() =>{
			localStorage.clear();
			window.location.href = "/login";
			error.isProcessed = true;
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