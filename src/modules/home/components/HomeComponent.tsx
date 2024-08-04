import Footer from "../../../@share/components/Footer";
import AsideBarHome from "./AsideBarHome";
import Navbar from "./Navbar";
import SomeBlog from "./SomeBlog";
import SomeProduct from "./SomeProduct";
import SuggestionProduct from "./SuggestionProduct";

const HomeComponent = () => {
	return (
		<div className="w-screen min-h-screen overflow-x-hidden">
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto ">
				<Navbar />
			</div>
			{/* product with best promotion*/}
			<div className="content_aside_bar_home w-full max-sm:h-[222px] sm:h-[350px] md:h-[404px] lg:h-[550px] max-h-[550px] mb-16">
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
			<div className="content_aside_bar_home w-full max-sm:h-[222px] sm:h-[350px] md:h-[404px] lg:h-[550px] max-h-[550px] mb-16">
				<AsideBarHome />
			</div>

			{/* our blog */}
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto mb-16">
				<SomeBlog />
			</div>

			<div className="content_nav_bard w-full">
				<Footer />
			</div>
		</div>
	);
};

export default HomeComponent;
