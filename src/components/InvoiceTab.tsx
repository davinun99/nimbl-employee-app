import { Invoice } from "../types";
import InvoicesGrid from "./InvoicesGrid";
import UploadInvoiceForm from "./UploadInvoiceForm";
import { getDateFromStr } from '../utils/dateUtils';

type Props = {
	invoices: Invoice[];
};
const InvoiceTab = ({ invoices }: Props) => {
	invoices.sort((i1, i2) => i1.date > i2.date ? -1 : 1);
	const lastInvoice = invoices[0];
	const dt = getDateFromStr(lastInvoice.date);
	let lastInvoiceTitle = dt?.toLocaleString('en-us', { month: 'long' });
	lastInvoiceTitle = lastInvoiceTitle ? `${lastInvoiceTitle} ${dt?.getFullYear()}` : 'Last';
	const restInvoices = invoices.slice(1);
	return (
		<>
			<main>
				<h6 className="font-weight-bold">{lastInvoiceTitle} invoice:</h6>
				<UploadInvoiceForm invoice={lastInvoice} col={6} />
			</main>
			<InvoicesGrid invoices={restInvoices} />
		</>
	)
}

export default InvoiceTab