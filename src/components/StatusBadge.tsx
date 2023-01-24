import { Invoice } from "../types";

type Props = {
	invoice: Invoice;
	classes?: string;
};
const StatusBadge = ({invoice, classes = ''}: Props) => {
	let type = '';
	switch (invoice.status) {
		case 'Not uploaded':
			type = 'danger';
			break;
		case 'Paid':
			type = 'success';
			break;
		default:
			type = 'warning';
			break;
	}
	return(
		<span className={`badge badge-soft-${type} py-1 ${classes}`}>
			{invoice.status}
		</span>
	);
}
export default StatusBadge;