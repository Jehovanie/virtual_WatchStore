import NavBarLogo from "@/_shared/components/NavBarLogo";
import { useEffect } from "react";

export default function NavbarAuth() {
    useEffect(() => {
		import("flowbite").then((flowbite) => {
			flowbite.initDropdowns();
		});
	}, []);

	return (
		<nav className="w-full bg-white border-gray-200 dark:bg-gray-900">
			<div className="w-full flex flex-wrap items-center justify-between py-4">
				<NavBarLogo />
			</div>
			<hr />
		</nav>
	);
}
