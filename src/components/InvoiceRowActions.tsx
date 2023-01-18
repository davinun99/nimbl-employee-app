import { useState } from "react";
import Dropzone from "react-dropzone";
import { FileText, Upload } from "react-feather";
import { useFetcher } from "react-router-dom";
import { Spinner } from "reactstrap";
import { Invoice } from "../types"
import axiosClient from "../utils/axios";
import { handleError } from "../utils/errorUtils";

type Props = {
	invoice: Invoice;
};

const InvoiceRowActions = ({ invoice }: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	const fetcher = useFetcher();
	const handleOpenInvoice = async() => {
		setIsLoading(true);
        try {
            const documents = await axiosClient.get(`/employee_documents?employee_document_id=${invoice.employee_document_id}`);
            window.open( documents.data[0].document_address, '_blank' );
        } catch (error) {
            handleError(error, "Error getting invoice document");
        }
		setIsLoading(false);
    };
	const handleDrop = (files: File[]) => {
		const formData = new FormData();
        formData.append('amount', `${invoice.amount || 0}`);
		formData.append('date', invoice.date);
        formData.append('status', 'Not paid');
		formData.append('files', files[0]);
		formData.append('id', `${invoice.employee_month_id}`);
		fetcher.submit(formData, {method: 'put', encType: 'multipart/form-data', action: `/invoices`});
	};
	const shouldDisplaySpinner = fetcher.state !== 'idle' || isLoading;
	if(shouldDisplaySpinner){
		return <Spinner size="sm"/>
	}
	return (
		invoice.employee_document_id ? 
		<span className="actionBtnSpan" title="View invoice" onClick={handleOpenInvoice}>
			<FileText width={20}/>
		</span> :
		<span className="actionBtnSpan" title="Upload invoice">
			<Dropzone maxFiles={1} onDrop={handleDrop}>
				{({ getRootProps, getInputProps }) => (
					<span className="needsclick" {...getRootProps()}>
						<input name="files" {...getInputProps()} />
						<Upload width={20}/>
					</span>
				)}
			</Dropzone>
		</span>
	);
};

export default InvoiceRowActions