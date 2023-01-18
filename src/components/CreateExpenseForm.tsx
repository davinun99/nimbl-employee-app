import { useFetcher } from "react-router-dom";
import { Button, Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { ExpenseCategory, PayMethod } from "../types";
import LoaderCmp from "./LoaderCmp";

type Props = {
	paymentMethods: PayMethod[];
	categories: ExpenseCategory[];
};

const CreateExpenseForm = ({
	paymentMethods, categories
}: Props) => {
	const fetcher = useFetcher();
	return (
		<>
			<fetcher.Form method='post' encType="multipart/form-data">
				<Card>
					<CardBody>
						{fetcher.state !== 'idle' && <LoaderCmp />}
						<Row>
							<Col sm={12} md={4}>
								<FormGroup>
									<Label htmlFor='expense_description'>Expense description</Label>
									<Input id='expense_description' type='text' name="expense_description" required/>
								</FormGroup>
							</Col>
							<Col sm={12} md={3}>
								<FormGroup>
									<Label htmlFor='expense_category_id'>Expense category</Label>
									<Input id='expense_category_id' type='select' name="expense_category_id" required>
										<option value=""> -- Select category -- </option>
										{categories.map(cat => (
											<option key={cat.expense_category_id} value={cat.expense_category_id}>
												{cat.expense_category_description}
											</option>
										))}
									</Input>
								</FormGroup>
							</Col>
							<Col sm={12} md={3}>
								<FormGroup>
									<Label htmlFor='expense_pay_method_id'>Payment method</Label>
									<Input id='expense_pay_method_id' type='select' name="expense_pay_method_id"
										required
									>
										<option value=""> -- Select an option -- </option>
										{paymentMethods.map(pm => (
											<option key={pm.payment_method_id} value={pm.payment_method_id}>
												{pm.card_alias}
											</option>
										))}
									</Input>
								</FormGroup>
							</Col>
							<Col sm={12} md={4}>
								<FormGroup>
									<Label htmlFor='expense_date'>Expense date</Label>
									<Input id='expense_date' type='date' name="expense_date" defaultValue={new Date().toISOString().substring(0, 10)}/>
								</FormGroup>
							</Col>
							<Col sm={12} md={3}>
								<FormGroup>
									<Label htmlFor='amount'>Expense amount</Label>
									<Input id='amount' type='number' step={0.01} name="amount" required />
								</FormGroup>
							</Col>
							<Col sm={12} md={3}>
								<FormGroup>
									<Label htmlFor='expense_currency'>Currency</Label>
									<Input id='expense_currency' type='select' name="expense_currency" required defaultValue="EUR">
										<option value=""> -- Select an option -- </option>
										<option value="EUR">EUR</option>
										<option value="USD">USD</option>
									</Input>
								</FormGroup>
							</Col>
							<Col sm={6} md={10}>
								<FormGroup>
									<Label htmlFor='files'>Files</Label>
									<Input id='files' type='file' name="files" required />
								</FormGroup>
							</Col>
						</Row>
						<Button type="submit">Save new expense</Button>
					</CardBody>
				</Card>
			</fetcher.Form>
		</>
	)
}

export default CreateExpenseForm;
