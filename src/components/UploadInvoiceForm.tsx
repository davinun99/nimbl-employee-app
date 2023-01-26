import { useState } from "react";
import { FileText } from "react-feather";
import { useFetcher } from "react-router-dom";
import { Alert, Button, Card, CardBody, Col, FormGroup, FormText, Input, Label, Row } from "reactstrap";
import { Invoice } from "../types";
import { getDateFromStr } from "../utils/dateUtils";
import { handleOpenInvoice } from "../utils/functions";
import LoaderCmp from "./LoaderCmp";

type Props = {
	invoice: Invoice;
	col: number;
};
const UploadInvoiceForm = ({ invoice, col }: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	const fetcher = useFetcher();
	const month = getDateFromStr(invoice.date) ? getDateFromStr(invoice.date)?.toLocaleDateString('en-US',{ month: 'long' }) + '\'s': 'Last ';
	return (
		<fetcher.Form encType="multipart/form-data" method="put" action={`/invoice/${invoice.recruiter_month_id}`}>
			<Card>
				<CardBody>
					<Alert color="info">{month} invoice has been uploaded. <br/>If you'd like to change the amount or upload an amended invoice, please use the fields below to do so</Alert>
					<input type="hidden" name="date" defaultValue={invoice.date || new Date().toISOString().substring(0, 10)} />
					{fetcher.state !== 'idle' && <LoaderCmp />}
					<Row>
						<Col sm={12} md={col}>
							<FormGroup>
								<Label htmlFor="amount">Amount</Label>
								<Input id="amount" type="number" name="amount" defaultValue={invoice.amount || 0} required />
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col sm={12} md={col}>
							<FormGroup>
								<Label htmlFor="amount" className="mb-1">File</Label>
								<div className="row">
									<Col sm={9} md={10}>
										<Input type="file" name="files" multiple={false} required={invoice.recruiter_document_id ? false : true}/>
									</Col>
									{invoice.recruiter_document_id && <Col sm={3} md={2} className="d-flex align-items-center">
										<span className="actionBtnSpan" onClick={() => handleOpenInvoice(invoice, setIsLoading)} title="Open invoice">
											{isLoading && <LoaderCmp/>}
											<FileText width={25}/>
										</span>
									</Col>}
								</div>
								{invoice.recruiter_document_id && <FormText>This will override existing invoice file uploaded</FormText>}
							</FormGroup>
						</Col>
					</Row>
					<Button className="mt-3" type="submit">Save invoice</Button>
				</CardBody>
			</Card>
		</fetcher.Form>
	);
}
export default UploadInvoiceForm;
