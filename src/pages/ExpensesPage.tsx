import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";
import PageTitle from "../components/PageTitle";
import { ExpenseLoader } from "../routes/loaders/expenseLoader";
import LoaderCmp from "../components/LoaderCmp";
import ExpensesGrid from "../components/ExpenseGrid";

const ExpensesPage = () => {
	const expenseData = useLoaderData() as ExpenseLoader;
	const handleRefresh = () => {};
	return (
		<>
			<PageTitle handleRefresh={handleRefresh} title={'Expenses'}/>
			<Row>
				<Col lg={12}>
					<Card>
						<CardBody>
							<Suspense fallback={<LoaderCmp />}>
								<Await resolve={expenseData.expenses}
									errorElement={<Alert color="danger">Error loading expenses</Alert>}
								>
									{expenses => <ExpensesGrid expenses={expenses} />}
								</Await>
							</Suspense>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ExpensesPage;
