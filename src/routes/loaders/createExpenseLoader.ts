import { ActionFunctionArgs, defer, redirect } from "react-router-dom";
import { ExpenseCategory, NimblUser, PayMethod } from "../../types";
import { getListFromEndpoint, postDataToEndpoint } from "../../utils/axios";
import { getNimblUser } from "../../utils/localStorage";

// REACT ROUTER LOADER LOGIC
const createExpenseLoader = async () => {
	const nimblUser = getNimblUser();
	if(!nimblUser){
		return redirect('/login');
	}
	let categories = getListFromEndpoint<ExpenseCategory>('/expensecategories', 'Error getting expense categories');
	let paymentMethods = getListFromEndpoint<PayMethod>('/expensepaymethod', 'Error getting expense payment methods');
	return defer({ nimblUser, categories, paymentMethods });
};

export default createExpenseLoader;

export type CreateExpenseLoader = {
	nimblUser: NimblUser;
	categories: ExpenseCategory[];
	paymentMethods: PayMethod[];
};

// React action logic
export const createExpenseAction = async ({ request, params }: ActionFunctionArgs) => {
	const formData = await request.formData();
	const options = { headers:{ 'Content-Type': 'multipart/form-data' } };
	await postDataToEndpoint('/expense/withFile', formData, "Error creating expense", options);
	return redirect('/expenses');
}