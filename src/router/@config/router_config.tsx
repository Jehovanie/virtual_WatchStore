import { createBrowserRouter } from "react-router-dom";

import Home from "../public/Home";
import Signup from "../public/Signup";
import Signin from "../public/Signin";
import Layout from "../Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "signin",
				element: <Signin />,
			},
			{
				path: "signup",
				element: <Signup />,
			},
		],
	},
]);

export default router;
