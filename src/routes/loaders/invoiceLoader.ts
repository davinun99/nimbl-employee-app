import { Invoice, NimblUser } from '../../types';
import { ActionFunctionArgs, defer, redirect } from "react-router-dom";
import { getNimblUser } from "../../utils/localStorage";
import { getListFromEndpoint, putDataToEndpoint } from '../../utils/axios';

const invoiceLoader = async () => {
	const nimblUser = getNimblUser();
	if(!nimblUser){
		return redirect('/login');
	}
	let invoices = getListFromEndpoint<Invoice>('/employeemonths', 'Error getting your invoices');
	return defer({ nimblUser, invoices });
}

export default invoiceLoader;

export const editInvoiceAction = async ({ request, params }: ActionFunctionArgs) => {
	const formData = await request.formData();
	const id = formData.get('id');
	formData.delete('id');
	const options = { headers:{ 'Content-Type': 'multipart/form-data' } };
	return putDataToEndpoint(`/employeemonth/${id}/invoice`, formData, 'Error saving your document' ,options);
}

export type InvoiceLoader = {
	nimblUser: NimblUser;
	invoices: Invoice[];
	error: string;
};