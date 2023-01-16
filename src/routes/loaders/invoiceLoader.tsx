import { Expense, Invoice, NimblUser } from '../../types';
import { ActionFunctionArgs, defer, redirect } from "react-router-dom";
import { getNimblUser } from "../../utils/localStorage";
import axiosClient from '../../utils/axios';
import { handleError } from '../../utils/errorUtils';

const invoicePromise = async () => {
	try {
		const resp = await axiosClient.get<Expense[]>(`/employeemonths`);
		return resp?.data || [];
	} catch (error: any) {
		handleError(error, "Error getting your invoices");
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
const updateInvoicePromise = async(formData: FormData) => {
	const id = formData.get('id');
	formData.delete('id');
	try {
		const options = { headers:{ 'Content-Type': 'multipart/form-data' } };
        const req = await axiosClient.put(`/employeemonth/${id}/invoice`, formData, options );
		return req.data;
	} catch (error) {
		handleError(error, "Error saving your document");
		return null;
	}
}
export default invoiceLoader;

export const editInvoiceAction = async ({ request, params }: ActionFunctionArgs) => {
	const formData = await request.formData();
	return updateInvoicePromise(formData);
}

export type InvoiceLoader = {
	nimblUser: NimblUser;
	invoices: Invoice[];
	error: string;
};