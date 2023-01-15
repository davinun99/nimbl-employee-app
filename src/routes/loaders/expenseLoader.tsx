import { Expense, NimblUser } from '../../types';
import { defer, redirect } from "react-router-dom";
import { getNimblUser } from "../../utils/localStorage";
import axiosClient from '../../utils/axios';
import { Store } from 'react-notifications-component';
import ErrorCmp from '../../components/ErrorCmp';

const expensesPromise = async () => {
	try {
		const resp = await axiosClient.get<Expense[]>(`/expenses`);
		return resp?.data || [];
	} catch (error: any) {
		if (!error?.isProcessed) {
			Store.addNotification({
				title: "Error",
				message: <ErrorCmp error={error}/>,
				type: "danger",
				insert: "top",
				container: "top-right",
				dismiss: {
					duration: 3000,
					onScreen: true,
					pauseOnHover: true,
					click: false,
				}
			});
		}
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