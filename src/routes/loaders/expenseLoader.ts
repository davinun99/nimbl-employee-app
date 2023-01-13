import { Expense, NimblUser } from './../../types';
import { redirect } from "react-router-dom";
import { getNimblUser } from "../../utils/localStorage";
import axiosClient from '../../utils/axios';

const expenseLoader = async () => {
	const nimblUser = getNimblUser();
	if(!nimblUser){
		return redirect('/login');
	}
	let expenses: Expense[] = [];
	let error = '';
	try {
		const expenseResponse = await axiosClient.get<Expense[]>(`/expenses`);
		expenses = expenseResponse.data;
	} catch (error) {
		error = `There was an error connecting to the server! Please try again!`;
	}
	
	return { nimblUser, error, expenses };
}
export default expenseLoader;

export type ExpenseLoader = {
	nimblUser: NimblUser;
	expenses: Expense[];
	error: string;
};