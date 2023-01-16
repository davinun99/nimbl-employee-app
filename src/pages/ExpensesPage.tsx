import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";
import PageTitle from "../components/PageTitle";
import { ExpenseLoader } from "../routes/loaders/expenseLoader";
import LoaderCmp from "../components/LoaderCmp";
import ExpensesGrid from "../components/ExpenseGrid";
import { Expense } from "../types";

const ExpensesPage = () => {
	const expenseData = useLoaderData() as ExpenseLoader;
	return (
		<>
			<PageTitle title={'Expenses'}/>
			<Row>
				<Col lg={12}>
					<Card>
						<CardBody className="min-height-100px">
							<Suspense fallback={<LoaderCmp />}>
								<Await resolve={expenseData.expenses}
									errorElement={<Alert color="danger">Error loading expenses</Alert>}
								>
									{(expenses: Expense[]) => <ExpensesGrid expenses={expenses} />}
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
