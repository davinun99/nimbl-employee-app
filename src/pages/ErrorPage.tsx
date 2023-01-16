import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { handleError } from "../utils/errorUtils";

const ErrorPage = () => {
	const error = useRouteError();
	handleError(error, "Route error");
	if (isRouteErrorResponse(error)) {
		return (
			<div>
				<h1>Oops!</h1>
				<h2>{error.status}</h2>
				<p>{error.statusText}</p>
				{error.data?.message && <p>{error.data.message}</p>}
			</div>
		);
	} else {
		return <div>Oops!</div>;
	}
}

export default ErrorPage;
