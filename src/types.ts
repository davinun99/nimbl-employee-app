import { AxiosError } from 'axios';
import { ElementType } from "react";

export type ProfileMenuItem = {
	label: string;
	icon: ElementType;
	redirectTo: string;
	hasDivider?: boolean;
};
export type AuthData = {
	nimbl_user: {
		user_id: number,
		first_name: string,
		last_name: string,
		email: string,
		user_type_id: number
	}
};
export type CustomAxiosError = AxiosError & { isProcessed?: boolean};
type Recruiter = {
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
    recruiter_type: Recruiter[],
    kpi: KPI[],
    role: string;
};
export type SidebarNavItem = {
	path: string;
	icon: React.ElementType;
	name: string;
};