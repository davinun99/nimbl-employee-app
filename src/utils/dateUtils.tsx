import { CellContext } from "@tanstack/react-table";
import { Calendar } from "react-feather";

/**
 * It takes a string in the format of "YYYY-MM-DD" and returns a Date object
 * @param {string} strDate - The string date to convert to a Date object.
 * @returns A function that takes a string and returns a date object.
 */
export const getDateFromStr = (strDate: string) => {
	if(strDate.length < 10){
		return null;
	};
	try {
		const year = Number(strDate.substring(0, 4));
		const month = Number(strDate.substring(5, 7));
		const day = Number(strDate.substring(8, 10));
		return new Date(year, month - 1, day);
	} catch (error) {
		return null;
	}
};
export const dateCellToLocale = (cell: CellContext<any, any>) => {
	const str = typeof cell.getValue() === 'string' ? getDateFromStr(cell.getValue())?.toLocaleDateString() : '';
	return <span className="d-flex align-items-center">
		<Calendar size={15} className="me-1"/>
		<span>{str}</span>
	</span>;
}