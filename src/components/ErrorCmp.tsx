type Props = {
	error: any;
}
const ErrorCmp = ({error}: Props) => (
	<div>
		<p>Error: {error.toString()}</p>
		{error?.message && <p>Message: {error.message}</p>}
		{error?.response?.message && <p>Response message: {error.response.message}</p>}
		{error?.response?.data && <p>Response data: {error.response.data}</p>}
		{/* <p>Response data: {error?.response?.data}</p> */}
	</div>
);

export default ErrorCmp;
