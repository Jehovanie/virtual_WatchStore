import React from "react";
import ReactDOM from "react-dom/client";

import router from "./router/@config/router_config.tsx";
import { RouterProvider } from "react-router-dom";

import { store } from "./_config/app/store.ts";
import { Provider } from "react-redux";

import "./index.css";
import "flowbite";


ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
