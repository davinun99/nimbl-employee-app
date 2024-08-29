import React from "react";
import ReactDOM from "react-dom/client";

import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import BugsnagPerformance from "@bugsnag/browser-performance";

import App from "./App";
import "./styles/theme.scss";

Bugsnag.start({
	apiKey: import.meta.env.VITE_BUGSNAG_API_KEY,
	plugins: [new BugsnagPluginReact()],
});
BugsnagPerformance.start({ apiKey: import.meta.env.VITE_BUGSNAG_API_KEY });

const ErrorBoundary =
	Bugsnag.getPlugin("react")?.createErrorBoundary(React) || React.Fragment;

declare global {
	interface Window {
		_CURRENT_ENV_: string;
	}
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>
);
