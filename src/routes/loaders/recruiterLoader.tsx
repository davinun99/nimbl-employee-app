import { ActionFunctionArgs, defer, redirect } from "react-router-dom";
import { NimblUser } from "../../types";
import { getListFromEndpoint, putDataToEndpoint } from "../../utils/axios";
import { getNimblUser, saveUserInfo } from "../../utils/localStorage";

const recruiterPromise = async (id: number) => {
	let recruiters = await getListFromEndpoint<NimblUser>(`/recruiters?recruiter_id=${id}`, 'Error getting your profile info');
	const editedUser = recruiters[0] || null;
	const currentUser = getNimblUser() || {} as NimblUser;
	if(editedUser){
		saveUserInfo({
			...currentUser,
			...editedUser,
		});
	}
	return editedUser;
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
	const id = formData.get('id');
	formData.delete('id');
	const data = Object.fromEntries(formData);
	const recruiter = await putDataToEndpoint(`/recruiter/${id}`, data, "Error updating your profile");
	return recruiter;
};