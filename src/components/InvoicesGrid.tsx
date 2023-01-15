import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Invoice } from "../types";
import { dateCellToLocale, getDateFromStr } from "../utils/dateUtils";
import DefaultGrid from "./DefaultGrid";

type Props = {
	invoices: Invoice[];
}
const columnHelper = createColumnHelper<Invoice>();
const columns: ColumnDef<Invoice, any>[] = [
	columnHelper.accessor('date', { header: 'Date', cell: dateCellToLocale}),
	columnHelper.accessor('amount', { header: 'Amount'}),
	columnHelper.accessor('status', { header: 'Status'}),
];
const InvoicesGrid = ({ invoices }: Props) => {
	return (
		<DefaultGrid<Invoice> data={invoices} columns={columns} />
	)
}

export default InvoicesGrid;