import { Expense, NimblUser } from '../../types';
import { defer, redirect } from "react-router-dom";
import { getNimblUser } from "../../utils/localStorage";
import axiosClient from '../../utils/axios';
import { handleError } from '../../utils/errorUtils';

const expensesPromise = async () => {
	try {
		const resp = await axiosClient.get<Expense[]>(`/expenses`);
		return resp?.data || [];
	} catch (error: any) {
		handleError(error, "Error getting your expenses");
	}
}
const expenseLoader = async () => {
	const nimblUser = getNimblUser();
	if(!nimblUser){
		return redirect('/login');
	}
	let expenses = expensesPromise();
	let error = '';
	return defer({ nimblUser, error, expenses });
}
export default expenseLoader;

export type ExpenseLoader = {
	nimblUser: NimblUser;
	expenses: Expense[];
	error: string;
};