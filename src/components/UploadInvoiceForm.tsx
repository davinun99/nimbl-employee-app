import { useFetcher } from "react-router-dom";
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { Invoice } from "../types";
import LoaderCmp from "./LoaderCmp";

type Props = {
	invoice: Invoice;
};
const UploadInvoiceForm = ({ invoice }: Props) => {
	const fetcher = useFetcher();
	return (
		<fetcher.Form>
			<Card>
				<CardBody>
					{fetcher.state !== 'idle' && <LoaderCmp />}
					<Row>
						<Col sm={12} md={4}>
							<FormGroup>
								<Label htmlFor="amount">Amount</Label>
								<Input id="amount" type="number" name="amount" required />
							</FormGroup>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</fetcher.Form>
	);
}
export default UploadInvoiceForm;
