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

export type NimblUser = {
    city: string;
    kpi_level: number;
    profile_photo: string;
    recruiter_email: string;
    recruiter_first_name: string,
    recruiter_id: 10,
    recruiter_last_name: string,
    recruiter_type_id: 1,
    user_id: 11,
    recruiter_type: [
        {
            "recruiter_type": "Admin",
            "recruiter_type_id": 1,
            "restrict_client_info": false
        }
    ],
    kpi: [
        {
            "kpi_frequency": "Monthly",
            "kpi_goal_value": 16,
            "kpi_id": 3,
            "kpi_level": 1,
            "kpi_name": "Calls booked"
        },
        {
            "kpi_frequency": "Monthly",
            "kpi_goal_value": 150,
            "kpi_id": 2,
            "kpi_level": 1,
            "kpi_name": "Connections made"
        },
        {
            "kpi_frequency": "Monthly",
            "kpi_goal_value": 500,
            "kpi_id": 1,
            "kpi_level": 1,
            "kpi_name": "No of connection requests sent"
        }
    ],
    role: string;
}