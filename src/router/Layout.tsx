import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="content_base_page">
			<Outlet />
		</div>
	);
};

export default Layout;
