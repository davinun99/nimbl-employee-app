import { NimblUser } from './../../types';
import { redirect } from "react-router-dom";
import { getNimblUser, getGoogleAuthInfo } from "../../utils/localStorage";
import axiosClient from '../../utils/axios';

const rootLoader = () => {
	const nimblUser = getNimblUser();
	const googleAuth = getGoogleAuthInfo();
	if(!nimblUser || !googleAuth){
		return redirect('/login');
	}
	if(!axiosClient.defaults.headers.common.Authorization){
		axiosClient.defaults.headers.common.Authorization = `Bearer ${googleAuth.accessToken}`;
	}
	return { nimblUser };
}
export default rootLoader;
export type RootLoader = {
	nimblUser: NimblUser;
};