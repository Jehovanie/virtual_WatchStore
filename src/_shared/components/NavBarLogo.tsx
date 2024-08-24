import logo from "@/assets/logo.jpg";

import { Link } from "react-router-dom";

export default function NavBarLogo() {
	return (
		<Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
			<img src={logo} className="h-16" alt="NobleWatchStore" />
			<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
				NobleWatchStore
			</span>
		</Link>
	);
}
