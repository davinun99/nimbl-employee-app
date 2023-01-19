import { Expense, NimblUser } from '../../types';
import { defer, redirect } from "react-router-dom";
import { getNimblUser } from "../../utils/localStorage";
import { getListFromEndpoint } from '../../utils/axios';

const expenseLoader = async () => {
	const nimblUser = getNimblUser();
	if(!nimblUser){
		return redirect('/login');
	}
	let expenses = getListFromEndpoint<Expense>('/expenses', 'Error getting your expenses');
	return defer({ nimblUser, expenses });
}
export default expenseLoader;

export type ExpenseLoader = {
	nimblUser: NimblUser;
	expenses: Expense[];
	error: string;
};