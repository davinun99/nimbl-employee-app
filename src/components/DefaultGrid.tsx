import { useReactTable, flexRender, getCoreRowModel, getSortedRowModel, SortingState, ColumnDef, InitialTableState } from '@tanstack/react-table';
import { useState } from 'react'

export type DefaultGridProps<T> = {
	data: T[];
	columns: ColumnDef<T>[];
	initialState?: InitialTableState;
};
const DefaultGrid = <T extends object>({data, columns, initialState}: DefaultGridProps<T>) => {
	const [sorting, setSorting] = useState<SortingState>([])
	const tableInstance = useReactTable({
		data,
		columns,
		state: { sorting },
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		// debugTable: true
		initialState,
	});
	return (
		<table className="table expenses-grid">
			<thead>
				{tableInstance.getHeaderGroups().map(group => (
					<tr key={group.id}>
						{group.headers.map(header => (
							<th key={header.id}>
								{header.isPlaceholder ? null : (
									<div
										{...{
											className: header.column.getCanSort()
											? 'cursor-pointer select-none'
											: '',
											onClick: header.column.getToggleSortingHandler(),
										}}
									>
										{flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
										{{
											asc: ' 🔼',
											desc: ' 🔽',
										}[header.column.getIsSorted() as string] ?? null}
									</div>
								)}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody>
				{tableInstance.getRowModel().rows.map(row => (
					<tr key={row.id}>
						{row.getVisibleCells().map(cell => (
							<td key={cell.id}>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</td>
						))}
					</tr>
				))}
			</tbody>
			<tfoot>
				{/* {tableInstance.getFooterGroups().map(group => (
					<tr key={group.id}>
						{group.headers.map(header => (
							<th key={header.id}>
								{header.isPlaceholder ? null : flexRender(
									header.column.columnDef.header,
									header.getContext()
								)}
							</th>
						))}
					</tr>
				))} */}
			</tfoot>
		</table>
	);
}

export default DefaultGrid