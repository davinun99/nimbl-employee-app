import { Suspense } from "react";

const EmptyLoader = () => <div>Loading...</div>

const LoginPage = () => {
	return (
		<Suspense fallback={<EmptyLoader/>}>
			<div>Login...</div>
		</Suspense>
	)
}

export default LoginPage;
