import { createBrowserRouter } from "react-router-dom";

import Base from "../Base";
import Home from "../public/Home";
import Signup from "../public/Signup";
import Signin from "../public/Signin";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Base />,
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
