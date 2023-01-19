import { defer, redirect } from "react-router-dom";
import { NimblUser } from "../../types";
import { getListFromEndpoint } from "../../utils/axios";
import { getNimblUser, updateUserInStorage } from "../../utils/localStorage";

const recruiterPromise = async (id: number) => {
	let recruiters = await getListFromEndpoint<NimblUser>(`/recruiters?recruiter_id=${id}`, 'Error getting your profile info');
	const updatedUser = recruiters[0] || null;
	updateUserInStorage(updatedUser);
	return updatedUser;
};

const recruiterLoader = async () => {
	const nimblUser = getNimblUser();
	if(!nimblUser){
		return redirect('/login');
	}
	let recruiter = recruiterPromise(nimblUser.recruiter_id);
	return defer({ recruiter });
};
export default recruiterLoader;

export type RecruiterLoader = {
	recruiter: NimblUser;
};