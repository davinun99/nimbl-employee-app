import { useState } from "react";
import Dropzone from "react-dropzone";
import { FileText, Upload } from "react-feather";
import { useFetcher } from "react-router-dom";
import { Spinner } from "reactstrap";
import { Invoice } from "../types"
import { handleOpenInvoice } from "../utils/functions";

type Props = {
	invoice: Invoice;
};

const InvoiceRowActions = ({ invoice }: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	const fetcher = useFetcher();
	
	const handleDrop = (files: File[]) => {
		const formData = new FormData();
        formData.append('amount', `${invoice.amount || 0}`);
		formData.append('date', invoice.date);
        formData.append('status', 'Not paid');
		formData.append('files', files[0]);
		formData.append('id', `${invoice.recruiter_month_id}`);
		fetcher.submit(formData, {method: 'put', encType: 'multipart/form-data', action: `/invoices`});
	};
	const shouldDisplaySpinner = fetcher.state !== 'idle' || isLoading;
	if(shouldDisplaySpinner){
		return <Spinner size="sm"/>
	}
	return (
		invoice.recruiter_document_id ? 
		<span className="actionBtnSpan" title="View invoice" onClick={ () => handleOpenInvoice(invoice, setIsLoading)}>
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