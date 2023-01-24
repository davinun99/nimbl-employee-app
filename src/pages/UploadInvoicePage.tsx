import { Suspense } from "react"
import { Await, useLoaderData } from "react-router-dom"
import { Alert, Col, Row } from "reactstrap"
import LoaderInCard from "../components/LoaderInCard"
import PageTitle from "../components/PageTitle"
import UploadInvoiceForm from "../components/UploadInvoiceForm"
import { UploadInvoiceLoader } from "../routes/loaders/uploadInvoiceLoader"

const UploadInvoicePage = () => {
	const loaderData = useLoaderData() as UploadInvoiceLoader;
	return (
		<>
			<PageTitle title="Upload invoice" />
			<Row>
				<Col lg={12}>
					<Suspense fallback={<LoaderInCard />}>
						<Await resolve={loaderData.invoice}
							errorElement={<Alert color="danger">Error loading your invoice</Alert>}
						>
							{ invoice => <UploadInvoiceForm invoice={invoice} />}
						</Await>
					</Suspense>
				</Col>
			</Row>
		</>
	)
}

export default UploadInvoicePage