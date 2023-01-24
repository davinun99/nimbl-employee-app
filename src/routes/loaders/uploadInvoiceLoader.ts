import { Invoice, NimblUser } from '../../types';
import { ActionFunctionArgs, defer, LoaderFunctionArgs, redirect } from "react-router-dom";
import { getNimblUser } from "../../utils/localStorage";
import { getFirstRecordFromEndpoint, putDataToEndpoint } from '../../utils/axios';

const uploadInvoiceLoader = async ({params}: LoaderFunctionArgs) => {
	const nimblUser = getNimblUser();
	if(!nimblUser){
		return redirect('/login');
	}
	let invoice = getFirstRecordFromEndpoint<Invoice>(`/recruitermonths?recruiter_month_id=${params.invoiceId}`, 'Error getting your invoices');
	return defer({ nimblUser, invoice });
}
export default uploadInvoiceLoader;

export const editInvoiceLoaderAction = async ({ request, params }: ActionFunctionArgs) => {
	const formData = await request.formData();
	const id = formData.get('id');
	formData.delete('id');
	const options = { headers:{ 'Content-Type': 'multipart/form-data' } };
	return putDataToEndpoint(`/recruitermonth/${id}/invoice`, formData, 'Error saving your document' ,options);
}

export type UploadInvoiceLoader = {
	nimblUser: NimblUser;
	invoice: Invoice;
	error: string;
};