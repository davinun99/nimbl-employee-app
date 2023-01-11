import { createBrowserRouter, RouteObject } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RootPage from "../pages/RootPage";
import rootLoader from "./loaders/rootLoader";

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
