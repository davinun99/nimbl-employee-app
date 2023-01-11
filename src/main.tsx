import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './styles/theme.scss';
declare global {
    interface Window {
	  _CURRENT_ENV_: string;
    }
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App/>		
	</React.StrictMode>,
);
