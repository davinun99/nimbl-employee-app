import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Invoice } from "../types";
import { dateCellToLocale } from "../utils/dateUtils";
import DefaultGrid from "./DefaultGrid";
import InvoiceRowActions from "./InvoiceRowActions";
import StatusBadge from "./StatusBadge";

type Props = {
	invoices: Invoice[];
}
const columnHelper = createColumnHelper<Invoice>();
const columns: ColumnDef<Invoice, any>[] = [
	columnHelper.accessor('date', { header: 'Date', cell: dateCellToLocale}),
	columnHelper.accessor('amount', { header: 'Amount'}),
	columnHelper.display({id: 'statusBadges', header: 'Status',
		cell: props => <StatusBadge invoice={props.row.original}/>
	}),
	columnHelper.display({
		id: 'actions',
		header: 'Actions',
		cell: props => <InvoiceRowActions invoice={props.row.original} />,
	  }),
];
const InvoicesGrid = ({ invoices }: Props) => {
	return (
		<DefaultGrid<Invoice> data={invoices} columns={columns} initialSortingState={[{id: 'date', desc: true}]} />
	)
}

export default InvoicesGrid;