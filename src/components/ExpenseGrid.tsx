import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Expense } from "../types";
import { dateCellToLocale } from "../utils/dateUtils";
import DefaultGrid from "./DefaultGrid";
import ExpenseRowActions from "./ExpenseRowActions";

type Props = {
	expenses: Expense[];
}
const columnHelper = createColumnHelper<Expense>();
const columns:ColumnDef<Expense, any>[] = [
	columnHelper.accessor('expense_id',{ header: 'Id', footer: props => props.column.id}),
	columnHelper.accessor('expense_date',{ header: 'Date', footer: props => props.column.id, cell: dateCellToLocale} ),
	columnHelper.accessor('expense_description',{ header: 'Description', footer: props => props.column.id}),
	columnHelper.accessor('amount',{ header: 'Amount', footer: props => props.column.id}),
	columnHelper.accessor(row => row.expense_category?.expense_category_description,{ header: 'Category', footer: props => props.column.id}),
	columnHelper.display({
		id: 'actions',
		header: 'Actions',
		cell: props => <ExpenseRowActions expense={props.row.original}/>
	}),
];
const ExpensesGrid = ({ expenses }: Props) => {
	return (
		<DefaultGrid<Expense> data={expenses} columns={columns} />
	)
}

export default ExpensesGrid;