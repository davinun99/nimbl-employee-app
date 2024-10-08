import { Store } from "react-notifications-component";
import ErrorCmp from "../components/ErrorCmp";
import Bugsnag from "@bugsnag/js";

export const handleError = (error: any, title = "Error") => {
	console.error(error);
	Bugsnag.notify(error);
	if (!error?.isProcessed) {
		Store.addNotification({
			title,
			message: <ErrorCmp error={error}/>,
			type: "danger",
			insert: "top",
			container: "top-right",
			dismiss: {
				duration: 3000,
				onScreen: true,
				pauseOnHover: true,
				click: false,
			}
		});
	}
}