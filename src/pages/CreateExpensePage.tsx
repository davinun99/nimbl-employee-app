import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Alert, Col, Row } from "reactstrap";
import CreateExpenseForm from "../components/CreateExpenseForm";
import LoaderInCard from "../components/LoaderInCard";
import PageTitle from "../components/PageTitle";
import { CreateExpenseLoader } from "../routes/loaders/createExpenseLoader";

const CreateExpensePage = () => {
	const loaderData = useLoaderData() as CreateExpenseLoader;
	return (
		<>
			<PageTitle title="Create expense" />
			<Row>
				<Col lg={12}>
					{/* User information */}
					<Suspense fallback={<LoaderInCard />}>
						<Await resolve={loaderData.categories}
							errorElement={<Alert color="danger">Error loading categories and cards</Alert>}
						>
							{ categories =>
								<Await resolve={loaderData.paymentMethods}>
									{(paymentMethods) =>
										<CreateExpenseForm categories={categories} paymentMethods={paymentMethods} />
									}
								</Await>
							}
						</Await>
					</Suspense>
				</Col>
			</Row>
		</>	
	);
}

export default CreateExpensePage;
