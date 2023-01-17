import { useState } from "react";
import { Form } from "react-router-dom";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { ExpenseCategory, PayMethod } from "../types";

type Props = {
	paymentMethods: PayMethod[];
	categories: ExpenseCategory[];
};

const CreateExpenseForm = ({
	paymentMethods, categories
}: Props) => {
	const [expense, setExpense] = useState({});
	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setExpense({
			...expense,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};
	return (
		<>
			<Form method='post'>
				<Row>
					<Col sm={12} lg={6}>
						<FormGroup>
							<Label for="recruiter_first_name">First name</Label>
							<Input required name="recruiter_first_name" id="recruiter_first_name" onChange={handleChange} />
						</FormGroup>
					</Col>
				</Row>
				<Button type="submit">Save new expense</Button>
			</Form>
		</>
	)
}

export default CreateExpenseForm;
