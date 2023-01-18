import { AxiosError } from 'axios';
import { ElementType } from "react";

export type ProfileMenuItem = {
	label: string;
	icon: ElementType;
	redirectTo: string;
	hasDivider?: boolean;
};
export type CustomAxiosError = AxiosError & { isProcessed?: boolean};
type RecruiterType = {
	recruiter_type: string;
	recruiter_type_id: number;
	restrict_client_info: boolean;
};
type KPI = {
	kpi_frequency: string;
	kpi_goal_value: number;
	kpi_id: number;
	kpi_level: number;
	kpi_name: string;
};
export type NimblUser = {
    city: string;
    kpi_level: number;
    profile_photo: string;
    recruiter_email: string;
    recruiter_first_name: string;
    recruiter_id: number;
    recruiter_last_name: string;
    recruiter_type_id: number;
    user_id: number;
    recruiter_type: RecruiterType[],
    kpi: KPI[],
    role: string;
};
export type User = {
	email: string;
	first_name: string;
	last_name: string;
	user_id: number;
	user_type_id: number;
};
export type SidebarNavItem = {
	path: string;
	icon: React.ElementType;
	name: string;
};
export type PayMethod = {
	card_alias: string,
	card_number: number;
	is_default_card: true,
	nimbl_user_id: number;
	payment_method_id: number;
	nimbl_user: User;
};
export type ExpenseCategory = {
	expense_category_description: string
	expense_category_id: number;
	external_reference: string;
};
type ExpenseDocument = {
	created_date: string;
	expense_document_id: number;
	filename: string;
	s3_bucket: string;
	s3_document_key: string;
};
export type Expense = {
	amount: number;
	expense_category_id: number | null;
	expense_currency: string;
	expense_date: string;
	expense_description: string;
	expense_document_id: string | null;
	expense_id: number;
	expense_pay_date: string;
	expense_pay_method_id: number;
	is_reconciled: boolean;
	nimbl_user_id: number;
	source: string;
	expense_payment_method?: PayMethod | null;
	expense_category?: ExpenseCategory | null;
	expense_document?: ExpenseDocument | null;
};
type EmployeeDocument = {
	created_date: string;
	document_address: string;
	employee_document_id: number;
	filename: string;
	recruiter_id: number;
	s3_bucket: string;
	s3_document_key: string;
};
export type Invoice = {
	amount: number | null;
	date: string;
	employee_document_id: number;
	employee_month_id: number;
	recruiter_id: number;
	status: string;
	employee_document: EmployeeDocument;
	recruiter: NimblUser;
};
export type ExpenseToCreate = {
	expense_description: string;
	expense_currency: string;
	expense_pay_method_id: number;
	amount: number;
	expense_category_id: number;
	expense_date: string;
	files: File | null;
};