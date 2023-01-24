import { useState } from "react";
import { FileText } from "react-feather";
import { useFetcher } from "react-router-dom";
import { Button, Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { Invoice } from "../types";
import { handleOpenInvoice } from "../utils/functions";
import LoaderCmp from "./LoaderCmp";

type Props = {
	invoice: Invoice;
};
const UploadInvoiceForm = ({ invoice }: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	const fetcher = useFetcher();
	return (
		<fetcher.Form encType="multipart/form-data">
			<Card>
				<CardBody>
					{fetcher.state !== 'idle' && <LoaderCmp />}
					<Row>
						<Col sm={12} md={4}>
							<FormGroup>
								<Label htmlFor="amount">Amount</Label>
								<Input id="amount" type="number" name="amount" defaultValue={invoice.amount || 0} required />
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col sm={12} md={4}>
							<FormGroup>
								<Label htmlFor="amount" className="mb-1">File</Label>
								{invoice.recruiter_document_id && <h6 className="text-muted mt-0 opacity-75">This will override existing invoice</h6>}
								<div className="row">
									<Col sm={9} md={10}>
										<Input type="file" name="files" multiple={false} required={invoice.recruiter_document_id ? false : true}/>
									</Col>
									{invoice.recruiter_document_id && <Col sm={3} md={2} className="d-flex align-items-center">
										<span className="actionBtnSpan" onClick={() => handleOpenInvoice(invoice, setIsLoading)} title="Open invoice">
											<FileText width={25}/>
										</span>
									</Col>}
								</div>
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
