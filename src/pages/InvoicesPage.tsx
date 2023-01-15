import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";
import PageTitle from "../components/PageTitle";
import LoaderCmp from "../components/LoaderCmp";
import InvoicesGrid from "../components/InvoicesGrid";
import { InvoiceLoader } from "../routes/loaders/invoiceLoader";

const InvoicesPage = () => {
	const expenseData = useLoaderData() as InvoiceLoader;
	return (
		<>
			<PageTitle title={'Invoices'}/>
			<Row>
				<Col lg={12}>
					<Card>
						<CardBody className="expenses-grid-cardbody">
							<Suspense fallback={<LoaderCmp />}>
								<Await resolve={expenseData.invoices}
									errorElement={<Alert color="danger">Error loading expenses</Alert>}
								>
									{invoices => <InvoicesGrid invoices={invoices} />}
								</Await>
							</Suspense>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default InvoicesPage;
