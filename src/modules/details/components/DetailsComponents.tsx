import Footer from "../../../_shared/components/Footer";
import Navbar from "./_shared/Navbar";

const DetailsComponents = () => {
	return (
		<div className="w-full min-h-screen content_page">
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto ">
				<Navbar />
			</div>

			<div className="content_nav_bard w-full overflow-x-hidden">
				<Footer />
			</div>
		</div>
	);
};

export default DetailsComponents;
