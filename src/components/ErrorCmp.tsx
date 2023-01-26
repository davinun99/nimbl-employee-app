type Props = {
	error: any;
}
const ErrorCmp = ({error}: Props) => {
	let data = "";
	let dataMsg = "";
	console.log(error, error.response, error.data, error.response?.message);
	try {
		data = JSON.stringify(error?.response?.data);
		dataMsg = error?.response?.data[0]?.message;
	} catch (error) {}
	return (
		<div>
			{/* <p>Error: {error?.toString()}</p> */}
			{error?.message && <p>Message: {error.message}</p>}
			{error?.response?.message && <p>Response message: {error.response.message}</p>}
			{data && <p>Response data message: {dataMsg}</p>}
			{data && <p>Response data: {data}</p>}
		</div>
	);
};

export default ErrorCmp;
