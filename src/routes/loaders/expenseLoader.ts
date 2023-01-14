import { Expense, NimblUser } from './../../types';
import { defer, redirect } from "react-router-dom";
import { getNimblUser } from "../../utils/localStorage";
import axiosClient from '../../utils/axios';

const expensesPromise = async () => {
	try {
		const {data} = await axiosClient.get<Expense[]>(`/expenses`);
		return data;	
	} catch (error) {
		return [];	
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