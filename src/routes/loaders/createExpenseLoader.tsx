import { ActionFunctionArgs, defer, redirect } from "react-router-dom";
import { ExpenseCategory, NimblUser, PayMethod } from "../../types";
import axiosClient from "../../utils/axios";
import { handleError } from "../../utils/errorUtils";
import { getNimblUser } from "../../utils/localStorage";

// REACT ROUTER LOADER LOGIC
const getExpenseCategories = async () => {
	try {
		const resp = await axiosClient.get<ExpenseCategory[]>(`/expensecategories`);
		return resp?.data || [];
	} catch (error: any) {
		handleError(error, "Error getting expense categories");
		return [];
	}
}
const getExpensePayMethods = async () => {
	try {
		const resp = await axiosClient.get<PayMethod[]>(`/expensepaymethod`);
		return resp?.data || [];
	} catch (error: any) {
		handleError(error, "Error getting expense payment methods");
		return [];
	}
}

const createExpenseLoader = async () => {
	const nimblUser = getNimblUser();
	if(!nimblUser){
		return redirect('/login');
	}
	let categories = getExpenseCategories();
	let paymentMethods = getExpensePayMethods();
	return defer({ nimblUser, categories, paymentMethods });
};

export default createExpenseLoader;

export type CreateExpenseLoader = {
	nimblUser: NimblUser;
	categories: ExpenseCategory[];
	paymentMethods: PayMethod[];
};


// REACT ROUTER ACTION: CREATE EXPENSE LOGIC
const createExpensePromise = async(formData: FormData) => {
	const data = Object.fromEntries(formData);
	try {
        const req = await axiosClient.post(`/expense`, data );
		return req.data;
	} catch (error) {
		handleError(error, "Error creating expense");
		return null;
	}
};

export const createExpenseAction = async ({ request, params }: ActionFunctionArgs) => {
	const formData = await request.formData();
	return createExpensePromise(formData);
}