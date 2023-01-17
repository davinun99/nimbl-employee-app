import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { Alert, Button, Card, CardBody, Col, Row } from "reactstrap";
import { ExpenseLoader } from "../routes/loaders/expenseLoader";
import LoaderCmp from "../components/LoaderCmp";
import ExpensesGrid from "../components/ExpenseGrid";
import { Expense } from "../types";

const ExpensesPage = () => {
	const expenseData = useLoaderData() as ExpenseLoader;
	const navigate = useNavigate();
	return (
		<>
			<Row className="page-title align-items-center">
				<Col xs={12} className="d-flex align-items-center">
					<h4 className="mb-1 mt-0 me-3">Expenses</h4>
					<Button onClick={ () => navigate('/expenses/new')}>Create expense</Button>
				</Col>
			</Row>
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
