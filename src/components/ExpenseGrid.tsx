import { Column, useTable } from "react-table";
import { Expense } from "../types";

const columns: Column[] = [
	{
		Header: 'Id',
		accessor: 'expense_id',
	},
	{
		Header: 'Description',
		accessor: 'expense_description',
	},
	{
		Header: 'Amount',
		accessor: 'amount',
	},
	{
		Header: 'Category',
		accessor: 'expense_category.expense_category_description',
	},
];
type Props = {
	expenses: Expense[];
}
const ExpensesGrid = ({ expenses }: Props) => {
	const tableInstance = useTable({ columns, data: expenses })
	return (
		<table className="table bg-white" {...tableInstance.getTableProps()}>
			<thead className="bg-white">
				{// Loop over the header rows
					tableInstance.headerGroups.map(headerGroup => (
						// Apply the header row props
						<tr  className="bg-white" {...headerGroup.getHeaderGroupProps()}>
							{// Loop over the headers in each row
								headerGroup.headers.map(column => (
									// Apply the header cell props
									<th className="bg-white" {...column.getHeaderProps()}>
										{// Render the header
										column.render('Header')}
									</th>
									)
								)
							}
						</tr>
					))
				}
			</thead>
			<tbody {...tableInstance.getTableBodyProps()}>
				{// Loop over the table rows
					tableInstance.rows.map(row => {
						// Prepare the row for display
						tableInstance.prepareRow(row)
						return (
							// Apply the row props
							<tr {...row.getRowProps()}>
								{// Loop over the rows cells
								row.cells.map(cell => {
								// Apply the cell props
									return (
										<td {...cell.getCellProps()}>
											{// Render the cell contents
											cell.render('Cell')}
										</td>
									)
								})}
							</tr>
						)
					})
				}
			</tbody>
		</table>
	)
}

export default ExpensesGrid;