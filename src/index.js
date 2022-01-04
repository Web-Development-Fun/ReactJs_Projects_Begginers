import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from "./Cart_reducer/context";
//import { AppProvider } from "./Sidebar-Modal/context";

ReactDOM.render(
	<React.StrictMode>
		 <AppProvider>
			<App />
		</AppProvider>	
	</React.StrictMode>,
	document.getElementById('root')
);

