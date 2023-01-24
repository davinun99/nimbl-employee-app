import { NimblUser, Invoice, Expense } from './../../types';
import { redirect } from "react-router-dom";
import { getNimblUser, getGoogleAuthInfo } from "../../utils/localStorage";
import axiosClient, { getListFromEndpoint } from '../../utils/axios';

const rootLoader = () => {
	const nimblUser = getNimblUser();
	const googleAuth = getGoogleAuthInfo();
	if(!nimblUser || !googleAuth){
		return redirect('/login');
	}
	if(!axiosClient.defaults.headers.common.Authorization){
		axiosClient.defaults.headers.common.Authorization = `Bearer ${googleAuth.accessToken}`;
	}
	let invoices = getListFromEndpoint<Invoice>('/recruitermonths', 'Error getting your invoices');
	let expenses = getListFromEndpoint<Expense>('/expenses', 'Error getting your expenses');
	return { nimblUser, invoices, expenses };
}
export default rootLoader;
export type RootLoader = {
	nimblUser: NimblUser;
	invoices: Invoice[];
	expenses: Expense[];
};