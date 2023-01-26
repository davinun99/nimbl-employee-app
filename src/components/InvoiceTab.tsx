import { Invoice } from "../types";
import InvoicesGrid from "./InvoicesGrid";
import UploadInvoiceForm from "./UploadInvoiceForm";
import { getDateFromStr } from '../utils/dateUtils';

type Props = {
	invoices: Invoice[];
};
type LastInvoiceCmpProps = {
	invoice?: Invoice | null;
};
const LastInvoiceCmp = ({ invoice }: LastInvoiceCmpProps) => {
	if(!invoice){
		return <></>;
	}
	const dt = getDateFromStr(invoice.date);
	let lastInvoiceTitle = dt?.toLocaleString('en-us', { month: 'long' });
	lastInvoiceTitle = lastInvoiceTitle ? `${lastInvoiceTitle} ${dt?.getFullYear()}` : 'Last';
	
	return (
		!invoice ? <></>:
		<main>
			<h6 className="font-weight-bold">{lastInvoiceTitle} invoice:</h6>
			<UploadInvoiceForm invoice={invoice} col={6} />
		</main>
	);
}
const InvoiceTab = ({ invoices }: Props) => {
	invoices.sort((i1, i2) => i1.date > i2.date ? -1 : 1);
	const lastInvoice = invoices[0];
	const restInvoices = invoices.slice(1);
	return (
		<>
			<LastInvoiceCmp invoice={lastInvoice}/>
			<InvoicesGrid invoices={restInvoices} />
		</>
	)
}

export default InvoiceTab