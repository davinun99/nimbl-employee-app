import { createBrowserRouter, RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import RootPage from "../pages/RootPage";
import rootLoader from "./loaders/rootLoader";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		children: [
			{
				path: "/",
				element: <RootPage />
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
