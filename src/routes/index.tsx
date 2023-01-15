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
import InvoicesPage from "../pages/InvoicesPage";

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
				element: <ProfilePage />
			},
			{
				path: "/expenses",
				element: <ExpensesPage />,
				loader: expenseLoader,
			},
			{
				path: "/invoices",
				element: <InvoicesPage />,
				loader: invoiceLoader,
			}
		]
	},
	{
		path: "/login",
		element: <LoginPage />
	}
];

const router = createBrowserRouter(routes);
export default router;
