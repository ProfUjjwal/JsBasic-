import "./index.css";
import App from "./App";
import React from "react";
import Store from "./storage/Store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
	<React.StrictMode>
		<Provider store={Store}>
			<App />
		</Provider>
	</React.StrictMode>
  </BrowserRouter>
);