import { Invoice } from "../types";
import axiosClient from "./axios";
import { handleError } from "./errorUtils";

export const handleOpenInvoice = async(invoice:Invoice, loaderSetter: (x: boolean) => void) => {
	loaderSetter(true);
	try {
		const documents = await axiosClient.get(`/recruiterdocuments?recruiter_document_id=${invoice.recruiter_document_id}`);
		window.open( documents.data[0].temporalUrl, '_blank' );
	} catch (error) {
		handleError(error, "Error getting invoice document");
	}
	loaderSetter(false);
};