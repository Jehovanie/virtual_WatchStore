import { useAppSelector } from "@/_config/app/hooks/hooks";
import Footer from "@/_shared/components/Footer";

import AsideBarHome from "./_shared/AsideBarHome";
import Navbar from "./_shared/Navbar";
import SomeBlog from "./_shared/SomeBlog";
import SomeProduct from "./_shared/SomeProduct";
import SuggestionProduct from "./_shared/SuggestionProduct";
import { WatchModel } from "@/_shared/models";
import { getAllWatchs, selectWatchById } from "@/_config/app/features/productSlice";

const HomeComponent = () => {
	const all_watchs = useAppSelector(getAllWatchs);

	const some_products: WatchModel[] = all_watchs.slice(0, 3);

	const watch_promotion: WatchModel | undefined = useAppSelector((state) => selectWatchById(state, 5));

	const watch_suggestions: WatchModel[] = all_watchs.slice(3,5);

	return (
		<div className="w-full min-h-screen content_page">
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto ">
				<Navbar />
			</div>
			{/* product with best promotion*/}
			<div className="content_aside_bar_home max-sm:h-[222px] sm:h-[350px] md:h-[404px] lg:h-[550px] max-h-[550px] mb-16 overflow-x-hidden">
				<AsideBarHome watch={watch_promotion} />
			</div>
			{/* suggestion product */}
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto mb-16">
				<SuggestionProduct watchs={watch_suggestions} />
			</div>

			{/* our product */}
			<div className="content_nav_bard max-w-screen-xl max-sm:mx-4 mx-3 xl:mx-auto mb-16">
				<SomeProduct watchs={some_products} />
			</div>

			{/* product with best promotion*/}
			<div className="content_aside_bar_home w-full max-sm:h-[222px] sm:h-[350px] md:h-[404px] lg:h-[550px] max-h-[550px] mb-16 overflow-x-hidden">
				<AsideBarHome watch={watch_promotion} />
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
