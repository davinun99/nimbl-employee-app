import { useState } from "react";
import { Form } from "react-router-dom";
import { Button, Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { ExpenseCategory, ExpenseToCreate, PayMethod } from "../types";

type Props = {
	paymentMethods: PayMethod[];
	categories: ExpenseCategory[];
};
const INITIAL_EXPENSE:ExpenseToCreate = {
	expense_description: '',
	expense_currency: 'EUR',
	expense_pay_method_id: 0,
	amount: 0,
	expense_category_id: 0,
	expense_date: new Date().toISOString().substring(0, 10),
	files: null,
}
const CreateExpenseForm = ({
	paymentMethods, categories
}: Props) => {
	const [expense, setExpense] = useState(INITIAL_EXPENSE);
	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		if(e.currentTarget.name === 'files'){
			setExpense({
				...expense,
				files: e.currentTarget.files?.length ? e.currentTarget.files[0] : null,
			});
		}else{
			setExpense({
				...expense,
				[e.currentTarget.name]: e.currentTarget.value,
			});
		}
	};
	return (
		<>
			<Form method='post' encType="multipart/form-data">
				<Card>
					<CardBody>
						<Row>
							<Col sm={12} md={4}>
								<FormGroup>
									<Label htmlFor='expense_description'>Expense description</Label>
									<Input id='expense_description' type='text' name="expense_description" required value={expense.expense_description} onChange={handleChange}/>
								</FormGroup>
							</Col>
							<Col sm={12} md={3}>
								<FormGroup>
									<Label htmlFor='expense_category_id'>Expense category</Label>
									<Input id='expense_category_id' type='select' name="expense_category_id" required value={expense.expense_category_id} onChange={handleChange}>
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
										value={expense.expense_pay_method_id} onChange={handleChange} required
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
									<Input id='expense_date' type='date' name="expense_date"
										value={expense.expense_date} onChange={handleChange}
									/>
								</FormGroup>
							</Col>
							<Col sm={12} md={3}>
								<FormGroup>
									<Label htmlFor='amount'>Expense amount</Label>
									<Input id='amount' type='number' step={0.01} name="amount" required value={expense.amount} onChange={handleChange}/>
								</FormGroup>
							</Col>
							<Col sm={12} md={3}>
								<FormGroup>
									<Label htmlFor='expense_currency'>Currency</Label>
									<Input id='expense_currency' type='select' name="expense_currency" required value={expense.expense_currency} onChange={handleChange}>
										<option value=""> -- Select an option -- </option>
										<option value="EUR">EUR</option>
										<option value="USD">USD</option>
									</Input>
								</FormGroup>
							</Col>
							<Col sm={6} md={10}>
								<FormGroup>
									<Label htmlFor='files'>Files</Label>
									<Input id='files' type='file' name="files" required onChange={handleChange}/>
								</FormGroup>
							</Col>
						</Row>
						<Button type="submit">Save new expense</Button>
					</CardBody>
				</Card>
			</Form>
		</>
	)
}

export default CreateExpenseForm;
