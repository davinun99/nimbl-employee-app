import { ActionFunctionArgs, defer, redirect } from "react-router-dom";
import { NimblUser } from "../../types";
import axiosClient from "../../utils/axios";
import { handleError } from "../../utils/errorUtils";
import { getNimblUser, saveUserInfo } from "../../utils/localStorage";

const updateRecruiterPromise = async(formData: FormData) => {
	const id = formData.get('id');
	formData.delete('id');
	const data = Object.fromEntries(formData);
	try {
        const req = await axiosClient.put(`/recruiter/${id}`, data );
		return req.data;
	} catch (error) {
		handleError(error, "Error updating your profile");
		return null;
	}
};
const recruiterPromise = async (id: number) => {
	try {
		const resp = await axiosClient.get<NimblUser[]>(`/recruiters?recruiter_id=${id}`);
		const editedUser = resp?.data[0] || null;
		const currentUser = getNimblUser() || {} as NimblUser;
		if(editedUser){
			saveUserInfo({
				...currentUser,
				...editedUser,
			});
		}
		return editedUser;
	} catch (error: any) {
		handleError(error, "Error getting your profile info");
	}
}
const recruiterLoader = async () => {
	const nimblUser = getNimblUser();
	if(!nimblUser){
		return redirect('/login');
	}
	let recruiter = recruiterPromise(nimblUser.recruiter_id);
	return defer({ recruiter });
}
export default recruiterLoader;

export type RecruiterLoader = {
	recruiter: NimblUser;
};

export const editRecruiterAction = async ({ request, params }: ActionFunctionArgs) => {
	const formData = await request.formData();
	await updateRecruiterPromise(formData);
	return redirect('/profile');
};