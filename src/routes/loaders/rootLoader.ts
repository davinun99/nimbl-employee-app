import { redirect } from "react-router-dom";
import { getNimblUser } from "../../utils/localStorage";

const rootLoader = () => {
	const nimblUser = getNimblUser();
	if(!nimblUser){
		return redirect('/login');
	}
	return { nimblUser };
}
export default rootLoader;