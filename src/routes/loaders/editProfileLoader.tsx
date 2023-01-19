import { ActionFunctionArgs, redirect } from "react-router-dom";
import { NimblUser } from "../../types";
import { putDataToEndpoint } from "../../utils/axios";
import { updateUserInStorage } from "../../utils/localStorage";

export const editRecruiterAction = async ({ request, params }: ActionFunctionArgs) => {
	const formData = await request.formData();
	const id = formData.get('id');
	formData.delete('id');
	const data = Object.fromEntries(formData);
	const recruiter = await putDataToEndpoint<NimblUser>(`/recruiter/${id}`, data, "Error updating your profile");
	updateUserInStorage(recruiter);
	return redirect('/profile');
};