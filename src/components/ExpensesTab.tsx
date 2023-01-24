import { useNavigate } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import { Expense } from "../types";
import ExpensesGrid from "./ExpenseGrid";

type Props = {
	expenses: Expense[];
};
const ExpensesTab = ({ expenses }: Props) => {
	const navigate = useNavigate();
	return (
		<>
			<Row className="page-title align-items-center">
				<Col xs={12} className="d-flex align-items-center justify-content-between">
					<h6 className="mb-1 mt-0 me-3">Expenses</h6>
					<Button onClick={ () => navigate('/expenses/new')}>Create expense</Button>
				</Col>
			</Row>
			<ExpensesGrid expenses={expenses} />
		</>
	)
}

export default ExpensesTab;
