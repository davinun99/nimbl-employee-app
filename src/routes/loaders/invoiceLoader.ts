import { Invoice, NimblUser } from '../../types';
import { defer, redirect } from "react-router-dom";
import { getNimblUser } from "../../utils/localStorage";
import { getListFromEndpoint } from '../../utils/axios';

const invoiceLoader = async () => {
	const nimblUser = getNimblUser();
	if(!nimblUser){
		return redirect('/login');
	}
	let invoices = getListFromEndpoint<Invoice>('/recruitermonths', 'Error getting your invoices');
	return defer({ nimblUser, invoices });
}

export default invoiceLoader;

export type InvoiceLoader = {
	nimblUser: NimblUser;
	invoices: Invoice[];
	error: string;
};