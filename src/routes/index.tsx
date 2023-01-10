import { createBrowserRouter, RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from '../pages/ErrorPage';
import LoginPage from "../pages/LoginPage";
import RootPage from '../pages/RootPage';

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />
	},
	{
		path: "/login",
		element: <LoginPage />
	}
];

const router = createBrowserRouter(routes);
export default router;
