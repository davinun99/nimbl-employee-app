import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
const MainLayout = React.lazy(() => import('../layouts/MainLayout'));
const ErrorPage = React.lazy(() => import('../pages/ErrorPage'));
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const RootPage = React.lazy(() => import('../pages/RootPage'));

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
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
