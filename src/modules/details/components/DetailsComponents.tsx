import Footer from "../../../_shared/components/Footer";
import DetailsContent from "./_shared/DetailsContent";
import Navbar from "./_shared/Navbar";
import NavBreadCrumb from "./_shared/NavBreadCrumb";
import RelatedProduct from "./_shared/RelatedProduct";

const DetailsComponents = () => {
	return (
		<div className="w-full min-h-screen content_page">
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto ">
				<Navbar />
			</div>
			<div className="content_nav_bread_crumb max-sm:mb-6 sm:mb-8 md:mb-16">
				<NavBreadCrumb />
			</div>
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto">
				<DetailsContent />
				<hr className="my-16" />
			</div>

			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto mb-16">
				<RelatedProduct />
			</div>

			<div className="content_nav_bard w-full overflow-x-hidden">
				<Footer />
			</div>
		</div>
	);
};

export default DetailsComponents;
