import { Expense, Invoice, NimblUser } from '../../types';
import { defer, redirect } from "react-router-dom";
import { getNimblUser } from "../../utils/localStorage";
import axiosClient from '../../utils/axios';
import { Store } from 'react-notifications-component';
import ErrorCmp from '../../components/ErrorCmp';

const invoicePromise = async () => {
	try {
		const resp = await axiosClient.get<Expense[]>(`/employeemonths`);
		return resp?.data || [];
	} catch (error: any) {
		if (!error?.isProcessed) {
			Store.addNotification({
				title: "Error",
				message: <ErrorCmp error={error}/>,
				type: "danger",
				insert: "top",
				container: "top-right",
				dismiss: {
					duration: 3000,
					onScreen: true,
					pauseOnHover: true,
					click: false,
				}
			});
		}
		return [];	
	}
}
const invoiceLoader = async () => {
	const nimblUser = getNimblUser();
	if(!nimblUser){
		return redirect('/login');
	}
	let invoices = invoicePromise();
	let error = '';
	return defer({ nimblUser, error, invoices });
}
export default invoiceLoader;

export type InvoiceLoader = {
	nimblUser: NimblUser;
	invoices: Invoice[];
	error: string;
};