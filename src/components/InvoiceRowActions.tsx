import { FileText, Upload } from "react-feather";
import { Invoice } from "../types"
import axiosClient from "../utils/axios";

type Props = {
	invoice: Invoice;
};

const InvoiceRowActions = ({ invoice }: Props) => {
	const handleOpenInvoice = async() => {
        try {
            const documents = await axiosClient.get(`/employee_documents?employee_document_id=${invoice.employee_document_id}`);
            window.open( documents.data[0].document_address, '_blank' );
        } catch (error) {
            console.log('Error ', error);
        }
    };
	return (
		invoice.employee_document_id ? 
		<span className="actionBtnSpan" title="View invoice" onClick={handleOpenInvoice}>
			<FileText width={20}/>
		</span>:
		<span className="actionBtnSpan" title="Upload invoice">
			<Upload width={20}/>
		</span>
	)
}

export default InvoiceRowActions