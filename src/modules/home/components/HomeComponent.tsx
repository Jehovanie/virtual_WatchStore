import Footer from "@shared/components/Footer";

import AsideBarHome from "./_shared/AsideBarHome";
import Navbar from "./_shared/Navbar";
import SomeBlog from "./_shared/SomeBlog";
import SomeProduct from "./_shared/SomeProduct";
import SuggestionProduct from "./_shared/SuggestionProduct";

const HomeComponent = () => {
	return (
		<div className="w-full min-h-screen content_page">
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto ">
				<Navbar />
			</div>
			{/* product with best promotion*/}
			<div className="content_aside_bar_home max-sm:h-[222px] sm:h-[350px] md:h-[404px] lg:h-[550px] max-h-[550px] mb-16 overflow-x-hidden">
				<AsideBarHome />
			</div>
			{/* suggestion product */}
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto mb-16">
				<SuggestionProduct />
			</div>

			{/* our product */}
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto mb-16">
				<SomeProduct />
			</div>

			{/* product with best promotion*/}
			<div className="content_aside_bar_home w-full max-sm:h-[222px] sm:h-[350px] md:h-[404px] lg:h-[550px] max-h-[550px] mb-16 overflow-x-hidden">
				<AsideBarHome />
			</div>

			{/* our blog */}
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto mb-16">
				<SomeBlog />
			</div>

			<div className="content_nav_bard w-full overflow-x-hidden">
				<Footer />
			</div>
		</div>
	);
};

export default HomeComponent;
