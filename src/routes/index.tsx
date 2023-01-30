import { createBrowserRouter, RouteObject } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RootPage from "../pages/RootPage";
import ExpensesPage from "../pages/ExpensesPage";
import rootLoader from "./loaders/rootLoader";
import expenseLoader from "./loaders/expenseLoader";
import invoiceLoader from "./loaders/invoiceLoader";
import uploadInvoiceLoader, { editInvoiceLoaderAction } from "./loaders/uploadInvoiceLoader";
import InvoicesPage from "../pages/InvoicesPage";
import recruiterLoader from "./loaders/recruiterLoader";
import CreateExpensePage from "../pages/CreateExpensePage";
import createExpenseLoader, { createExpenseAction } from "./loaders/createExpenseLoader";
import EditProfilePage from "../pages/EditProfilePage";
import { editRecruiterAction } from "./loaders/editProfileLoader";
import UploadInvoicePage from "../pages/UploadInvoicePage";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		id: "MainLayout",
		children: [
			{
				path: "/",
				element: <RootPage />
			},
			{
				path: "/profile",
				element: <ProfilePage />,
				loader: recruiterLoader,
			},
			{
				path: "/profile/edit",
				element: <EditProfilePage />,
				action: editRecruiterAction,
			},
			{
				path: "/expenses",
				element: <ExpensesPage />,
				loader: expenseLoader,
			},
			{
				path: "/expenses/new",
				element: <CreateExpensePage />,
				loader: createExpenseLoader,
				action: createExpenseAction,
			},
			{
				path: "/invoices",
				element: <InvoicesPage />,
				loader: invoiceLoader
			},
			{
				path: "/invoice/:invoiceId",
				element: <UploadInvoicePage />,
				loader: uploadInvoiceLoader,
				action: editInvoiceLoaderAction,
			}
		]
	},
	{
		path: "/login",
		element: <LoginPage />
	}
];
type RouteOptions = {
	basename?: string;
};
let routeOptions:RouteOptions = {};
if(window.location.href.includes('nimbl.ai')){
	routeOptions.basename = '/employeeportal';
}
const router = createBrowserRouter(routes, routeOptions);
export default router;
