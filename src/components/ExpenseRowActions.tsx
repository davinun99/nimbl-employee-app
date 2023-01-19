import { useState } from "react";
import { FileText } from "react-feather";
import { Spinner } from "reactstrap";
import { Expense } from "../types"
import axiosClient from "../utils/axios";
import { handleError } from "../utils/errorUtils";

type Props = {
	expense: Expense;
};

const ExpenseRowActions = ({ expense }: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	const handleViewExpense = async () => {
		setIsLoading(true);
		try {
            const documents = await axiosClient.get(`/expensedocuments?expense_document_id=${expense.expense_document_id}`);
            window.open( documents.data[0].temporalUrl, '_blank' );
        } catch (error) {
            handleError(error, "Error getting invoice document");
        }
		setIsLoading(false);
	}
	if(isLoading){
		return <Spinner size="sm"/>
	}
	return (
		expense.expense_document_id ? 
		<span className="actionBtnSpan" title="View expense document" onClick={handleViewExpense}>
			<FileText width={20}/>
		</span> : null
	);
};

export default ExpenseRowActions;
